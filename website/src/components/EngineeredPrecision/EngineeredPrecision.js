import Image from "next/image";
import Link from "next/link";
import styles from "./EngineeredPrecision.module.scss";

export default function EngineeredPrecision() {
  return (
    <section className={styles["engineered"]}>
      <div className={styles["engineered__bg"]}>
        <Image
          src="/images/engineered-precision/desktop-bg.png"
          alt="Geco products — Tilebond, Jointfill Epoxy, and Sealant"
          width={1902}
          height={760}
          className={styles["engineered__bg-desktop"]}
        />
        <Image
          src="/images/engineered-precision/mobile-bg.png"
          alt="Geco products — Tilebond, Jointfill Epoxy, and Sealant"
          width={1080}
          height={1350}
          className={styles["engineered__bg-mobile"]}
        />
        <div className={styles["engineered__overlay"]} />
      </div>
      <div className={styles["engineered__content"]}>
        <div className={styles["engineered__text"]}>
          <h2 className={styles["engineered__title"]}>
            Engineered for Precision. Built for Professionals.
          </h2>
          <p className={styles["engineered__description"]}>
            Build with confidence, powered by GECO. From fixing tiles and
            filling joints to sealing every gap, our advanced solutions bring
            lasting strength, superior performance, and a flawless professional
            finish—every time you build.
          </p>
        </div>
        <Link href="/products" className={styles["engineered__cta"]}>
          Learn more
        </Link>
      </div>
    </section>
  );
}
