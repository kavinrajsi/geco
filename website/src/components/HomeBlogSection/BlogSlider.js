"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import styles from "./HomeBlogSection.module.scss";

import "swiper/css";
import "swiper/css/navigation";

export default function BlogSlider({ blogs }) {
  return (
    <div className={styles["home-blogs__slider"]}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView="auto"
        navigation={{
          prevEl: `.${styles["home-blogs__nav-btn--prev"]}`,
          nextEl: `.${styles["home-blogs__nav-btn--next"]}`,
        }}
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
                    <Image
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
          className={`${styles["home-blogs__nav-btn"]} ${styles["home-blogs__nav-btn--prev"]}`}
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
          className={`${styles["home-blogs__nav-btn"]} ${styles["home-blogs__nav-btn--next"]}`}
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
