import Image from "next/image";
import styles from "./page.module.scss";

export const metadata = {
  title: "About",
  description: "Learn more about Geco and what we do.",
  openGraph: {
    title: "About | Geco",
    description: "Learn more about Geco and what we do.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    title: "About | Geco",
    description: "Learn more about Geco and what we do.",
    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Video Hero */}
      <div className={styles["about__video"]}>
        <video autoPlay muted loop playsInline preload="auto">
          <source src="/video/geco-about.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Section 1: Where Dreams Meet the Surface */}
      <section className={styles["about__section"]}>
        <div className={styles["about__container"]}>
          <h2 className={styles["about__heading"]}>
            Where Dreams Meet the Surface
          </h2>
          <div className={styles["about__text-block"]}>
            <p>
              In nature&apos;s laboratory, a small creature performs an everyday
              miracle. The gecko—weighing just 70 grams yet capable of supporting
              133 kilograms—defies gravity with effortless grace. Climbing
              vertically at over one meter per second, it adheres to any surface
              through millions of microscopic setae, nature&apos;s most elegant
              adhesive system refined over millions of years.
            </p>
            <p>
              This is where GECO begins: with wonder at nature&apos;s perfect
              engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Built on Nature's Blueprint */}
      <section
        className={`${styles["about__section"]} ${styles["about__section--green"]}`}
      >
        <div
          className={`${styles["about__container"]} ${styles["about__split"]}`}
        >
          <div className={styles["about__split-text"]}>
            <h2 className={styles["about__heading"]}>
              Built on Nature&apos;s Blueprint
            </h2>
            <div className={styles["about__text-block"]}>
              <p>
                We saw more than biological curiosity in the gecko&apos;s
                abilities. We saw a philosophy. What if the products you use to
                build, repair, and create could offer that same unwavering grip?
                That same adaptability? That same reliable performance across
                every surface and project?
              </p>
            </div>
          </div>
          <picture className={styles["about__split-image"]}>
            <source
              media="(min-width: 768px)"
              srcSet="/images/blueprint-desktop.png"
            />
            <img
              src="/images/blueprint-mobile.png"
              alt="Gecko in nature"
            />
          </picture>
        </div>
      </section>

      {/* Section 3: From Inspiration to Innovation */}
      <section className={styles["about__section"]}>
        <div className={styles["about__container"]}>
          <h2 className={styles["about__heading"]}>
            From Inspiration to Innovation
          </h2>
          <div className={styles["about__text-block"]}>
            <p>
              GECO products embody this ethos. Our comprehensive range—tile
              adhesives and grouts, sealants and tapes—delivers superior
              performance through intelligent design. Each product is engineered
              to complete your task efficiently, to hold when it matters, to
              become the invisible foundation of what you&apos;re building.
            </p>
            <p>
              We&apos;re committed to continuous evolution, constantly expanding
              our range with advanced solutions inspired by the same
              nanostructure adhesives used in space shuttles and delicate
              handicrafts alike.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Your Dreams, Our Foundation */}
      <section
        className={`${styles["about__section"]} ${styles["about__section--gray"]}`}
      >
        <div
          className={`${styles["about__container"]} ${styles["about__split"]} ${styles["about__split--reverse"]}`}
        >
          <div className={styles["about__split-image"]}>
            <Image
              src="/images/your-foundation-desktop.png"
              alt="GECO products"
              width={630}
              height={418}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className={styles["about__split-text"]}>
            <h2 className={styles["about__heading"]}>
              Your Dreams, Our Foundation
            </h2>
            <div className={styles["about__text-block"]}>
              <p>
                Whether you&apos;re a professional contractor or DIY enthusiast,
                GECO is your partner in creation, enabling you to bring your
                dreams to life. Like the gecko that inspired us, we believe in
                the power of perfect adhesion—not just to surfaces, but to
                principles. Quality. Reliability. Innovation. Performance.
              </p>
              <p className={styles["about__tagline"]}>
                GECO. Inspired By Nature. Engineered To Hold.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: VNC Family */}
      <section className={styles["about__section"]}>
        <div
          className={`${styles["about__container"]} ${styles["about__split"]}`}
        >
          <div className={styles["about__split-text"]}>
            <h2 className={styles["about__heading"]}>
              GECO is part of the VNC family of brands.
            </h2>
            <div className={styles["about__text-block"]}>
              <p>
                Founded in 1983, VNC&apos;s brands are now a market leader in
                many product categories. Apart from tile and stone fixing
                solutions, VNC operates with leading brands &amp; products in
                multiple categories: welding consumables, steel wires, fencing
                solutions, paints, coatings &amp; waterproofing solutions.
              </p>
            </div>
          </div>
          <div className={styles["about__split-image"]}>
            <Image
              src="/images/geco-vnc-desktop.png"
              alt="VNC Group"
              width={630}
              height={418}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
