"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import FallbackImage from "@/components/FallbackImage/FallbackImage";
import styles from "./search.module.scss";

export default function SearchResults({ products }) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  const q = query.toLowerCase().trim();

  const filteredProducts = q
    ? products.filter(
        (p) =>
          p.name?.toLowerCase().includes(q) ||
          p.productCategory?.name?.toLowerCase().includes(q)
      )
    : [];

  return (
    <div className={styles["search"]}>
      <div className={styles["search__input-wrapper"]}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className={styles["search__input"]}
          autoFocus
        />
        {query && (
          <button
            className={styles["search__clear"]}
            onClick={() => setQuery("")}
            aria-label="Clear search"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18" stroke="#6b727a" strokeWidth="2" strokeLinecap="round" />
              <path d="M6 6L18 18" stroke="#6b727a" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>

      {q && filteredProducts.length === 0 && (
        <p className={styles["search__empty"]}>
          No results found for &ldquo;{query}&rdquo;
        </p>
      )}

      {q && filteredProducts.length > 0 && (
        <div className={styles["search__list"]}>
          {filteredProducts.map((product) => (
            <Link
              key={product.documentId}
              href={`/products/${product.slug}`}
              className={styles["search__card"]}
            >
              <div className={styles["search__card-image"]}>
                {product.imageUrl && (
                  <FallbackImage
                    src={product.imageUrl}
                    alt={product.name}
                    width={300}
                    height={400}
                    className={styles["search__card-img-primary"]}
                  />
                )}
                {product.secondaryImageUrl && (
                  <FallbackImage
                    src={product.secondaryImageUrl}
                    alt={`${product.name} - alternate`}
                    width={300}
                    height={400}
                    className={styles["search__card-img-secondary"]}
                  />
                )}
              </div>
              <div className={styles["search__card-info"]}>
                <span className={styles["search__card-category"]}>
                  {product.productCategory?.name}
                </span>
                <h3 className={styles["search__card-name"]}>{product.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      )}

      {!q && (
        <p className={styles["search__empty"]}>
          Start typing to search products.
        </p>
      )}
    </div>
  );
}
