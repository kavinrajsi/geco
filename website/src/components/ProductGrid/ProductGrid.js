import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/strapi";
import styles from "./ProductGrid.module.scss";

export default function ProductGrid({ products, categories, activeCategory }) {
  return (
    <div className={styles["product-grid"]}>
      <div className={styles["product-grid__filters"]}>
        <div className={styles["product-grid__menu"]}>
          <Link
            href="/products"
            className={`${styles["product-grid__filter"]} ${
              !activeCategory ? styles["product-grid__filter--active"] : ""
            }`}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/category/${cat.slug}`}
              className={`${styles["product-grid__filter"]} ${
                activeCategory === cat.slug ? styles["product-grid__filter--active"] : ""
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      <div className={styles["product-grid__list"]}>
        {products.map((product) => {
          const imageUrl = getStrapiMedia(product.image?.url);
          const categoryName = product.productCategory?.name || "";
          return (
            <Link
              key={product.documentId}
              href={`/products/${product.slug}`}
              className={styles["product-grid__card"]}
            >
              <div className={styles["product-grid__card-image"]}>
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={product.name}
                    width={300}
                    height={400}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
