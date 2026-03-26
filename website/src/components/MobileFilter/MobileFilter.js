"use client";

import { useState, useCallback } from "react";
import styles from "./MobileFilter.module.scss";

const FILTER_SECTIONS = [
  {
    key: "applicationArea",
    label: "Application Area",
    options: ["Bathrooms", "Kitchens", "Living Rooms", "Outdoors", "Swimming Pools"],
  },
  {
    key: "productType",
    label: "Product Type",
    options: ["Tile Adhesives", "Tile Grouts", "Sealants", "Tapes"],
  },
  {
    key: "applicationSurface",
    label: "Application Surface",
    options: ["Ceilings", "Metals", "Terraces", "Walls", "Woods"],
  },
  {
    key: "finish",
    label: "Finish",
    options: ["Glossy", "Matte", "Satin", "Textured"],
  },
];

export default function MobileFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const [selected, setSelected] = useState({});

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

  const toggleSection = useCallback((key) => {
    setOpenSection((prev) => (prev === key ? null : key));
  }, []);

  const toggleOption = useCallback((sectionKey, option) => {
    setSelected((prev) => {
      const current = prev[sectionKey] || [];
      const exists = current.includes(option);
      return {
        ...prev,
        [sectionKey]: exists
          ? current.filter((o) => o !== option)
          : [...current, option],
      };
    });
  }, []);

  const clearAll = useCallback(() => {
    setSelected({});
  }, []);

  const handleApply = useCallback(() => {
    closeDrawer();
  }, [closeDrawer]);

  const activeCount = Object.values(selected).reduce(
    (sum, arr) => sum + arr.length,
    0
  );

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
        {activeCount > 0 && (
          <span className={styles["mobile-filter__badge"]}>{activeCount}</span>
        )}
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
          {FILTER_SECTIONS.map((section) => {
            const isExpanded = openSection === section.key;
            const sectionSelected = selected[section.key] || [];

            return (
              <div key={section.key} className={styles["mobile-filter__section"]}>
                <button
                  type="button"
                  className={styles["mobile-filter__section-header"]}
                  onClick={() => toggleSection(section.key)}
                  aria-expanded={isExpanded}
                >
                  <span>{section.label}</span>
                  <svg
                    className={`${styles["mobile-filter__chevron"]} ${isExpanded ? styles["mobile-filter__chevron--up"] : ""}`}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {isExpanded && (
                  <div className={styles["mobile-filter__options"]}>
                    {section.options.map((option) => {
                      const isChecked = sectionSelected.includes(option);
                      return (
                        <label
                          key={option}
                          className={styles["mobile-filter__option"]}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleOption(section.key, option)}
                            className={styles["mobile-filter__checkbox"]}
                          />
                          <span className={styles["mobile-filter__checkmark"]} />
                          <span>{option}</span>
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
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
