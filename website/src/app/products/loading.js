import PageHeader from "@/components/PageHeader/PageHeader";
import styles from "./loading.module.scss";

export default function ProductsLoading() {
  return (
    <>
      <PageHeader title="Products" />
      <div className={styles["skeleton"]}>
        {/* Filter bar skeleton */}
        <div className={styles["skeleton__filters"]}>
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className={styles["skeleton__filter"]} />
          ))}
        </div>

        {/* Product cards skeleton */}
        <div className={styles["skeleton__grid"]}>
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className={styles["skeleton__card"]}>
              <div className={styles["skeleton__card-image"]} />
              <div className={styles["skeleton__card-info"]}>
                <div className={styles["skeleton__card-category"]} />
                <div className={styles["skeleton__card-name"]} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
