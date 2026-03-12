import styles from "../privacy-policy/page.module.scss";

export const metadata = {
  title: "Disclaimer",
  description: "Read our disclaimer regarding the use of information on our website.",
  openGraph: {
    title: "Disclaimer | Geco",
    description: "Read our disclaimer regarding the use of information on our website.",
    images: ["/og-image.png"],
  },
  twitter: {
    title: "Disclaimer | Geco",
    description: "Read our disclaimer regarding the use of information on our website.",
    images: ["/og-image.png"],
  },
};

export default function DisclaimerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Disclaimer",
    url: "https://geco.com/disclaimer",
    description:
      "Read our disclaimer regarding the use of information on our website.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles["policy"]}>
      <h1 className={styles["policy__title"]}>Disclaimer</h1>
      <p className={styles["policy__updated"]}>Last updated: March 2026</p>

      <div className={styles["policy__section"]}>
        <h2 className={styles["policy__section-title"]}>
          General Information
        </h2>
        <p className={styles["policy__text"]}>
          The information provided on the Geco website is for general
          informational purposes only. While we strive to keep the information
          up to date and accurate, we make no representations or warranties of
          any kind, express or implied, about the completeness, accuracy,
          reliability, or availability of the information, products, services,
          or related graphics contained on the website.
        </p>
      </div>

      <div className={styles["policy__section"]}>
        <h2 className={styles["policy__section-title"]}>
          Product Information
        </h2>
        <p className={styles["policy__text"]}>
          Product specifications, descriptions, and images displayed on this
          website are provided for reference purposes only. Actual products may
          vary slightly from the descriptions and images shown. Always refer to
          the product packaging and technical data sheets for the most accurate
          and up-to-date information.
        </p>
      </div>

      <div className={styles["policy__section"]}>
        <h2 className={styles["policy__section-title"]}>
          Professional Advice
        </h2>
        <p className={styles["policy__text"]}>
          The content on this website does not constitute professional advice.
          For specific applications, installation guidance, or technical support,
          please consult a qualified professional or contact our team directly.
        </p>
      </div>

      <div className={styles["policy__section"]}>
        <h2 className={styles["policy__section-title"]}>External Links</h2>
        <p className={styles["policy__text"]}>
          Our website may contain links to external websites that are not
          operated by us. We have no control over the content and practices of
          these sites and cannot accept responsibility for their content or
          privacy policies.
        </p>
      </div>

      <div className={styles["policy__section"]}>
        <h2 className={styles["policy__section-title"]}>
          Limitation of Liability
        </h2>
        <p className={styles["policy__text"]}>
          In no event shall Geco be liable for any loss or damage, including
          without limitation, indirect or consequential loss or damage arising
          out of or in connection with the use of this website.
        </p>
      </div>
    </div>
    </>
  );
}
