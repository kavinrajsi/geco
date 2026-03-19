import Link from "next/link";
import styles from "./Button.module.scss";

export default function Button({
  text,
  children,
  href,
  target = "_self",
  variant = "green",
  className = "",
  ...props
}) {
  const buttonContent = text || children;
  const variantClass = variant === "white" ? styles["button--white"] : "";
  const buttonClass = `${styles.button} ${variantClass} ${className}`.trim();

  // If href is provided, render as Link or anchor
  if (href) {
    // Use Next.js Link for internal navigation
    if (target === "_self" || !target) {
      return (
        <Link href={href} className={buttonClass} {...props}>
          {buttonContent}
        </Link>
      );
    }
    // Use anchor tag for external links or new tabs
    return (
      <a href={href} target={target} className={buttonClass} {...props}>
        {buttonContent}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button className={buttonClass} {...props}>
      {buttonContent}
    </button>
  );
}
