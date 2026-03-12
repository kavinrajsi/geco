import ContactForm from "@/components/ContactForm/ContactForm";
import PageHeader from "@/components/PageHeader/PageHeader";
import styles from "./page.module.scss";

export const revalidate = 60;

export const metadata = {
  title: "Contact",
  description:
    "Contact Geco for tile adhesive, grout, sealant, and tape enquiries. Toll-free: 1800 599 3939. Offices in Karur and Chennai, Tamil Nadu, India.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact | Geco",
    description:
      "Contact Geco for tile adhesive, grout, sealant, and tape enquiries. Toll-free: 1800 599 3939. Offices in Karur and Chennai, Tamil Nadu, India.",
    images: ["/og-image.png"],
  },
  twitter: {
    title: "Contact | Geco",
    description:
      "Contact Geco for tile adhesive, grout, sealant, and tape enquiries. Toll-free: 1800 599 3939. Offices in Karur and Chennai, Tamil Nadu, India.",
    images: ["/og-image.png"],
  },
};

export default async function ContactPage() {
  const pageTitle = "Contact";
  const address1Title = "REGISTERED OFFICE";
  const address1Text = "VNC Electrodes, 3, Industrial Estate,\nS.Vellalapatti, Karur - 639004,\nTamil Nadu, India";
  const address2Title = "CHENNAI";
  const address2Text = "VNC Electrodes, 11/4, Janaki Avenue,\nMRC Nagar, Raja Annamalai Puram,\nChennai - 600028, Tamil Nadu, India";
  const phone = "1800 599 3939";
  const phoneHref = "tel:18005993939";
  const email = "contactus@vncgroup.com";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1958.5412270581921!2d78.10737619839473!3d10.957144100000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2fd8bde0da75%3A0xabc8b2bcf9c5e9c8!2sVNC%20Group!5e0!3m2!1sen!2sin!4v1773037744267!5m2!1sen!2sin";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Organization",
      name: "Geco (VNC Electrodes)",
      telephone: phone,
      email: email,
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
        telephone: phone,
        contactType: "customer service",
        email: email,
        availableLanguage: ["English", "Tamil"],
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader title={pageTitle} />
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
                {address1Title}
              </h2>
              <p className={styles["contact__address-text"]}>
                {address1Text.split("\n").map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </p>
            </div>

            <div className={styles["contact__address"]}>
              <h2 className={styles["contact__address-title"]}>{address2Title}</h2>
              <p className={styles["contact__address-text"]}>
                {address2Text.split("\n").map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </p>
            </div>

            <div className={styles["contact__buttons"]}>
              <a href={phoneHref} className={styles["contact__btn"]}>
                <span className={styles["contact__btn-icon"]}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.08676 5.54927C1.11037 10.0896 8.01977 17.1523 12.3701 17.909C14.1614 18.1613 15.441 17.909 16.4646 16.9001C17.2323 16.3956 18 14.8821 18 13.6209C17.7441 12.8642 17.2323 12.612 16.4646 12.3597C15.9528 12.1075 13.3937 11.3508 12.8819 11.3508C11.6024 11.3508 12.1142 14.1254 10.3229 12.8642C8.01977 11.3508 6.74025 10.3418 5.20483 7.81943C4.94893 7.06271 4.69302 6.55823 5.20483 6.30599C6.99615 5.0448 7.25206 5.54927 6.48435 3.02688C6.22844 2.5224 5.97254 1.76568 5.71664 1.00896C5.46073 0.50448 5.20483 0 4.43712 0C1.36628 0 -0.425047 2.5224 0.08676 5.54927Z"
                      fill="#1F1F1F"
                    />
                  </svg>
                </span>
                <span className={styles["contact__btn-text"]}>{phone}</span>
              </a>
              <a href={`mailto:${email}`} className={styles["contact__btn"]}>
                <span className={styles["contact__btn-icon"]}>
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.95349 0H15.907C17.0233 0 18 0.865979 18 2.02062V11.9794C18 13.134 17.0233 14 15.907 14H1.95349C0.837209 14 0 13.134 0 11.9794V2.02062C0 0.865979 0.837209 0 1.95349 0ZM2.7907 1.87629L9.06977 7.07217L15.2093 1.87629C15.3488 1.58763 15.6279 1.73196 15.7674 1.87629C15.907 1.87629 15.907 2.02062 15.907 2.16495C15.907 2.30928 15.907 2.45361 15.7674 2.59794L9.34884 8.08247C9.2093 8.08247 9.06977 8.2268 9.06977 8.2268C8.93023 8.2268 8.7907 8.08247 8.65116 8.08247L2.23256 2.59794C2.09302 2.45361 2.09302 2.30928 2.09302 2.16495C2.09302 2.02062 2.09302 1.87629 2.23256 1.87629C2.37209 1.73196 2.65116 1.58763 2.7907 1.87629Z"
                      fill="#1F1F1F"
                    />
                  </svg>
                </span>
                <span className={styles["contact__btn-text"]}>{email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className={styles["contact__map"]}>
        <iframe
          src={mapEmbedUrl}
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
