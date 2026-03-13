"use client";

import { useRef } from "react";
import Link from "next/link";
import FallbackImage from "@/components/FallbackImage/FallbackImage";
import { getStrapiMedia } from "@/lib/strapi";
import styles from "./RelatedProducts.module.scss";

export default function RelatedProducts({ products }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = 330; // 300 + 30 gap
    scrollRef.current.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  if (!products?.length) return null;

  return (
    <section className={styles["related"]}>
      <div className={`container ${styles["relatedContainer"]}`}>
      <h2 className={styles["related__title"]}>Related Products</h2>

      <div className={styles["related__wrapper"]}>
        <button
          className={`${styles["related__arrow"]} ${styles["related__arrow--prev"]}`}
          onClick={() => scroll("prev")}
          aria-label="Previous products"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 5L8 12L15 19" stroke="#1F1F1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className={styles["related__track"]} ref={scrollRef}>
          {products.map((product) => {
            const imageUrl = getStrapiMedia(product.image?.url);
            return (
              <Link
                key={product.documentId || product.id}
                href={`/products/${product.slug}`}
                className={styles["related__card"]}
              >
                <div className={styles["related__card-image"]}>
                  {imageUrl && (
                    <FallbackImage
                      src={imageUrl}
                      alt={product.name}
                      width={300}
                      height={400}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  )}
                </div>
                <div className={styles["related__card-info"]}>
                  <span className={styles["related__card-category"]}>
                    {product.productCategory?.name || ""}
                  </span>
                  <h3 className={styles["related__card-name"]}>{product.name}</h3>
                </div>
              </Link>
            );
          })}
        </div>

        <button
          className={`${styles["related__arrow"]} ${styles["related__arrow--next"]}`}
          onClick={() => scroll("next")}
          aria-label="Next products"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 5L16 12L9 19" stroke="#1F1F1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className={styles["related__arrows-mobile"]}>
        <button
          className={styles["related__arrow"]}
          onClick={() => scroll("prev")}
          aria-label="Previous products"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 5L8 12L15 19" stroke="#1F1F1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          className={styles["related__arrow"]}
          onClick={() => scroll("next")}
          aria-label="Next products"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 5L16 12L9 19" stroke="#1F1F1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      </div>
    </section>
  );
}
