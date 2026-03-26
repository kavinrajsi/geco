"use client";

import { useState, useCallback } from "react";
import styles from "./MobileFilter.module.scss";

const FILTER_OPTIONS = ["All", "Tile Adhesives", "Tile Grouts", "Sealants", "Tapes"];

export default function MobileFilter({ activeCategory }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(activeCategory || "All");

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

  const clearAll = useCallback(() => {
    setSelectedOption("All");
  }, []);

  const handleApply = useCallback(() => {
    closeDrawer();
  }, [closeDrawer]);

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

        <div className={styles["mobile-filter__body"]}>
          <div className={styles["mobile-filter__options"]}>
            {FILTER_OPTIONS.map((option) => {
              const isChecked = selectedOption === option;
              return (
                <label
                  key={option}
                  className={styles["mobile-filter__option"]}
                >
                  <input
                    type="radio"
                    name="productType"
                    checked={isChecked}
                    onChange={() => setSelectedOption(option)}
                    className={styles["mobile-filter__checkbox"]}
                  />
                  <span className={styles["mobile-filter__checkmark"]} />
                  <span>{option}</span>
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles["mobile-filter__footer"]}>
          <button
            type="button"
            className={styles["mobile-filter__clear"]}
            onClick={clearAll}
          >
            Clear All
          </button>
          <button
            type="button"
            className={styles["mobile-filter__apply"]}
            onClick={handleApply}
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
}
