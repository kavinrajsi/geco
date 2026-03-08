"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/strapi";
import styles from "./ProductGrid.module.scss";

export default function ProductGrid({ products, categories }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (p) => p.productCategory?.name === activeCategory
        );

  return (
    <div className={styles["product-grid"]}>
      <div className={styles["product-grid__filters"]}>
        <div className={styles["product-grid__menu"]}>
          <button
            className={`${styles["product-grid__filter"]} ${
              activeCategory === "All" ? styles["product-grid__filter--active"] : ""
            }`}
            onClick={() => setActiveCategory("All")}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles["product-grid__filter"]} ${
                activeCategory === cat ? styles["product-grid__filter--active"] : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className={styles["product-grid__list"]}>
        {filteredProducts.map((product) => {
          const imageUrl = getStrapiMedia(product.featureImage?.url);
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
