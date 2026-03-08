import Link from "next/link";
import styles from "./not-found.module.scss";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className={styles["not-found"]}>
      <span className={styles["not-found__code"]}>404</span>
      <h1 className={styles["not-found__title"]}>Something is Missing.</h1>
      <p className={styles["not-found__description"]}>
        The page you are looking for cannot be found. Take a break before trying
        again.
      </p>
      <Link href="/" className={styles["not-found__link"]}>
        Back To Homepage
      </Link>
    </div>
  );
}
