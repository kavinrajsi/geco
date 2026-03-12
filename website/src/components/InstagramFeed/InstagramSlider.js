"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import styles from "./InstagramFeed.module.scss";

import "swiper/css";

export default function InstagramSlider({ posts }) {
  return (
    <div className={styles["instagram__slider"]}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
        }}
        className={styles["instagram__swiper"]}
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id} className={styles["instagram__slide"]}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["instagram__post"]}
            >
              <Image
                src={post.image}
                alt="Instagram post"
                width={384}
                height={479}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
