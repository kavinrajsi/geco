"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/strapi";
import styles from "./LatestProducts.module.scss";

export default function LatestProducts({ products }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector(`.${styles["latest__card"]}`);
    if (!card) return;
    const cardWidth = card.offsetWidth + 30; // card width + gap
    scrollRef.current.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  if (!products?.length) return null;

  return (
    <section className={styles["latest"]}>
      <h2 className={styles["latest__title"]}>Products</h2>

      <div className={styles["latest__wrapper"]}>
        <button
          className={`${styles["latest__arrow"]} ${styles["latest__arrow--prev"]}`}
          onClick={() => scroll("prev")}
          aria-label="Previous products"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 5L8 12L15 19" stroke="#1F1F1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className={styles["latest__track"]} ref={scrollRef}>
          {products.map((product) => {
            const imageUrl = getStrapiMedia(product.image?.url);
            return (
              <Link
                key={product.documentId || product.id}
                href={`/products/${product.slug}`}
                className={styles["latest__card"]}
              >
                <div className={styles["latest__card-image"]}>
                  {imageUrl && (
                    <Image
                      src={imageUrl}
                      alt={product.name}
                      width={410}
                      height={273}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  )}
                </div>
                <div className={styles["latest__card-content"]}>
                  {product.productCategory?.name && (
                    <span className={styles["latest__card-tag"]}>
                      {product.productCategory.name}
                    </span>
                  )}
                  <h3 className={styles["latest__card-name"]}>{product.name}</h3>
                </div>
              </Link>
            );
          })}
        </div>

        <button
          className={`${styles["latest__arrow"]} ${styles["latest__arrow--next"]}`}
          onClick={() => scroll("next")}
          aria-label="Next products"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 5L16 12L9 19" stroke="#1F1F1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className={styles["latest__arrows-mobile"]}>
        <button
          className={styles["latest__arrow"]}
          onClick={() => scroll("prev")}
          aria-label="Previous products"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 5L8 12L15 19" stroke="#1F1F1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          className={styles["latest__arrow"]}
          onClick={() => scroll("next")}
          aria-label="Next products"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 5L16 12L9 19" stroke="#1F1F1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
