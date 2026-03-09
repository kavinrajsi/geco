import Image from "next/image";
import styles from "./BuildPrinciples.module.scss";

const principles = [
  {
    icon: "/images/principles/nature-inspired.png",
    title: "Nature Inspired Innovation",
    description: "Applying Nature\u2019s Genius to Engineering Excellence",
  },
  {
    icon: "/images/principles/unwavering-performance.png",
    title: "Unwavering Performance",
    description: "Reliable Results Without Compromise",
  },
  {
    icon: "/images/principles/adaptive-versatility.png",
    title: "Adaptive Versatility",
    description: "One Brand, Every Surface, Every Challenge",
  },
  {
    icon: "/images/principles/continuous-evolution.png",
    title: "Continuous Evolution",
    description: "Always Improving, Never Settling",
  },
];

export default function BuildPrinciples() {
  return (
    <section className={styles["principles"]}>
      <div className={styles["principles__header"]}>
        <h2 className={styles["principles__title"]}>
          Built on Four Principles
        </h2>
        <p className={styles["principles__subtitle"]}>
          Our core beliefs drive innovation that&apos;s reliable, versatile, and
          constantly evolving to meet your needs.
        </p>
      </div>
      <div className={styles["principles__grid"]}>
        {principles.map((principle) => (
          <div key={principle.title} className={styles["principles__card"]}>
            <div className={styles["principles__card-icon"]}>
              <Image
                src={principle.icon}
                alt={principle.title}
                width={100}
                height={100}
                style={{ width: "auto", height: "100%" }}
              />
            </div>
            <div className={styles["principles__card-text"]}>
              <h3 className={styles["principles__card-title"]}>
                {principle.title}
              </h3>
              <p className={styles["principles__card-description"]}>
                {principle.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
