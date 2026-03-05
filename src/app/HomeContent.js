"use client";

import { useRef } from "react";
import Link from "next/link";
import styles from "./page.module.css";

function ArrowIcon() {
  return (
    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 5H17M17 5L13 1M17 5L13 9" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const categories = [
  { name: "Tile Adhesives", image: "/images/categories/tile-adhesives.png", href: "/products" },
  { name: "Tile Grouts", image: "/images/categories/tile-grouts.png", href: "/products" },
  { name: "Sealants", image: "/images/categories/sealants.png", href: "/products" },
  { name: "Tapes", image: "/images/categories/tapes.png", href: "/products" },
];

const principles = [
  {
    icon: "/images/icons/nature-innovation.png",
    title: "Nature Inspired Innovation",
    desc: "Applying Nature\u2019s Genius to Engineering Excellence",
  },
  {
    icon: "/images/icons/unwavering-performance.png",
    title: "Unwavering Performance",
    desc: "Reliable Results Without Compromise",
  },
  {
    icon: "/images/icons/adaptive-versatility.png",
    title: "Adaptive Versatility",
    desc: "One Brand, Every Surface, Every Challenge",
  },
  {
    icon: "/images/icons/continuous-evolution.png",
    title: "Continuous Evolution",
    desc: "Always Improving, Never Settling",
  },
];

const products = [
  { category: "Tile Adhesives", name: "GECO TILEBOND", image: "/images/products/tilebond.png", bg: "#f0e4ea" },
  { category: "Tile Adhesives", name: "GECO TILEBOND PLUS", image: "/images/products/tilebond-plus.png", bg: "#e0e8f5" },
  { category: "Tile Adhesives", name: "GECO TILEBOND CLASSIC", image: "/images/products/tilebond-classic.png", bg: "#e4f0e8" },
  { category: "Tile Grouts", name: "GECO JOINTFILL EPOXY", image: "/images/products/jointfill-epoxy.png", bg: "#f5e0e0" },
];

const instagramImages = [
  "/images/instagram/insta-1.png",
  "/images/instagram/insta-2.png",
  "/images/instagram/insta-3.png",
  "/images/instagram/insta-4.png",
  "/images/instagram/insta-5.png",
];

const blogPosts = [
  {
    tag: "General",
    title: "Applications of Silicone Sealant",
    excerpt: "Silicone sealant can be used to seal the joints between two surfaces. Silicone sealant versions are flexible and stable under severe temperatures and may be used to glue a variety of surfaces including plastic, metal, and glass.",
    image: "/images/blogs/blog-1.png",
  },
  {
    tag: "Application Guides",
    title: "Different Types of Tiles for your Kitchen and Bathroom",
    excerpt: "Silicone sealant can be used to seal the joints between two surfaces. Silicone sealant versions are flexible and stable under severe temperatures and may be used to glue a variety of surfaces including plastic, metal, and glass.",
    image: "/images/blogs/blog-2.png",
  },
  {
    tag: "General",
    title: "Helpful Tips for Using GECO PTFE Tape",
    excerpt: "Silicone sealant can be used to seal the joints between two surfaces. Silicone sealant versions are flexible and stable under severe temperatures and may be used to glue a variety of surfaces including plastic, metal, and glass.",
    image: "/images/blogs/blog-3.png",
  },
];

export default function HomeContent() {
  const productsRef = useRef(null);
  const blogsRef = useRef(null);

  const scrollProducts = (direction) => {
    if (productsRef.current) {
      const scrollAmount = 330;
      productsRef.current.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    }
  };

  const scrollBlogs = (direction) => {
    if (blogsRef.current) {
      const scrollAmount = 384;
      blogsRef.current.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <main>
      {/* Hero Slider */}
      <section className={styles.hero}>
        <img
          className={styles.heroImage}
          src="/images/home/hero-slider.png"
          alt="GECO - The Perfect Joint Filler"
        />
        <div className={styles.heroDots}>
          <span className={`${styles.heroDot} ${styles.heroDotActive}`} />
          <span className={styles.heroDot} />
          <span className={styles.heroDot} />
        </div>
      </section>

      {/* Explore Categories */}
      <section className={styles.categories}>
        <div className={styles.sectionHeading}>
          <h2 className={styles.sectionTitle}>Explore Categories</h2>
          <p className={styles.sectionSubtitle}>
            Discover our range of professional solutions that are crafted to deliver strength, precision, and lasting results for every stage of your project.
          </p>
        </div>
        <div className={styles.categoryList}>
          {categories.map((cat) => (
            <Link key={cat.name} href={cat.href} className={styles.categoryCard}>
              <img className={styles.categoryImage} src={cat.image} alt={cat.name} />
              <span className={styles.categoryLabel}>{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Engineered for Precision */}
      <section className={styles.precision}>
        <div className={styles.precisionBanner}>
          <img
            className={styles.precisionBg}
            src="/images/home/precision-bg.png"
            alt="GECO Products"
          />
          <div className={styles.precisionOverlay} />
          <div className={styles.precisionContent}>
            <div className={styles.precisionTextGroup}>
              <h2 className={styles.precisionTitle}>
                Engineered for Precision. Built for Professionals.
              </h2>
              <p className={styles.precisionDesc}>
                Build with confidence, powered by GECO. From fixing tiles and filling joints to sealing every gap, our advanced solutions bring lasting strength, superior performance, and a flawless professional finish—every time you build.
              </p>
            </div>
            <Link href="/products" className={styles.btnPrimary}>
              Learn More
            </Link>
          </div>
        </div>

        {/* Four Principles */}
        <div className={styles.principles}>
          <div className={styles.sectionHeading}>
            <h2 className={styles.sectionTitle}>Built on Four Principles</h2>
            <p className={styles.sectionSubtitle}>
              Our core beliefs drive innovation that&apos;s reliable, versatile, and constantly evolving to meet your needs.
            </p>
          </div>
          <div className={styles.principlesList}>
            {principles.map((p) => (
              <div key={p.title} className={styles.principleItem}>
                <img className={styles.principleIcon} src={p.icon} alt={p.title} />
                <div>
                  <h3 className={styles.principleTitle}>{p.title}</h3>
                  <p className={styles.principleDesc}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className={styles.featuredProducts}>
        <div className={styles.sectionHeading}>
          <h2 className={styles.sectionTitle}>Featured Products</h2>
          <p className={styles.sectionSubtitle}>
            Inspired by the gecko&apos;s remarkable sticking ability, our products stand for strength, reliability, and continuous innovation.
          </p>
        </div>
        <div className={styles.productsList} ref={productsRef}>
          {products.map((product) => (
            <Link key={product.name} href="/products" className={styles.productCard}>
              <div className={styles.productImageWrap} style={{ background: product.bg }}>
                <img className={styles.productImage} src={product.image} alt={product.name} />
              </div>
              <div className={styles.productInfo}>
                <span className={styles.productCategory}>{product.category}</span>
                <span className={styles.productName}>{product.name}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.carouselNav}>
          <button className={`${styles.carouselBtn} ${styles.carouselBtnPrev}`} onClick={() => scrollProducts(-1)} aria-label="Previous products">
            <ArrowIcon />
          </button>
          <button className={styles.carouselBtn} onClick={() => scrollProducts(1)} aria-label="Next products">
            <ArrowIcon />
          </button>
        </div>
        <div className={styles.mobileCarouselNav}>
          <button className={`${styles.carouselBtn} ${styles.carouselBtnPrev}`} onClick={() => scrollProducts(-1)} aria-label="Previous products">
            <ArrowIcon />
          </button>
          <button className={styles.carouselBtn} onClick={() => scrollProducts(1)} aria-label="Next products">
            <ArrowIcon />
          </button>
        </div>
      </section>

      {/* Watch Our Stories */}
      <section className={styles.stories}>
        <div className={styles.sectionHeading}>
          <h2 className={styles.sectionTitle}>Watch Our Stories</h2>
          <p className={styles.sectionSubtitle}>
            Lorem ipsum dolor sit amet consectetur. Donec nisi purus urna eu vel. Egestas molestie enim est eu Donec nisi purus urna eu
          </p>
        </div>
        <div className={styles.videoPlaceholder} />
      </section>

      {/* Instagram */}
      <section className={styles.instagram}>
        <div className={styles.instagramHeading}>
          <h2 className={styles.instagramTitle}>Geco on Instagram</h2>
          <p className={styles.instagramHashtag}>#Geco</p>
        </div>
        <div className={styles.instagramGrid}>
          {instagramImages.map((src, i) => (
            <div key={i} className={styles.instagramItem}>
              <img className={styles.instagramImage} src={src} alt={`Geco Instagram post ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Blogs */}
      <section className={styles.blogs}>
        <h2 className={styles.sectionTitle}>Blogs</h2>
        <div className={styles.blogsList} ref={blogsRef}>
          {blogPosts.map((post) => (
            <Link key={post.title} href="/blogs" className={styles.blogCard}>
              <div className={styles.blogImageWrap}>
                <img className={styles.blogImage} src={post.image} alt={post.title} />
              </div>
              <div className={styles.blogContent}>
                <span className={styles.blogTag}>{post.tag}</span>
                <h3 className={styles.blogTitle}>{post.title}</h3>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.blogsCarouselNav}>
          <button className={`${styles.carouselBtn} ${styles.carouselBtnPrev}`} onClick={() => scrollBlogs(-1)} aria-label="Previous blogs">
            <ArrowIcon />
          </button>
          <button className={styles.carouselBtn} onClick={() => scrollBlogs(1)} aria-label="Next blogs">
            <ArrowIcon />
          </button>
        </div>
      </section>
    </main>
  );
}
