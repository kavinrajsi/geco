import { SITE_URL } from "@/lib/config";
import PageHeader from "@/components/PageHeader/PageHeader";
import styles from "../privacy-policy/page.module.scss";

export const metadata = {
  title: "Terms and Conditions",
  description: "Read the terms and conditions governing the use of our website and services.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions | Geco",
    description: "Read the terms and conditions governing the use of our website and services.",
    images: ["/og-image.png"],
  },
  twitter: {
    title: "Terms and Conditions | Geco",
    description: "Read the terms and conditions governing the use of our website and services.",
    images: ["/og-image.png"],
  },
};

export default function TermsAndConditionsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms and Conditions",
    url: `${SITE_URL}/terms-and-conditions`,
    description:
      "Read the terms and conditions governing the use of our website and services.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader title="Terms and Conditions" />
      <div className={styles["policy"]}>
      <p className={styles["policy__updated"]}>Last updated: March 2026</p>

      <div className={styles["policy__section"]}>
        <h2 className={styles["policy__section-title"]}>
          Acceptance of Terms
        </h2>
        <p className={styles["policy__text"]}>
          By accessing and using the Geco website, you agree to be bound by
          these Terms and Conditions. If you do not agree with any part of these
          terms, please do not use our website.
        </p>
      </div>

      <div className={styles["policy__section"]}>
        <h2 className={styles["policy__section-title"]}>Use of Website</h2>
        <p className={styles["policy__text"]}>
          You agree to use this website only for lawful purposes and in a manner
          that does not infringe the rights of, restrict, or inhibit the use and
          enjoyment of this website by any third party.
        </p>
        <ul className={styles["policy__list"]}>
          <li>
            You must not misuse this website by knowingly introducing viruses or
            other malicious material.
          </li>
          <li>
            You must not attempt to gain unauthorised access to our website or
            server.
          </li>
          <li>
            You must not use this website for any fraudulent or unlawful
            purpose.
          </li>
        </ul>
      </div>

      <div className={styles["policy__section"]}>
        <h2 className={styles["policy__section-title"]}>
          Intellectual Property
        </h2>
        <p className={styles["policy__text"]}>
          All content on this website, including text, graphics, logos, images,
          and software, is the property of Geco and is protected by applicable
          intellectual property laws. You may not reproduce, distribute, or
          create derivative works without our prior written consent.
        </p>
      </div>

      <div className={styles["policy__section"]}>
        <h2 className={styles["policy__section-title"]}>
          Product Information
        </h2>
        <p className={styles["policy__text"]}>
          We make every effort to ensure that product information displayed on
          our website is accurate. However, we do not warrant that product
          descriptions or other content is accurate, complete, or error-free.
        </p>
      </div>

      <div className={styles["policy__section"]}>
        <h2 className={styles["policy__section-title"]}>
          Limitation of Liability
        </h2>
        <p className={styles["policy__text"]}>
          Geco shall not be liable for any indirect, incidental, special, or
          consequential damages arising out of or in connection with the use of
          this website. Our total liability shall not exceed the amount paid by
          you, if any, for accessing this website.
        </p>
      </div>

      <div className={styles["policy__section"]}>
        <h2 className={styles["policy__section-title"]}>Governing Law</h2>
        <p className={styles["policy__text"]}>
          These terms shall be governed by and construed in accordance with the
          laws of India. Any disputes arising from these terms shall be subject
          to the exclusive jurisdiction of the courts in India.
        </p>
      </div>

      <div className={styles["policy__section"]}>
        <h2 className={styles["policy__section-title"]}>
          Changes to These Terms
        </h2>
        <p className={styles["policy__text"]}>
          We reserve the right to modify these Terms and Conditions at any time.
          Changes will be effective immediately upon posting on this page. Your
          continued use of the website constitutes acceptance of the updated
          terms.
        </p>
      </div>
    </div>
    </>
  );
}
