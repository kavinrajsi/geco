import styles from "./SectionTitle.module.scss";

export default function SectionTitle({ title, description }) {
  return (
    <div className={styles["section-title"]}>
      <h2 className={styles["section-title__heading"]}>{title}</h2>
      {description && (
        <p className={styles["section-title__description"]}>{description}</p>
      )}
    </div>
  );
}
