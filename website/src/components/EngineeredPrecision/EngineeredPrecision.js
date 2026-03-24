import Button from "@/components/Button/Button";
import styles from "./EngineeredPrecision.module.scss";

export default function EngineeredPrecision() {
  return (
    <section className={styles["engineered"]}>
      <div className={styles["engineered__container"]}>
        <div className={styles["engineered__content"]}>
          <div className={styles["engineered__text"]}>
            <h2 className={styles["engineered__title"]}>
              Inspired By Nature. Engineered To Hold.
            </h2>
            <p className={styles["engineered__description"]}>
               GECO brings nature&apos;s holding power to your projects. From tile adhesives to sealants, every product is designed to hold strong, perform flawlessly, and last—just as nature intended. Build stronger. Build smarter. Build with GECO.
            </p>
          </div>
          <Button href="/products" text="SEE ALL PRODUCTS" />
        </div>
      </div>
    </section>
  );
}
