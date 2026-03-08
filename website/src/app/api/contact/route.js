export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, honeypot, recaptchaToken } =
      body;

    // Honeypot check
    if (honeypot) {
      return Response.json({ success: true });
    }

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (recaptchaSecret) {
      const recaptchaRes = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
        }
      );
      const recaptchaData = await recaptchaRes.json();

      if (!recaptchaData.success || recaptchaData.score < 0.5) {
        return Response.json(
          { error: "reCAPTCHA verification failed." },
          { status: 400 }
        );
      }
    }

    // Send email via ZeptoMail
    const zeptoRes = await fetch("https://api.zeptomail.com/v1.1/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Zoho-enczapikey ${process.env.ZEPTO_MAIL_API_KEY}`,
      },
      body: JSON.stringify({
        from: {
          address: process.env.ZEPTO_FROM_EMAIL,
          name: process.env.ZEPTO_FROM_NAME || "Geco",
        },
        to: [
          {
            email_address: {
              address: process.env.ZEPTO_TO_EMAIL,
            },
          },
        ],
        subject: `New Contact Form Submission from ${name}`,
        htmlbody: `
          <h2>New Contact Form Submission</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(email)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(phone || "N/A")}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(company || "N/A")}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Message</td><td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(message)}</td></tr>
          </table>
        `,
      }),
    });

    if (!zeptoRes.ok) {
      const errorData = await zeptoRes.json().catch(() => null);
      console.error("ZeptoMail error:", errorData);
      return Response.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
