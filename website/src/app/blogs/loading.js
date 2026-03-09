import PageHeader from "@/components/PageHeader/PageHeader";
import styles from "./loading.module.scss";

export default function BlogsLoading() {
  return (
    <>
      <PageHeader title="Blogs" />
      <div className={styles["skeleton"]}>
        {/* Sidebar skeleton */}
        <aside className={styles["skeleton__sidebar"]}>
          <div className={styles["skeleton__search"]} />
          <div className={styles["skeleton__section"]}>
            <div className={styles["skeleton__heading"]} />
            <div className={styles["skeleton__line"]} />
            <div className={styles["skeleton__line"]} />
            <div className={styles["skeleton__line"]} />
          </div>
          <div className={styles["skeleton__section"]}>
            <div className={styles["skeleton__heading"]} />
            <div className={styles["skeleton__tags"]}>
              <div className={styles["skeleton__tag"]} />
              <div className={styles["skeleton__tag"]} />
              <div className={styles["skeleton__tag"]} />
              <div className={styles["skeleton__tag"]} />
            </div>
          </div>
        </aside>

        {/* Cards skeleton */}
        <div className={styles["skeleton__main"]}>
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className={styles["skeleton__card"]}>
              <div className={styles["skeleton__card-image"]} />
              <div className={styles["skeleton__card-text"]}>
                <div className={styles["skeleton__card-tag"]} />
                <div className={styles["skeleton__card-title"]} />
                <div className={styles["skeleton__card-excerpt"]} />
                <div className={styles["skeleton__card-link"]} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
