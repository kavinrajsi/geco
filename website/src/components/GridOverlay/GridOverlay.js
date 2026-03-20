"use client";

import { useState } from "react";
import styles from "./GridOverlay.module.scss";

export default function GridOverlay() {
  const [gridVisible, setGridVisible] = useState(false);
  const [outlineVisible, setOutlineVisible] = useState(false);

  const toggleOutline = () => {
    const next = !outlineVisible;
    setOutlineVisible(next);
    document.documentElement.classList.toggle("debug-outline", next);
  };

  return (
    <>
      <div className={styles.toolbar}>
        <button
          className={`${styles.toggleBtn} ${gridVisible ? styles.active : ""}`}
          onClick={() => setGridVisible((v) => !v)}
          aria-label="Toggle grid overlay"
          title="Toggle 12-column grid"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="1" y="1" width="4" height="16" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
            <rect x="7" y="1" width="4" height="16" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
            <rect x="13" y="1" width="4" height="16" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </button>
        <button
          className={`${styles.toggleBtn} ${outlineVisible ? styles.active : ""}`}
          onClick={toggleOutline}
          aria-label="Toggle element outlines"
          title="Toggle element outlines"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="2" y="2" width="14" height="14" rx="1" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" />
            <rect x="5" y="5" width="8" height="8" rx="0.5" stroke="currentColor" strokeWidth="1" />
          </svg>
        </button>
      </div>

      {gridVisible && (
        <div className={styles.overlay} aria-hidden="true">
          <div className={`container ${styles.grid}`}>
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className={styles.col} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
