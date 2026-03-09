"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import styles from "./HeroSlider.module.scss";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    desktop: "/images/slider/slider-desktop-1.png",
    mobile: "/images/slider/slider-mobile-1.png",
    alt: "Geco slide 1",
  },
  {
    desktop: "/images/slider/slider-desktop-2.png",
    mobile: "/images/slider/slider-mobile-2.png",
    alt: "Geco slide 2",
  },
];

export default function HeroSlider() {
  return (
    <section className={styles["hero-slider"]}>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className={styles["hero-slider__swiper"]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles["hero-slider__slide"]}>
              <Image
                src={slide.desktop}
                alt={slide.alt}
                width={1920}
                height={985}
                priority={index === 0}
                className={styles["hero-slider__image--desktop"]}
              />
              <Image
                src={slide.mobile}
                alt={slide.alt}
                width={1080}
                height={1920}
                priority={index === 0}
                className={styles["hero-slider__image--mobile"]}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
