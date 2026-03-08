import ContactForm from "@/components/ContactForm/ContactForm";
import PageHeader from "@/components/PageHeader/PageHeader";
import styles from "./page.module.scss";

export const metadata = {
  title: "Contact",
  description: "Get in touch with us. We would love to hear from you.",
  openGraph: {
    title: "Contact | Geco",
    description: "Get in touch with us. We would love to hear from you.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    title: "Contact | Geco",
    description: "Get in touch with us. We would love to hear from you.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "Organization",
    name: "Geco (VNC Electrodes)",
    telephone: "+91-1800-599-3939",
    email: "contactus@vncgroup.com",
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Karur",
        addressRegion: "Tamil Nadu",
        postalCode: "639004",
        addressCountry: "IN",
        streetAddress: "VNC Electrodes, 3, Industrial Estate, S.Vellalapatti",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        postalCode: "600028",
        addressCountry: "IN",
        streetAddress: "VNC Electrodes, 11/4, Janaki Avenue, MRC Nagar, Raja Annamalai Puram",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-1800-599-3939",
      contactType: "customer service",
      email: "contactus@vncgroup.com",
      availableLanguage: ["English", "Tamil"],
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader title="Contact" />
      <div className={styles["contact"]}>
        <div className={styles["contact__grid"]}>
        {/* Form */}
        <div className={styles["contact__form"]}>
          <ContactForm />
        </div>

        {/* Info */}
        <div className={styles["contact__info"]}>
          <div className={styles["contact__address"]}>
            <h2 className={styles["contact__address-title"]}>
              REGISTERED OFFICE
            </h2>
            <p className={styles["contact__address-text"]}>
              VNC Electrodes, 3, Industrial Estate,
              <br />
              S.Vellalapatti, Karur - 639004,
              <br />
              Tamil Nadu, India
            </p>
          </div>

          <div className={styles["contact__address"]}>
            <h2 className={styles["contact__address-title"]}>CHENNAI</h2>
            <p className={styles["contact__address-text"]}>
              VNC Electrodes, 11/4, Janaki Avenue,
              <br />
              MRC Nagar, Raja Annamalai Puram,
              <br />
              Chennai - 600028, Tamil Nadu, India
            </p>
          </div>

          <div className={styles["contact__buttons"]}>
            <a href="tel:18005993939" className={styles["contact__btn"]}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.6893 13.7691 20.7861 11.19 19.262C8.80303 17.837 6.79614 15.8299 5.37002 13.443C3.80002 10.8492 2.89729 7.85797 2.67002 4.76201C2.64502 4.48573 2.67751 4.20755 2.76451 3.94468C2.85152 3.6818 2.99116 3.43825 3.17512 3.23344C3.35908 3.02864 3.58354 2.86503 3.83283 2.75286C4.08213 2.64069 4.35282 2.58262 4.62702 2.58201H7.62702C8.10768 2.57754 8.57423 2.74621 8.94127 3.05768C9.30831 3.36914 9.55127 3.80219 9.62702 4.278C9.76748 5.22794 10.0231 6.15787 10.389 7.048C10.5277 7.38233 10.5686 7.74804 10.5073 8.10374C10.446 8.45944 10.2847 8.79078 10.042 9.058L8.78402 10.316C10.1249 12.7184 12.0986 14.6917 14.501 16.032L15.759 14.774C16.0279 14.5313 16.3593 14.37 16.715 14.3087C17.0707 14.2473 17.4364 14.2883 17.7707 14.427C18.6608 14.7929 19.5907 15.0485 20.5407 15.189C21.0216 15.2654 21.4585 15.513 21.7709 15.8863C22.0832 16.2597 22.248 16.732 22.237 17.216L22 16.92Z" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              1800 599 3939
            </a>
            <a href="mailto:contactus@vncgroup.com" className={styles["contact__btn"]}>
              <svg width="18" height="14" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4L8.912 8.614C9.2364 8.82315 9.6141 8.93419 10 8.93419C10.3859 8.93419 10.7636 8.82315 11.088 8.614L18 4M4 14H16C16.5304 14 17.0391 13.7893 17.4142 13.4142C17.7893 13.0391 18 12.5304 18 12V4C18 3.46957 17.7893 2.96086 17.4142 2.58579C17.0391 2.21071 16.5304 2 16 2H4C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V12C2 12.5304 2.21071 13.0391 2.58579 13.4142C2.96086 13.7893 3.46957 14 4 14Z" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              contactus@vncgroup.com
            </a>
          </div>
        </div>
      </div>
      </div>

      {/* Google Map */}
      <div className={styles["contact__map"]}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.123456789!2d78.0767!3d10.9601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2e0f0e0e0e0f%3A0x0!2sVNC+Group!5e0!3m2!1sen!2sin!4v1234567890"
          title="VNC Group Location"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
