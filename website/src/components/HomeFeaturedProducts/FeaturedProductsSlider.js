"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import FallbackImage from "@/components/FallbackImage/FallbackImage";
import styles from "./HomeFeaturedProducts.module.scss";

import "swiper/css";
import "swiper/css/navigation";

export default function FeaturedProductsSlider({ products }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  return (
    <div className={styles["featured-products__slider"]}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView="auto"
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
          setSwiperReady(true);
        }}
        breakpoints={{
          1024: {
            spaceBetween: 30,
          },
        }}
        className={styles["featured-products__swiper"]}
      >
        {products.map((product) => {
          const imageUrl = product.imageUrl;
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
                    <FallbackImage
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

      {/* Desktop side arrows */}
      <button
        ref={prevRef}
        className={`${styles["featured-products__nav-btn"]} ${styles["featured-products__nav-btn--prev"]}`}
        aria-label="Previous"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 5L8 12L15 19" stroke="#1F1F1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        ref={nextRef}
        className={`${styles["featured-products__nav-btn"]} ${styles["featured-products__nav-btn--next"]}`}
        aria-label="Next"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 5L16 12L9 19" stroke="#1F1F1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
