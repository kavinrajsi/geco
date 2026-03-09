"use client";

import { useState } from "react";
import styles from "../../app/products/[id]/page.module.scss";

export default function FaqAccordion({ faqs }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div className={styles["product-detail__faqs"]}>
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className={`${styles["product-detail__faq"]} ${openId === faq.id ? styles["product-detail__faq--open"] : ""}`}
        >
          <button
            type="button"
            className={styles["product-detail__faq-question"]}
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            aria-expanded={openId === faq.id}
          >
            <span>{faq.question}</span>
          </button>
          {openId === faq.id && (
            <p className={styles["product-detail__faq-answer"]}>
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
