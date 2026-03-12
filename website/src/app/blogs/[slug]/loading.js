import styles from "./loading.module.scss";

export default function BlogDetailLoading() {
  return (
    <>
      {/* Feature image skeleton */}
      <div className={styles["skeleton-hero"]} />

      <div className={styles["skeleton-article"]}>
        {/* Header: tag + title */}
        <div className={styles["skeleton-header"]}>
          <div className={styles["skeleton-pill"]} style={{ width: 100, height: 28, borderRadius: 48 }} />
          <div className={styles["skeleton-pill"]} style={{ width: "90%", height: 40 }} />
          <div className={styles["skeleton-pill"]} style={{ width: "60%", height: 40 }} />
        </div>

        {/* Content body */}
        <div className={styles["skeleton-content"]}>
          {/* Paragraph block */}
          <div className={styles["skeleton-paragraph"]}>
            <div className={styles["skeleton-pill"]} style={{ width: "100%", height: 16 }} />
            <div className={styles["skeleton-pill"]} style={{ width: "100%", height: 16 }} />
            <div className={styles["skeleton-pill"]} style={{ width: "85%", height: 16 }} />
            <div className={styles["skeleton-pill"]} style={{ width: "90%", height: 16 }} />
            <div className={styles["skeleton-pill"]} style={{ width: "40%", height: 16 }} />
          </div>

          {/* Heading */}
          <div className={styles["skeleton-pill"]} style={{ width: "50%", height: 28 }} />

          {/* Paragraph block */}
          <div className={styles["skeleton-paragraph"]}>
            <div className={styles["skeleton-pill"]} style={{ width: "100%", height: 16 }} />
            <div className={styles["skeleton-pill"]} style={{ width: "95%", height: 16 }} />
            <div className={styles["skeleton-pill"]} style={{ width: "100%", height: 16 }} />
            <div className={styles["skeleton-pill"]} style={{ width: "70%", height: 16 }} />
          </div>

          {/* Image placeholder */}
          <div className={styles["skeleton-image"]} />

          {/* Paragraph block */}
          <div className={styles["skeleton-paragraph"]}>
            <div className={styles["skeleton-pill"]} style={{ width: "100%", height: 16 }} />
            <div className={styles["skeleton-pill"]} style={{ width: "90%", height: 16 }} />
            <div className={styles["skeleton-pill"]} style={{ width: "75%", height: 16 }} />
          </div>

          {/* Heading */}
          <div className={styles["skeleton-pill"]} style={{ width: "45%", height: 28 }} />

          {/* Paragraph block */}
          <div className={styles["skeleton-paragraph"]}>
            <div className={styles["skeleton-pill"]} style={{ width: "100%", height: 16 }} />
            <div className={styles["skeleton-pill"]} style={{ width: "100%", height: 16 }} />
            <div className={styles["skeleton-pill"]} style={{ width: "60%", height: 16 }} />
          </div>
        </div>

        {/* Tags & nav */}
        <div className={styles["skeleton-footer"]}>
          <div className={styles["skeleton-tags"]}>
            <div className={styles["skeleton-pill"]} style={{ width: 30, height: 16 }} />
            <div className={styles["skeleton-pill"]} style={{ width: 80, height: 32, borderRadius: 84 }} />
            <div className={styles["skeleton-pill"]} style={{ width: 100, height: 32, borderRadius: 84 }} />
          </div>
          <div className={styles["skeleton-nav"]}>
            <div className={styles["skeleton-nav__item"]}>
              <div className={styles["skeleton-pill"]} style={{ width: 60, height: 14 }} />
              <div className={styles["skeleton-pill"]} style={{ width: "80%", height: 18 }} />
            </div>
            <div className={styles["skeleton-nav__divider"]} />
            <div className={styles["skeleton-nav__item"]} style={{ alignItems: "flex-end" }}>
              <div className={styles["skeleton-pill"]} style={{ width: 60, height: 14 }} />
              <div className={styles["skeleton-pill"]} style={{ width: "80%", height: 18 }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
