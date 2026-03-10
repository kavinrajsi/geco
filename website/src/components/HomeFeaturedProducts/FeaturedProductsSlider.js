"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import FallbackImage from "@/components/FallbackImage/FallbackImage";
import styles from "./HomeFeaturedProducts.module.scss";

import "swiper/css";

export default function FeaturedProductsSlider({ products }) {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className={styles["featured-products__slider"]}>
      <Swiper
        spaceBetween={30}
        slidesPerView="auto"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={handleSlideChange}
        onReachBeginning={() => setIsBeginning(true)}
        onReachEnd={() => setIsEnd(true)}
        breakpoints={{
          1024: {
            slidesPerView: 4,
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
        className={`${styles["featured-products__nav-btn"]} ${styles["featured-products__nav-btn--prev"]} ${isBeginning ? styles["featured-products__nav-btn--disabled"] : ""}`}
        onClick={() => swiperRef.current?.slidePrev()}
        disabled={isBeginning}
        aria-label="Previous"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 5L8 12L15 19" stroke="#1F1F1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        className={`${styles["featured-products__nav-btn"]} ${styles["featured-products__nav-btn--next"]} ${isEnd ? styles["featured-products__nav-btn--disabled"] : ""}`}
        onClick={() => swiperRef.current?.slideNext()}
        disabled={isEnd}
        aria-label="Next"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 5L16 12L9 19" stroke="#1F1F1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Mobile bottom arrows */}
      <div className={styles["featured-products__nav-mobile"]}>
        <button
          className={`${styles["featured-products__nav-btn"]} ${isBeginning ? styles["featured-products__nav-btn--disabled"] : ""}`}
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={isBeginning}
          aria-label="Previous"
        >
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 1L1 5M1 5L5 9M1 5H17" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          className={`${styles["featured-products__nav-btn"]} ${isEnd ? styles["featured-products__nav-btn--disabled"] : ""}`}
          onClick={() => swiperRef.current?.slideNext()}
          disabled={isEnd}
          aria-label="Next"
        >
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1L17 5M17 5L13 9M17 5H1" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
