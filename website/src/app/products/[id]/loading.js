import styles from "./loading.module.scss";

export default function ProductDetailLoading() {
  return (
    <>
      {/* Breadcrumb skeleton */}
      <div className={styles["skeleton-breadcrumb"]}>
        <div className={styles["skeleton-breadcrumb__links"]}>
          <div className={styles["skeleton-breadcrumb__path"]}>
            <div className={styles["skeleton-pill"]} style={{ width: 80 }} />
            <div className={styles["skeleton-pill"]} style={{ width: 60 }} />
            <div className={styles["skeleton-pill"]} style={{ width: 100 }} />
          </div>
          <div className={styles["skeleton-pill"]} style={{ width: 160 }} />
        </div>
        <div className={styles["skeleton-breadcrumb__nav"]}>
          <div className={styles["skeleton-pill"]} style={{ width: 120 }} />
          <div className={styles["skeleton-pill"]} style={{ width: 120 }} />
        </div>
      </div>

      {/* Two-column product detail */}
      <div className={styles["skeleton-detail"]}>
        {/* Image column */}
        <div className={styles["skeleton-detail__image"]} />

        {/* Details column */}
        <div className={styles["skeleton-detail__info"]}>
          {/* Category tag */}
          <div className={styles["skeleton-pill"]} style={{ width: 100, height: 16 }} />
          {/* Title */}
          <div className={styles["skeleton-pill"]} style={{ width: "80%", height: 32 }} />
          {/* Tagline */}
          <div className={styles["skeleton-pill"]} style={{ width: "60%", height: 18 }} />

          {/* Description */}
          <div className={styles["skeleton-detail__description"]}>
            <div className={styles["skeleton-pill"]} style={{ width: "100%", height: 14 }} />
            <div className={styles["skeleton-pill"]} style={{ width: "100%", height: 14 }} />
            <div className={styles["skeleton-pill"]} style={{ width: "70%", height: 14 }} />
          </div>

          {/* Brochure button */}
          <div className={styles["skeleton-pill"]} style={{ width: 180, height: 48, borderRadius: 50 }} />

          {/* Collapsible sections */}
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className={styles["skeleton-detail__collapsible"]}>
              <div className={styles["skeleton-pill"]} style={{ width: "50%", height: 20 }} />
            </div>
          ))}
        </div>
      </div>

      {/* How to Use section */}
      <div className={styles["skeleton-how-to-use"]}>
        <div className={styles["skeleton-pill"]} style={{ width: 200, height: 32, margin: "0 auto" }} />
        <div className={styles["skeleton-how-to-use__steps"]}>
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className={styles["skeleton-how-to-use__step"]}>
              <div className={styles["skeleton-how-to-use__step-image"]} />
              <div className={styles["skeleton-pill"]} style={{ width: 60, height: 14 }} />
              <div className={styles["skeleton-pill"]} style={{ width: "80%", height: 20 }} />
              <div className={styles["skeleton-pill"]} style={{ width: "100%", height: 14 }} />
            </div>
          ))}
        </div>
      </div>

      {/* FAQs section */}
      <div className={styles["skeleton-faqs"]}>
        <div className={styles["skeleton-pill"]} style={{ width: 80, height: 32, margin: "0 auto" }} />
        <div className={styles["skeleton-faqs__list"]}>
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className={styles["skeleton-faqs__item"]}>
              <div className={styles["skeleton-pill"]} style={{ width: "70%", height: 20 }} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
