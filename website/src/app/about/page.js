import styles from "./page.module.scss";

export const metadata = {
  title: "About",
  description: "Learn more about Geco and what we do.",
  openGraph: {
    title: "About | Geco",
    description: "Learn more about Geco and what we do.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    title: "About | Geco",
    description: "Learn more about Geco and what we do.",
    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div className={styles["about"]}>
      <h1 className={styles["about__title"]}>About Us</h1>
      <p className={styles["about__description"]}>
        Learn more about Geco and what we do.
      </p>
    </div>
  );
}
