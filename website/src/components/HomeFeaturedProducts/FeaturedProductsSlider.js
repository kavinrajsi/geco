"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
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
        modules={[Mousewheel]}
        mousewheel={{ forceToAxis: true }}
        spaceBetween={30}
        slidesPerView={1.25}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={handleSlideChange}
        onReachBeginning={() => setIsBeginning(true)}
        onReachEnd={() => setIsEnd(true)}
        breakpoints={{
          576: {
            slidesPerView: 2.25,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3.25,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className={styles["featured-products__swiper"]}
      >
        {products.map((product) => {
          const imageUrl = product.imageUrl;
          const secondaryImageUrl = product.secondaryImageUrl;
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
                      className={styles["featured-products__card-img-primary"]}
                    />
                  )}
                  {secondaryImageUrl && (
                    <FallbackImage
                      src={secondaryImageUrl}
                      alt={`${product.name} - alternate`}
                      width={300}
                      height={400}
                      className={styles["featured-products__card-img-secondary"]}
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
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" fill="white" />
          <rect
            x="0.5"
            y="0.5"
            width="43"
            height="43"
            rx="21.5"
            stroke="#E9E9E9"
          />
          <path
            d="M26.7411 13.2551C27.0543 13.5643 27.0828 14.0482 26.8265 14.3891L26.7411 14.4868L19.1301 22L26.7411 29.5132C27.0543 29.8224 27.0828 30.3062 26.8265 30.6472L26.7411 30.7449C26.4278 31.0541 25.9376 31.0822 25.5922 30.8292L25.4932 30.7449L17.2579 22.6159C16.9447 22.3067 16.9162 21.8228 17.1725 21.4818L17.2579 21.3841L25.4932 13.2551C25.8378 12.915 26.3965 12.915 26.7411 13.2551Z"
            fill="#1F1F1F"
          />
        </svg>
      </button>
      <button
        className={`${styles["featured-products__nav-btn"]} ${styles["featured-products__nav-btn--next"]} ${isEnd ? styles["featured-products__nav-btn--disabled"] : ""}`}
        onClick={() => swiperRef.current?.slideNext()}
        disabled={isEnd}
        aria-label="Next"
      >
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" fill="white" />
          <rect
            x="0.5"
            y="0.5"
            width="43"
            height="43"
            rx="21.5"
            stroke="#E9E9E9"
          />
          <path
            d="M17.2589 30.7449C16.9457 30.4357 16.9172 29.9518 17.1735 29.6109L17.2589 29.5132L24.8699 22L17.2589 14.4868C16.9457 14.1776 16.9172 13.6938 17.1735 13.3528L17.2589 13.2551C17.5722 12.9459 18.0624 12.9178 18.4078 13.1708L18.5068 13.2551L26.7421 21.3841C27.0553 21.6933 27.0838 22.1772 26.8275 22.5182L26.7421 22.6159L18.5068 30.7449C18.1622 31.085 17.6035 31.085 17.2589 30.7449Z"
            fill="#1F1F1F"
          />
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
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="43"
              height="43"
              rx="21.5"
              fill="white"
            />
            <rect
              x="0.5"
              y="0.5"
              width="43"
              height="43"
              rx="21.5"
              stroke="#E9E9E9"
            />
            <path
              d="M26.7411 13.2551C27.0543 13.5643 27.0828 14.0482 26.8265 14.3891L26.7411 14.4868L19.1301 22L26.7411 29.5132C27.0543 29.8224 27.0828 30.3062 26.8265 30.6472L26.7411 30.7449C26.4278 31.0541 25.9376 31.0822 25.5922 30.8292L25.4932 30.7449L17.2579 22.6159C16.9447 22.3067 16.9162 21.8228 17.1725 21.4818L17.2579 21.3841L25.4932 13.2551C25.8378 12.915 26.3965 12.915 26.7411 13.2551Z"
              fill="#1F1F1F"
            />
          </svg>
        </button>
        <button
          className={`${styles["featured-products__nav-btn"]} ${isEnd ? styles["featured-products__nav-btn--disabled"] : ""}`}
          onClick={() => swiperRef.current?.slideNext()}
          disabled={isEnd}
          aria-label="Next"
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="43"
              height="43"
              rx="21.5"
              fill="white"
            />
            <rect
              x="0.5"
              y="0.5"
              width="43"
              height="43"
              rx="21.5"
              stroke="#E9E9E9"
            />
            <path
              d="M17.2589 30.7449C16.9457 30.4357 16.9172 29.9518 17.1735 29.6109L17.2589 29.5132L24.8699 22L17.2589 14.4868C16.9457 14.1776 16.9172 13.6938 17.1735 13.3528L17.2589 13.2551C17.5722 12.9459 18.0624 12.9178 18.4078 13.1708L18.5068 13.2551L26.7421 21.3841C27.0553 21.6933 27.0838 22.1772 26.8275 22.5182L26.7421 22.6159L18.5068 30.7449C18.1622 31.085 17.6035 31.085 17.2589 30.7449Z"
              fill="#1F1F1F"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
