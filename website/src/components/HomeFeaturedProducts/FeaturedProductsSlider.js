"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import styles from "./HomeFeaturedProducts.module.scss";

import "swiper/css";
import "swiper/css/navigation";

export default function FeaturedProductsSlider({ products, getStrapiMediaUrl }) {
  return (
    <div className={styles["featured-products__slider"]}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView="auto"
        navigation={{
          prevEl: `.${styles["featured-products__nav-btn--prev"]}`,
          nextEl: `.${styles["featured-products__nav-btn--next"]}`,
        }}
        breakpoints={{
          1024: {
            spaceBetween: 30,
          },
        }}
        className={styles["featured-products__swiper"]}
      >
        {products.map((product) => {
          const imageUrl = getStrapiMediaUrl(product.featureImage?.url);
          const categoryName = product.productCategory?.name || "";
          return (
            <SwiperSlide
              key={product.documentId}
              className={styles["featured-products__slide"]}
            >
              <Link
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
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={styles["featured-products__nav"]}>
        <button
          className={`${styles["featured-products__nav-btn"]} ${styles["featured-products__nav-btn--prev"]}`}
          aria-label="Previous"
        >
          <svg
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 1L1 5M1 5L5 9M1 5H17"
              stroke="#1f1f1f"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className={`${styles["featured-products__nav-btn"]} ${styles["featured-products__nav-btn--next"]}`}
          aria-label="Next"
        >
          <svg
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 1L17 5M17 5L13 9M17 5H1"
              stroke="#1f1f1f"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
