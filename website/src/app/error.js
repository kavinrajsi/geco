"use client";

import styles from "./error.module.scss";

export default function Error({ reset }) {
  return (
    <div className={styles["error"]}>
      <span className={styles["error__code"]}>500</span>
      <h1 className={styles["error__title"]}>Something went wrong</h1>
      <p className={styles["error__description"]}>
        An unexpected error occurred. Please try again.
      </p>
      <button className={styles["error__button"]} onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
