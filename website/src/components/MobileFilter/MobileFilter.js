"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import styles from "./MobileFilter.module.scss";

export default function MobileFilter({ categories = [], activeCategory }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = useCallback(() => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const closeDrawer = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
  }, []);

  return (
    <>
      <button
        type="button"
        className={styles["mobile-filter__trigger"]}
        onClick={toggleDrawer}
        aria-label="Open filters"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 3.75H16.5M4.5 9H13.5M7 14.25H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Filter</span>
      </button>

      {isOpen && (
        <div className={styles["mobile-filter__overlay"]} onClick={closeDrawer} />
      )}

      <div
        className={`${styles["mobile-filter__drawer"]} ${isOpen ? styles["mobile-filter__drawer--open"] : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Product filters"
      >
        <div className={styles["mobile-filter__header"]}>
          <h2 className={styles["mobile-filter__title"]}>Filter</h2>
          <button
            type="button"
            className={styles["mobile-filter__close"]}
            onClick={closeDrawer}
            aria-label="Close filters"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <nav className={styles["mobile-filter__body"]}>
          <ul className={styles["mobile-filter__menu"]}>
            <li>
              <Link
                href="/products"
                className={`${styles["mobile-filter__item"]} ${!activeCategory ? styles["mobile-filter__item--active"] : ""}`}
                onClick={closeDrawer}
              >
                All
              </Link>
            </li>
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/products/category/${cat.slug}`}
                  className={`${styles["mobile-filter__item"]} ${activeCategory === cat.slug ? styles["mobile-filter__item--active"] : ""}`}
                  onClick={closeDrawer}
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
