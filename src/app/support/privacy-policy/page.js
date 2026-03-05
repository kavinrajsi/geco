import styles from "./page.module.css";
import { JsonLd, breadcrumbSchema } from "../../schema";

export const metadata = {
  title: "Privacy Policy",
  description: "Read the GECO / VNC Electrodes privacy policy. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://www.geco.in/support/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Support" },
    { name: "Privacy Policy" },
  ]);

  return (
    <>
    <JsonLd data={[breadcrumbs]} />
    <main className={styles.main}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>Privacy Policy</h1>
        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
            <p>We collect information you provide directly, such as your name, email address, and message when you use our contact form.</p>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
            <p>We use the information collected to respond to your enquiries, improve our products and services, and comply with legal obligations.</p>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Sharing of Information</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law.</p>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Cookies</h2>
            <p>Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.</p>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Contact</h2>
            <p>If you have any questions about this policy, please contact us at <a href="mailto:contactus@vncgroup.com" className={styles.link}>contactus@vncgroup.com</a>.</p>
          </section>
        </div>
      </div>
    </main>
    </>
  );
}
