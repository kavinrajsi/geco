import Link from "next/link";
import styles from "./page.module.css";
import { JsonLd, breadcrumbSchema, itemListSchema } from "../schema";

export const metadata = {
  title: "Blogs – Construction Tips, Guides & Application Advice",
  description:
    "Read the latest articles, application guides, and tips from GECO on tile adhesives, grouts, sealants, tiling techniques, and construction best practices.",
  alternates: {
    canonical: "https://www.geco.in/blogs",
  },
  openGraph: {
    title: "GECO Blog – Construction Tips & Application Guides",
    description:
      "Expert articles on tile adhesives, grouts, sealants, and tiling techniques from GECO.",
    url: "https://www.geco.in/blogs",
    type: "website",
  },
};

const posts = [
  {
    slug: "applications-of-silicone-sealant",
    tag: "General",
    title: "Applications of Silicone Sealant",
    excerpt:
      "Silicone sealant can be used to seal the joints between two surfaces. Silicone sealant versions are flexible and stable under severe temperatures and may be used to glue a variety of surfaces including plastic, metal, and glass.",
    image: "https://www.figma.com/api/mcp/asset/c87a24b2-59c8-40a6-b009-5d583934790d",
    imageAlt: "Applications of Silicone Sealant",
  },
  {
    slug: "different-types-of-tiles",
    tag: "General",
    title: "Different Types of Tiles for your Kitchen and Bathroom",
    excerpt:
      "Kitchen and bathrooms are spaces where water usage is very high and the moisture in the air can cause mold growth and other issues. Therefore, choosing the right type of tile is of paramount importance.",
    image: "https://www.figma.com/api/mcp/asset/a85c5fa9-a27a-4cc8-b2c9-27c3f2f89680",
    imageAlt: "Different Types of Tiles",
  },
  {
    slug: "6-uses-for-epoxy-putty",
    tag: "Application Guides",
    title: "6 Uses for Epoxy Putty",
    excerpt:
      "Epoxy Putty can be used to seal holes, repairing cracks and dents in industrial, automotive & household objects. It can act as a strong adhesive fill that binds, sets and waterproofs a wide range of materials.",
    image: "https://www.figma.com/api/mcp/asset/010c05fb-81f6-4021-90df-9b8fe8adfdc9",
    imageAlt: "6 Uses for Epoxy Putty",
  },
  {
    slug: "introducing-geco-jointfill-tile-grouts",
    tag: "General",
    title: "Introducing GECO JOINTFILL Tile Grouts",
    excerpt:
      "A newly tiled floor, bathroom or countertop is a sight to behold, and it needs to be kept looking at its best. Tile grout is often considered as a minor part of tiling, but it plays a major role in ensuring longer life for the tiled surface.",
    image: "https://www.figma.com/api/mcp/asset/f16aa1a4-a477-414e-9ec3-ce2243bac850",
    imageAlt: "GECO JOINTFILL Tile Grouts",
  },
];

const categories = [
  { label: "Guides", count: 42, active: true },
  { label: "Application Guides", count: 14, active: false },
];

const tags = ["Guides", "General", "Application Guides"];

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="9" cy="9" r="6" stroke="#a0a0a0" strokeWidth="1.8" />
      <line x1="13.5" y1="13.5" x2="18" y2="18" stroke="#a0a0a0" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function BlogsPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blogs" },
  ]);

  const blogList = itemListSchema(
    posts.map((p) => ({ name: p.title, url: `/blogs/${p.slug}` })),
    "GECO Blog Articles"
  );

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "GECO Blogs",
    description: metadata.description,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: posts.length,
      itemListElement: posts.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://www.geco.in/blogs/${p.slug}`,
        name: p.title,
      })),
    },
  };

  return (
    <>
    <JsonLd data={[breadcrumbs, blogList, collectionSchema]} />
    <main className={styles.main}>
      {/* Hero */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Blogs</h1>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Posts column */}
        <div className={styles.postsCol}>
          <div className={styles.postsList}>
            {posts.map((post) => (
              <Link key={post.slug} href={`/blogs/${post.slug}`} className={styles.postCard}>
                <div className={styles.postImageWrap}>
                  <img src={post.image} alt={post.imageAlt} className={styles.postImage} />
                </div>
                <div className={styles.postText}>
                  <div className={styles.postMeta}>
                    <span className={styles.tag}>{post.tag}</span>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                  </div>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <span className={styles.readMore}>Read More</span>
                </div>
              </Link>
            ))}
          </div>
          <button className={styles.loadMoreBtn}>Load more</button>
        </div>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.searchBox}>
            <span className={styles.searchPlaceholder}>Search</span>
            <SearchIcon />
          </div>

          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarHeading}>Categories</h3>
            <ul className={styles.categoryList}>
              {categories.map((cat) => (
                <li key={cat.label} className={styles.categoryItem}>
                  <span className={`${styles.categoryLabel} ${cat.active ? styles.categoryActive : ""}`}>
                    {cat.label}
                  </span>
                  <span className={styles.categoryCount}>({cat.count})</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarHeading}>Tags</h3>
            <div className={styles.tagsList}>
              {tags.map((tag) => (
                <span key={tag} className={styles.tagPill}>{tag}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
    </>
  );
}
