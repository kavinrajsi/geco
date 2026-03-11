"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import FallbackImage from "@/components/FallbackImage/FallbackImage";
import styles from "./HomeBlogSection.module.scss";

import "swiper/css";

export default function BlogSlider({ blogs }) {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className={styles["home-blogs__slider"]}>
      <Swiper
        spaceBetween={20}
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
            spaceBetween: 30,
          },
        }}
        className={styles["home-blogs__swiper"]}
      >
        {blogs.map((blog) => {
          const imageUrl = blog.featureImageUrl;
          const category = blog.blogCategories?.[0]?.name;
          return (
            <SwiperSlide
              key={blog.documentId}
              className={styles["home-blogs__slide"]}
            >
              <Link
                href={`/blogs/${blog.slug}`}
                className={styles["home-blogs__card"]}
              >
                <div className={styles["home-blogs__card-image"]}>
                  {imageUrl && (
                    <FallbackImage
                      src={imageUrl}
                      alt={blog.title}
                      width={410}
                      height={273}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>
                <div className={styles["home-blogs__card-content"]}>
                  {category && (
                    <span className={styles["home-blogs__card-tag"]}>
                      {category}
                    </span>
                  )}
                  <h3 className={styles["home-blogs__card-name"]}>
                    {blog.title}
                  </h3>
                  {blog.excerpt && (
                    <p className={styles["home-blogs__card-excerpt"]}>
                      {blog.excerpt}
                    </p>
                  )}
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={styles["home-blogs__nav"]}>
        <button
          className={`${styles["home-blogs__nav-btn"]} ${isBeginning ? styles["home-blogs__nav-btn--disabled"] : ""}`}
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
          className={`${styles["home-blogs__nav-btn"]} ${isEnd ? styles["home-blogs__nav-btn--disabled"] : ""}`}
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
