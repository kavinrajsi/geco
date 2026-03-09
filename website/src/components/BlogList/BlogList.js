"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/strapi";
import styles from "./BlogList.module.scss";

const BLOGS_PER_PAGE = 4;

export default function BlogList({ blogs, categories, tags }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeTag, setActiveTag] = useState(null);
  const [visibleCount, setVisibleCount] = useState(BLOGS_PER_PAGE);

  const filtered = useMemo(() => {
    let result = blogs;
    if (activeCategory) {
      result = result.filter((b) =>
        b.blogCategories?.some((c) => c.name === activeCategory)
      );
    }
    if (activeTag) {
      result = result.filter((b) =>
        b.blogTags?.some((t) => t.name === activeTag)
      );
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (b) =>
          b.title?.toLowerCase().includes(q) ||
          b.excerpt?.toLowerCase().includes(q)
      );
    }
    return result;
  }, [blogs, activeCategory, activeTag, search]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div className={styles["blog-list"]}>
      {/* Sidebar */}
      <aside className={styles["blog-list__sidebar"]}>
        <div className={styles["blog-list__search"]}>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setVisibleCount(BLOGS_PER_PAGE);
            }}
            className={styles["blog-list__search-input"]}
          />
          <svg
            className={styles["blog-list__search-icon"]}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="#A0A0A0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 21L16.65 16.65"
              stroke="#A0A0A0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {categories.length > 0 && (
          <div className={styles["blog-list__section"]}>
            <h3 className={styles["blog-list__section-title"]}>Categories</h3>
            <div className={styles["blog-list__category-list"]}>
              {categories.map((cat) => {
                const count = blogs.filter((b) =>
                  b.blogCategories?.some((c) => c.name === cat)
                ).length;
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    className={`${styles["blog-list__category-item"]} ${
                      isActive ? styles["blog-list__category-item--active"] : ""
                    }`}
                    onClick={() => {
                      setActiveCategory(isActive ? null : cat);
                      setVisibleCount(BLOGS_PER_PAGE);
                    }}
                  >
                    <span
                      className={styles["blog-list__category-name"]}
                    >
                      {cat}
                    </span>
                    <span className={styles["blog-list__category-count"]}>
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {tags.length > 0 && (
          <div className={styles["blog-list__section"]}>
            <h3 className={styles["blog-list__section-title"]}>Tags Cloud</h3>
            <div className={styles["blog-list__tags"]}>
              {tags.map((tag) => (
                <button
                  key={tag}
                  className={`${styles["blog-list__tag"]} ${
                    activeTag === tag ? styles["blog-list__tag--active"] : ""
                  }`}
                  onClick={() => {
                    setActiveTag(activeTag === tag ? null : tag);
                    setVisibleCount(BLOGS_PER_PAGE);
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </aside>

      {/* Blog cards */}
      <div className={styles["blog-list__main"]}>
        <div className={styles["blog-list__cards"]}>
          {visible.map((blog) => {
            const imageUrl = getStrapiMedia(blog.featureImage?.url);
            const category = blog.blogCategories?.[0]?.name;
            return (
              <Link
                key={blog.documentId}
                href={`/blogs/${blog.slug}`}
                className={styles["blog-list__card"]}
              >
                {imageUrl && (
                  <div className={styles["blog-list__card-image"]}>
                    <Image
                      src={imageUrl}
                      alt={blog.title}
                      width={520}
                      height={320}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                )}
                <div className={styles["blog-list__card-text"]}>
                  {category && (
                    <span className={styles["blog-list__card-tag"]}>
                      {category}
                    </span>
                  )}
                  <h2 className={styles["blog-list__card-title"]}>
                    {blog.title}
                  </h2>
                  {blog.excerpt && (
                    <p className={styles["blog-list__card-excerpt"]}>
                      {blog.excerpt}
                    </p>
                  )}
                  <span className={styles["blog-list__card-link"]}>
                    Read More
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {hasMore && (
          <button
            className={styles["blog-list__load-more"]}
            onClick={() => setVisibleCount((c) => c + BLOGS_PER_PAGE)}
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
}
