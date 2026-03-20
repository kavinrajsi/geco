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
      {/* Grid and outline toggle buttons hidden */}

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
