import styles from "../privacy-policy/page.module.scss";

export const metadata = {
  title: "Cookie Policy",
  description: "Learn about how we use cookies and similar technologies on our website.",
  alternates: {
    canonical: "/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy | Geco",
    description: "Learn about how we use cookies and similar technologies on our website.",
    images: ["/og-image.png"],
  },
  twitter: {
    title: "Cookie Policy | Geco",
    description: "Learn about how we use cookies and similar technologies on our website.",
    images: ["/og-image.png"],
  },
};

export default function CookiePolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cookie Policy",
    url: "https://geco.build/cookie-policy",
    description:
      "Learn about how we use cookies and similar technologies on our website.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles["policy"]}>
      <h1 className={styles["policy__title"]}>Cookie Policy</h1>
      <p className={styles["policy__updated"]}>Last updated: March 2026</p>

      <div className={styles["policy__section"]}>
        <h2 className={styles["policy__section-title"]}>What Are Cookies</h2>
        <p className={styles["policy__text"]}>
          Cookies are small text files that are stored on your device when you
          visit a website. They are widely used to make websites work
          efficiently and to provide information to the website owners.
        </p>
      </div>

      <div className={styles["policy__section"]}>
        <h2 className={styles["policy__section-title"]}>
          How We Use Cookies
        </h2>
        <p className={styles["policy__text"]}>
          We use cookies for the following purposes:
        </p>
        <ul className={styles["policy__list"]}>
          <li>
            <strong>Essential cookies:</strong> Required for the website to
            function properly, such as security and accessibility features.
          </li>
          <li>
            <strong>Analytics cookies:</strong> Help us understand how visitors
            interact with our website by collecting anonymous usage data via
            Google Analytics and Google Tag Manager.
          </li>
          <li>
            <strong>Security cookies:</strong> Used by Google reCAPTCHA to
            protect our forms from spam and abuse.
          </li>
        </ul>
      </div>

      <div className={styles["policy__section"]}>
        <h2 className={styles["policy__section-title"]}>
          Third-Party Cookies
        </h2>
        <p className={styles["policy__text"]}>
          Some cookies are placed by third-party services that appear on our
          pages. We do not control these cookies. Third-party providers include
          Google Analytics, Google Tag Manager, and Google reCAPTCHA.
        </p>
      </div>

      <div className={styles["policy__section"]}>
        <h2 className={styles["policy__section-title"]}>Managing Cookies</h2>
        <p className={styles["policy__text"]}>
          You can control and manage cookies through your browser settings. Most
          browsers allow you to refuse or delete cookies. Please note that
          disabling cookies may affect the functionality of our website.
        </p>
      </div>

      <div className={styles["policy__section"]}>
        <h2 className={styles["policy__section-title"]}>
          Changes to This Policy
        </h2>
        <p className={styles["policy__text"]}>
          We may update this Cookie Policy from time to time. Any changes will
          be posted on this page with an updated revision date.
        </p>
      </div>
    </div>
    </>
  );
}
