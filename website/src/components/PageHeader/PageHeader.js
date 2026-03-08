import styles from "./PageHeader.module.scss";

export default function PageHeader({ title }) {
  return (
    <div className={styles["page-header"]}>
      <h1 className={styles["page-header__title"]}>{title}</h1>
    </div>
  );
}
