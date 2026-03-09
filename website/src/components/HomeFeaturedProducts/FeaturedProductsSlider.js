"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./HomeFeaturedProducts.module.scss";

export default function FeaturedProductsSlider({ products }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = 330; // 300 + 30 gap
    scrollRef.current.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles["featured-products__slider"]}>
      {/* Desktop side arrows */}
      <button
        className={`${styles["featured-products__nav-btn"]} ${styles["featured-products__nav-btn--prev"]}`}
        onClick={() => scroll("prev")}
        aria-label="Previous"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 5L8 12L15 19" stroke="#1F1F1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className={styles["featured-products__track"]} ref={scrollRef}>
        {products.map((product) => {
          const imageUrl = product.imageUrl;
          const categoryName = product.productCategory?.name || "";
          return (
            <Link
              key={product.documentId}
              href={`/products/${product.slug}`}
              className={styles["featured-products__card"]}
            >
              <div className={styles["featured-products__card-image"]}>
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={product.name}
                    width={300}
                    height={400}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>
              <div className={styles["featured-products__card-info"]}>
                <span className={styles["featured-products__card-category"]}>
                  {categoryName}
                </span>
                <h3 className={styles["featured-products__card-name"]}>
                  {product.name}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Desktop side arrows */}
      <button
        className={`${styles["featured-products__nav-btn"]} ${styles["featured-products__nav-btn--next"]}`}
        onClick={() => scroll("next")}
        aria-label="Next"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 5L16 12L9 19" stroke="#1F1F1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Mobile bottom arrows */}
      <div className={styles["featured-products__nav-mobile"]}>
        <button
          className={styles["featured-products__nav-btn"]}
          onClick={() => scroll("prev")}
          aria-label="Previous"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 5L8 12L15 19" stroke="#1F1F1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          className={styles["featured-products__nav-btn"]}
          onClick={() => scroll("next")}
          aria-label="Next"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 5L16 12L9 19" stroke="#1F1F1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
