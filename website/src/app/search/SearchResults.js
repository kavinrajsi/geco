"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import FallbackImage from "@/components/FallbackImage/FallbackImage";
import styles from "./search.module.scss";

export default function SearchResults({ products, blogs }) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [activeTab, setActiveTab] = useState("all");

  const q = query.toLowerCase().trim();

  const filteredProducts = q
    ? products.filter(
        (p) =>
          p.name?.toLowerCase().includes(q) ||
          p.productCategory?.name?.toLowerCase().includes(q)
      )
    : [];

  const filteredBlogs = q
    ? blogs.filter(
        (b) =>
          b.title?.toLowerCase().includes(q) ||
          b.excerpt?.toLowerCase().includes(q) ||
          b.blogCategories?.some((c) => c.name?.toLowerCase().includes(q))
      )
    : [];

  const showProducts = activeTab === "all" || activeTab === "products";
  const showBlogs = activeTab === "all" || activeTab === "blogs";
  const totalResults = filteredProducts.length + filteredBlogs.length;

  return (
    <div className={styles["search"]}>
      <div className={styles["search__input-wrapper"]}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products, blogs..."
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

      {q && (
        <>
          <div className={styles["search__filters"]}>
            <div className={styles["search__menu"]}>
              <button
                className={`${styles["search__filter"]} ${activeTab === "all" ? styles["search__filter--active"] : ""}`}
                onClick={() => setActiveTab("all")}
              >
                All ({totalResults})
              </button>
              <button
                className={`${styles["search__filter"]} ${activeTab === "products" ? styles["search__filter--active"] : ""}`}
                onClick={() => setActiveTab("products")}
              >
                Products ({filteredProducts.length})
              </button>
              <button
                className={`${styles["search__filter"]} ${activeTab === "blogs" ? styles["search__filter--active"] : ""}`}
                onClick={() => setActiveTab("blogs")}
              >
                Blogs ({filteredBlogs.length})
              </button>
            </div>
          </div>

          {totalResults === 0 && (
            <p className={styles["search__empty"]}>
              No results found for &ldquo;{query}&rdquo;
            </p>
          )}

          {showProducts && filteredProducts.length > 0 && (
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

          {showBlogs && filteredBlogs.length > 0 && (
            <div className={styles["search__list"]}>
              {filteredBlogs.map((blog) => (
                <Link
                  key={blog.documentId}
                  href={`/blogs/${blog.slug}`}
                  className={styles["search__card"]}
                >
                  <div className={styles["search__card-image"]}>
                    {blog.imageUrl && (
                      <FallbackImage
                        src={blog.imageUrl}
                        alt={blog.title}
                        width={410}
                        height={273}
                        className={styles["search__card-img-primary"]}
                      />
                    )}
                  </div>
                  <div className={styles["search__card-info"]}>
                    {blog.blogCategories?.[0] && (
                      <span className={styles["search__card-category"]}>
                        {blog.blogCategories[0].name}
                      </span>
                    )}
                    <h3 className={styles["search__card-name"]}>{blog.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </>
      )}

      {!q && (
        <p className={styles["search__empty"]}>
          Start typing to search products and blogs.
        </p>
      )}
    </div>
  );
}
