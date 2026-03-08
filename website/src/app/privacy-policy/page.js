import styles from "./page.module.scss";

export const metadata = {
  title: "Privacy Policy",
  description: "Read our privacy policy to understand how we collect, use, and protect your data.",
  openGraph: {
    title: "Privacy Policy | Geco",
    description: "Read our privacy policy to understand how we collect, use, and protect your data.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    title: "Privacy Policy | Geco",
    description: "Read our privacy policy to understand how we collect, use, and protect your data.",
    images: ["/og-image.jpg"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles["policy"]}>
      <h1 className={styles["policy__title"]}>Privacy Policy</h1>
      <p className={styles["policy__updated"]}>Last updated: March 2026</p>

      <div className={styles["policy__section"]}>
        <h2 className={styles["policy__section-title"]}>Introduction</h2>
        <p className={styles["policy__text"]}>
          Geco is committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you visit our website.
        </p>
      </div>

      <div className={styles["policy__section"]}>
        <h2 className={styles["policy__section-title"]}>
          Information We Collect
        </h2>
        <p className={styles["policy__text"]}>
          We may collect the following types of information:
        </p>
        <ul className={styles["policy__list"]}>
          <li>
            Personal information such as name, email address, phone number, and
            company name when you submit our contact form.
          </li>
          <li>
            Usage data including IP address, browser type, pages visited, and
            time spent on our website.
          </li>
          <li>
            Cookies and similar tracking technologies to enhance your browsing
            experience.
          </li>
        </ul>
      </div>

      <div className={styles["policy__section"]}>
        <h2 className={styles["policy__section-title"]}>
          How We Use Your Information
        </h2>
        <ul className={styles["policy__list"]}>
          <li>To respond to your inquiries and provide customer support.</li>
          <li>To improve our website, products, and services.</li>
          <li>
            To send relevant communications related to your inquiry, with your
            consent.
          </li>
          <li>To comply with legal obligations and protect our rights.</li>
        </ul>
      </div>

      <div className={styles["policy__section"]}>
        <h2 className={styles["policy__section-title"]}>Data Protection</h2>
        <p className={styles["policy__text"]}>
          We implement appropriate technical and organisational measures to
          protect your personal data against unauthorised access, alteration,
          disclosure, or destruction.
        </p>
      </div>

      <div className={styles["policy__section"]}>
        <h2 className={styles["policy__section-title"]}>Third-Party Services</h2>
        <p className={styles["policy__text"]}>
          We may use third-party services such as Google Analytics and Google
          reCAPTCHA to monitor and analyse website usage and prevent spam. These
          services may collect information in accordance with their own privacy
          policies.
        </p>
      </div>

      <div className={styles["policy__section"]}>
        <h2 className={styles["policy__section-title"]}>Your Rights</h2>
        <p className={styles["policy__text"]}>
          You have the right to access, correct, or delete your personal data. To
          exercise these rights, please contact us through our contact form or
          email.
        </p>
      </div>

      <div className={styles["policy__section"]}>
        <h2 className={styles["policy__section-title"]}>
          Changes to This Policy
        </h2>
        <p className={styles["policy__text"]}>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated revision date.
        </p>
      </div>
    </div>
  );
}
