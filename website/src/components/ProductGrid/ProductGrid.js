import Link from "next/link";
import Button from "@/components/Button/Button";
import MobileFilter from "@/components/MobileFilter/MobileFilter";
import FallbackImage from "@/components/FallbackImage/FallbackImage";
import { getStrapiMedia } from "@/lib/strapi";
import styles from "./ProductGrid.module.scss";

export default function ProductGrid({ products, categories, activeCategory }) {
  return (
    <div className={styles["product-grid"]}>
      <div className={styles["product-grid__filters"]}>
        <MobileFilter />
        <div className={styles["product-grid__menu"]}>
          <Button
            href="/products"
            text="All"
            className={`${styles["product-grid__filter"]} ${!activeCategory ? styles["product-grid__filter--active"] : ""}`}
          />
          {categories.map((cat) => (
            <Button
              key={cat.slug}
              href={`/products/category/${cat.slug}`}
              text={cat.name}
              className={`${styles["product-grid__filter"]} ${activeCategory === cat.slug ? styles["product-grid__filter--active"] : ""}`}
            />
          ))}
        </div>
      </div>

      <div className={styles["product-grid__list"]}>
        {products.map((product) => {
          const imageUrl = getStrapiMedia(product.image?.url);
          const secondaryImageUrl = getStrapiMedia(product.secondaryImage?.url);
          const categoryName = product.productCategory?.name || "";
          return (
            <Link
              key={product.documentId}
              href={`/products/${product.slug}`}
              className={styles["product-grid__card"]}
            >
              <div className={styles["product-grid__card-image"]}>
                {imageUrl && (
                  <FallbackImage
                    src={imageUrl}
                    alt={product.name}
                    width={300}
                    height={400}
                    className={styles["product-grid__card-img-primary"]}
                  />
                )}
                {secondaryImageUrl && (
                  <FallbackImage
                    src={secondaryImageUrl}
                    alt={`${product.name} - alternate`}
                    width={300}
                    height={400}
                    className={styles["product-grid__card-img-secondary"]}
                  />
                )}
              </div>
              <div className={styles["product-grid__card-info"]}>
                <span className={styles["product-grid__card-category"]}>
                  {categoryName}
                </span>
                <h3 className={styles["product-grid__card-name"]}>
                  {product.name}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
