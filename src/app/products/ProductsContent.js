"use client";

import { useState } from "react";
import styles from "./page.module.css";

const products = [
  {
    slug: "tilebond",
    category: "Tile Adhesives",
    name: "GECO TILEBOND",
    image: "https://www.figma.com/api/mcp/asset/c1abe75e-5856-45fb-bf5b-15b4c91244a9",
  },
  {
    slug: "tilebond-plus",
    category: "Tile Adhesives",
    name: "GECO TILEBOND PLUS",
    image: "https://www.figma.com/api/mcp/asset/4431facf-fb6e-417e-892b-40c4de767f04",
  },
  {
    slug: "tilebond-classic",
    category: "Tile Adhesives",
    name: "GECO TILEBOND CLASSIC",
    image: "https://www.figma.com/api/mcp/asset/9558322b-85da-4745-a2f5-d2b6ddaf06f6",
  },
  {
    slug: "jointfill-epoxy",
    category: "Tile Grouts",
    name: "GECO JOINTFILL EPOXY",
    image: "https://www.figma.com/api/mcp/asset/9f131a0b-1c70-489a-9151-0f85d1bdb9ea",
  },
  {
    slug: "jointfill",
    category: "Tile Grouts",
    name: "GECO JOINTFILL",
    image: "https://www.figma.com/api/mcp/asset/fb91eb41-6980-490a-9e60-9a949b813ea8",
  },
  {
    slug: "durafill-12",
    category: "Tile Grouts",
    name: "GECO DURAFILL 12",
    image: "https://www.figma.com/api/mcp/asset/b7e20006-ab73-42cc-b404-3720f3492e5b",
  },
  {
    slug: "durafill-max",
    category: "Tile Grouts",
    name: "GECO DURAFILL MAX",
    image: "https://www.figma.com/api/mcp/asset/4cdce982-85fc-404f-914a-f24df480ae4b",
  },
  {
    slug: "masking-tape",
    category: "Tapes",
    name: "GECO MASKING TAPE",
    image: "https://www.figma.com/api/mcp/asset/a38b2fed-f9a0-4f04-b295-6a7f200ef172",
  },
  {
    slug: "uniseal",
    category: "Sealants",
    name: "UNISEAL",
    image: "https://www.figma.com/api/mcp/asset/a14e3b0a-606d-4a42-9a51-056e0cfeee13",
  },
];

const filters = ["All", "Tile Adhesives", "Tile Grouts", "Sealants", "Tapes"];

export default function ProductsContent() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <main className={styles.main}>
      {/* Hero */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Our Products</h1>
      </div>

      {/* Filter tabs */}
      <div className={styles.filtersWrap}>
        <div className={styles.filters}>
          {filters.map((f) => (
            <button
              key={f}
              className={`${styles.filterBtn} ${activeFilter === f ? styles.filterBtnActive : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Product grid */}
      <div className={styles.gridWrap}>
        <div className={styles.grid}>
          {filtered.map((product) => (
            <div key={product.slug} className={styles.card}>
              <div className={styles.cardImageWrap}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardInfo}>
                <span className={styles.cardCategory}>{product.category}</span>
                <span className={styles.cardName}>{product.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
