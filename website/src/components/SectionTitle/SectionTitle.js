import styles from "./SectionTitle.module.scss";

const defaultTags = {
  section: "h2",
  page: "h1",
  about: "h2",
  card: "h3",
  form: "h2",
  feature: "h2",
  address: "h2",
};

export default function SectionTitle({
  title,
  description,
  variant = "section",
  as,
  align,
  className,
  noTransform,
}) {
  const Tag = as || defaultTags[variant] || "h2";
  const variantClass = styles[`section-title--${variant}`] || "";
  const alignClass = align ? styles[`section-title--${align}`] : "";

  return (
    <div
      className={`${styles["section-title"]} ${variantClass} ${alignClass} ${className || ""}`.trim()}
    >
      <Tag
        className={styles["section-title__heading"]}
        style={noTransform ? { textTransform: "none" } : undefined}
      >{title}</Tag>
      {description && (
        <p className={styles["section-title__description"]}>{description}</p>
      )}
    </div>
  );
}
