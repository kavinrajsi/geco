"use client";

import { useState } from "react";
import styles from "../../app/products/[id]/page.module.scss";

export default function CollapsibleSection({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`${styles["product-detail__collapsible"]} ${isOpen ? styles["product-detail__collapsible--open"] : ""}`}>
      <button
        className={styles["product-detail__collapsible-toggle"]}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <svg
          className={styles["product-detail__collapsible-chevron"]}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 7.5L10 12.5L15 7.5" stroke="#1F1F1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {isOpen && (
        <div className={styles["product-detail__collapsible-content"]}>
          {children}
        </div>
      )}
    </div>
  );
}
