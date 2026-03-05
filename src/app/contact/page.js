import styles from "./page.module.css";
import { JsonLd, breadcrumbSchema, localBusinessSchema } from "../schema";

export const metadata = {
  title: "Contact Us – Get in Touch with GECO",
  description:
    "Contact GECO / VNC Electrodes for construction chemical enquiries. Toll-free: 1800 599 3939. Offices in Karur and Chennai, Tamil Nadu, India.",
  alternates: {
    canonical: "https://www.geco.in/contact",
  },
  openGraph: {
    title: "Contact GECO – Toll-Free 1800 599 3939",
    description:
      "Get in touch with GECO for tile adhesives, grouts, sealants & tapes. Offices in Karur and Chennai.",
    url: "https://www.geco.in/contact",
    type: "website",
  },
};

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5 12.69V14.94C16.5 15.18 16.41 15.41 16.25 15.59C16.09 15.76 15.87 15.87 15.63 15.9C15.21 15.96 14.79 15.99 14.37 15.99C7.55 15.99 2 10.44 2 3.63C2 3.21 2.03 2.79 2.09 2.37C2.12 2.13 2.23 1.91 2.41 1.75C2.59 1.59 2.82 1.5 3.06 1.5H5.31C5.52 1.5 5.72 1.58 5.87 1.72C6.03 1.86 6.12 2.06 6.13 2.27C6.16 2.66 6.22 3.04 6.31 3.42C6.36 3.63 6.34 3.85 6.25 4.04C6.16 4.24 6.01 4.4 5.82 4.5L4.8 5.08C5.84 7.27 7.63 9.06 9.82 10.1L10.4 9.08C10.5 8.89 10.66 8.74 10.86 8.65C11.05 8.56 11.27 8.54 11.48 8.59C11.86 8.68 12.24 8.74 12.63 8.77C12.84 8.78 13.04 8.87 13.18 9.03C13.32 9.18 13.4 9.38 13.4 9.59V12.69H16.5Z" fill="#1f1f1f"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 0.5H16.5C17.05 0.5 17.5 0.95 17.5 1.5V12.5C17.5 13.05 17.05 13.5 16.5 13.5H1.5C0.95 13.5 0.5 13.05 0.5 12.5V1.5C0.5 0.95 0.95 0.5 1.5 0.5Z" stroke="#1f1f1f" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.5 1.5L9 8L0.5 1.5" stroke="#1f1f1f" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function ContactPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact" },
  ]);

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact GECO",
    description: metadata.description,
    mainEntity: { "@id": "https://www.geco.in/#organization" },
  };

  return (
    <>
      <JsonLd data={[breadcrumbs, localBusinessSchema, contactSchema]} />
      <main>
        {/* Hero Banner */}
        <section className={styles.heroBanner}>
          <h1 className={styles.heroTitle}>Contact</h1>
        </section>

        {/* Form + Info */}
        <section className={styles.content}>
          {/* Contact Form Card */}
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Get in touch with us</h2>
            <form className={styles.form}>
              <div className={styles.formRow}>
                <input
                  type="text"
                  name="name"
                  className={styles.input}
                  placeholder="Your Name*"
                  required
                />
                <input
                  type="email"
                  name="email"
                  className={styles.input}
                  placeholder="Your Email"
                />
              </div>
              <div className={styles.formRow}>
                <input
                  type="tel"
                  name="phone"
                  className={styles.input}
                  placeholder="Phone Number*"
                  required
                />
                <input
                  type="text"
                  name="company"
                  className={styles.input}
                  placeholder="Company"
                />
              </div>
              <textarea
                name="message"
                className={styles.textarea}
                placeholder="Your Message*"
                required
              />
              <div className={styles.formActions}>
                <div className={styles.captchaPlaceholder}>
                  <div className={styles.captchaLeft}>
                    <input type="checkbox" className={styles.captchaCheckbox} />
                    <span className={styles.captchaLabel}>I&apos;m not a robot</span>
                  </div>
                  <div className={styles.captchaRight}>
                    <div className={styles.captchaLogo}>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0z" fill="#4A90D9" opacity="0.1"/>
                      </svg>
                    </div>
                    <span className={styles.captchaTerms}>Privacy - Terms</span>
                  </div>
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Info Sidebar */}
          <div className={styles.infoSidebar}>
            <div className={styles.addressBlock}>
              <h3 className={styles.addressTitle}>REGISTERED OFFICE</h3>
              <p className={styles.addressText}>
                VNC Electrodes, 3, Industrial Estate,<br />
                S.Vellalapatti, Karur - 639004,<br />
                Tamil Nadu, India.
              </p>
            </div>

            <div className={styles.addressBlock}>
              <h3 className={styles.addressTitle}>CHENNAI</h3>
              <p className={styles.addressText}>
                VNC Electrodes, 11/4, Janaki Avenue,<br />
                MRC Nagar, Raja Annamalai Puram,<br />
                Chennai - 600028, Tamil Nadu, India.
              </p>
            </div>

            <div className={styles.contactButtons}>
              <a href="tel:18005993939" className={styles.contactBtn}>
                <PhoneIcon />
                <span className={styles.contactBtnText}>1800 599 3939</span>
              </a>
              <a href="mailto:contactus@vncgroup.com" className={styles.contactBtn}>
                <EmailIcon />
                <span className={styles.contactBtnText}>contactus@vncgroup.com</span>
              </a>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className={styles.mapSection}>
          <img
            className={styles.mapImage}
            src="/images/contact/map.png"
            alt="VNC Group Location Map"
          />
        </section>
      </main>
    </>
  );
}
