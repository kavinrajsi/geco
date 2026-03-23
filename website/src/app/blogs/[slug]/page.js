import { notFound } from "next/navigation";
import Link from "next/link";
import FallbackImage from "@/components/FallbackImage/FallbackImage";
import { SITE_URL } from "@/lib/config";
import { fetchStrapi, getStrapiMedia } from "@/lib/strapi";
import ShareButtons from "@/components/ShareButtons/ShareButtons";
import styles from "./page.module.scss";

export const revalidate = 60;

async function getBlog(slug) {
  const data = await fetchStrapi("/blogs", {
    "filters[slug][$eq]": slug,
    "populate[featureImage][fields][0]": "url",
    "populate[featureImage][fields][1]": "alternativeText",
    "populate[blogCategories][fields][0]": "name",
    "populate[blogTags][fields][0]": "name",
    "populate[content][populate]": "*",
  });
  return data?.data?.[0] || null;
}

async function getAdjacentBlogs(publishDate) {
  const [prevData, nextData] = await Promise.all([
    fetchStrapi("/blogs", {
      "filters[publishDate][$lt]": publishDate,
      "sort": "publishDate:desc",
      "pagination[limit]": "1",
      "fields[0]": "title",
      "fields[1]": "slug",
    }),
    fetchStrapi("/blogs", {
      "filters[publishDate][$gt]": publishDate,
      "sort": "publishDate:asc",
      "pagination[limit]": "1",
      "fields[0]": "title",
      "fields[1]": "slug",
    }),
  ]);

  return {
    prev: prevData?.data?.[0] || null,
    next: nextData?.data?.[0] || null,
  };
}

export async function generateStaticParams() {
  const data = await fetchStrapi("/blogs", {
    "fields[0]": "slug",
  });
  const blogs = data?.data || [];
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return { title: "Blog Not Found" };
  }

  return {
    title: blog.title,
    description: blog.excerpt || blog.title,
    alternates: {
      canonical: `/blogs/${slug}`,
    },
    openGraph: {
      title: `${blog.title} | Geco`,
      description: blog.excerpt || blog.title,
      images: ["/og-image.png"],
    },
    twitter: {
      title: `${blog.title} | Geco`,
      description: blog.excerpt || blog.title,
      images: ["/og-image.png"],
    },
  };
}

function renderInlineChildren(children) {
  if (!children) return null;
  return children.map((child, j) => {
    // Strapi link node
    if (child.type === "link") {
      return (
        <a key={j} href={child.url} target="_blank" rel="noopener noreferrer">
          {renderInlineChildren(child.children)}
        </a>
      );
    }
    // Strapi nested list inside a list-item
    if (child.type === "list") {
      return renderBlock(child, j);
    }
    let node = child.text;
    if (child.code) node = <code key={`${j}-code`}>{node}</code>;
    if (child.bold) node = <strong key={`${j}-bold`}>{node}</strong>;
    if (child.italic) node = <em key={`${j}-italic`}>{node}</em>;
    if (child.underline) node = <u key={`${j}-underline`}>{node}</u>;
    if (child.strikethrough) node = <s key={`${j}-strike`}>{node}</s>;
    return <span key={j}>{node}</span>;
  });
}

function renderBlock(block, i) {
  if (block.type === "paragraph") {
    return <p key={i}>{renderInlineChildren(block.children)}</p>;
  }

  if (block.type === "list") {
    const ListTag = block.format === "ordered" ? "ol" : "ul";
    return (
      <ListTag key={i}>
        {block.children?.map((item, j) => {
          if (item.type === "list-item") {
            // Separate inline children from nested sub-lists
            const inline = [];
            const nested = [];
            item.children?.forEach((child) => {
              if (child.type === "list") {
                nested.push(child);
              } else {
                inline.push(child);
              }
            });
            return (
              <li key={j}>
                {renderInlineChildren(inline)}
                {nested.map((sub, k) => renderBlock(sub, `${j}-${k}`))}
              </li>
            );
          }
          // Fallback: treat as inline
          return <li key={j}>{renderInlineChildren(item.children)}</li>;
        })}
      </ListTag>
    );
  }

  if (block.type === "heading") {
    const Tag = `h${block.level || 2}`;
    return <Tag key={i}>{renderInlineChildren(block.children)}</Tag>;
  }

  if (block.type === "quote") {
    return (
      <blockquote key={i}>
        {block.children?.map((child, j) => {
          // Strapi quote children can be paragraphs or inline text
          if (child.type === "paragraph") {
            return <p key={j}>{renderInlineChildren(child.children)}</p>;
          }
          return renderInlineChildren(child.children ? [child] : []);
        })}
      </blockquote>
    );
  }

  if (block.type === "image") {
    const imgUrl = getStrapiMedia(block.image?.url);
    if (!imgUrl) return null;
    return (
      <figure key={i} className={styles["blog-detail__figure--center"]}>
        <FallbackImage
          src={imgUrl}
          alt={block.image?.alternativeText || ""}
          width={850}
          height={566}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </figure>
    );
  }

  return null;
}

function BlocksRenderer({ content }) {
  if (!content || !Array.isArray(content)) return null;
  return content.map((block, i) => renderBlock(block, i));
}

function DynamicZone({ content }) {
  if (!content || !Array.isArray(content)) return null;

  return content.map((block, i) => {
    switch (block.__component) {
      case "blog.rich-text":
        return (
          <div key={i} className={styles["blog-detail__rich-text"]}>
            <BlocksRenderer content={block.body} />
          </div>
        );

      case "blog.heading": {
        const HeadingTag = block.level || "h2";
        const levelClass = styles[`blog-detail__heading--${HeadingTag}`] || "";
        return (
          <HeadingTag
            key={i}
            className={`${styles["blog-detail__heading"]} ${levelClass}`}
          >
            {block.text}
          </HeadingTag>
        );
      }

      case "blog.image": {
        const imgData = block.file || block.image;
        const imgUrl = getStrapiMedia(imgData?.url);
        if (!imgUrl) return null;
        const align = block.alignment || block.align || "center";
        const figureClass =
          styles[`blog-detail__figure--${align}`] || styles["blog-detail__figure"];
        return (
          <figure key={i} className={figureClass}>
            <FallbackImage
              src={imgUrl}
              alt={block.alt || imgData?.alternativeText || block.caption || ""}
              width={850}
              height={566}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {block.caption && (
              <figcaption className={styles["blog-detail__caption"]}>
                {block.caption}
              </figcaption>
            )}
          </figure>
        );
      }

      case "blog.video":
        return (
          <div key={i} className={styles["blog-detail__video"]}>
            <iframe
              src={block.url}
              title={block.title || "Video"}
              allowFullScreen
              style={{ width: "100%", aspectRatio: "16/9", border: "none" }}
            />
          </div>
        );

      case "blog.embed":
        return (
          <div key={i} className={styles["blog-detail__embed"]}>
            <iframe
              src={block.url}
              title={block.title || "Embed"}
              style={{ width: "100%", minHeight: "400px", border: "none" }}
            />
          </div>
        );

      case "blog.table": {
        // Strapi may send table as HTML string or as structured rows
        if (block.content && typeof block.content === "string") {
          return (
            <div
              key={i}
              className={styles["blog-detail__table"]}
              dangerouslySetInnerHTML={{ __html: block.content }}
            />
          );
        }
        // Structured table data: { rows: [[ "cell", ... ], ...], hasHeader: true }
        const rows = block.rows || block.tableBody || [];
        const hasHeader = block.hasHeader !== false;
        return (
          <div key={i} className={styles["blog-detail__table"]}>
            <table>
              {hasHeader && rows.length > 0 && (
                <thead>
                  <tr>
                    {(rows[0].cells || rows[0])?.map((cell, ci) => (
                      <th key={ci}>{typeof cell === "object" ? cell.content || cell.text || "" : cell}</th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody>
                {rows.slice(hasHeader ? 1 : 0).map((row, ri) => (
                  <tr key={ri}>
                    {(row.cells || row)?.map((cell, ci) => (
                      <td key={ci}>{typeof cell === "object" ? cell.content || cell.text || "" : cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }

      case "blog.file": {
        const fileUrl = getStrapiMedia(block.file?.url);
        if (!fileUrl) return null;
        return (
          <div key={i} className={styles["blog-detail__file"]}>
            <a href={fileUrl} target="_blank" rel="noopener noreferrer">
              {block.label || block.file?.name || "Download file"}
            </a>
          </div>
        );
      }

      default:
        return null;
    }
  });
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  const featureImageUrl = getStrapiMedia(blog.featureImage?.url);
  const { prev, next } = await getAdjacentBlogs(blog.publishDate || blog.publishedAt);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt || blog.title,
    ...(featureImageUrl && { image: featureImageUrl }),
    datePublished: blog.publishDate || blog.publishedAt,
    dateModified: blog.updatedAt || blog.publishDate || blog.publishedAt,
    author: { "@type": "Organization", name: "Geco" },
    publisher: {
      "@type": "Organization",
      name: "Geco",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-image.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blogs/${slug}`,
    },
    keywords: [
      ...(blog.blogCategories?.map((c) => c.name) || []),
      ...(blog.blogTags?.map((t) => t.name) || []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Full-width feature image */}
      {featureImageUrl && (
        <div className={styles["blog-detail__feature-image"]}>
          <FallbackImage
            src={featureImageUrl}
            alt={blog.title}
            width={1920}
            height={985}
            priority
          />
        </div>
      )}

      <article className={styles["blog-detail"]}>
        {/* Header */}
        <header className={styles["blog-detail__header"]}>
          {blog.blogCategories?.length > 0 && (
            <div className={styles["blog-detail__categories"]}>
              {blog.blogCategories.map((cat) => (
                <span key={cat.id} className={styles["blog-detail__tag"]}>
                  {cat.name}
                </span>
              ))}
            </div>
          )}
          <h1 className={styles["blog-detail__title"]}>{blog.title}</h1>
        </header>

        {/* Content (Dynamic Zone) */}
        <div className={styles["blog-detail__content"]}>
          <DynamicZone content={blog.content} />
        </div>

        {/* Tags & Nav */}
        <div className={styles["blog-detail__tags-section"]}>
          <div className={styles["blog-detail__tags-row"]}>
            {blog.blogCategories?.length > 0 && (
              <div className={styles["blog-detail__tags-group"]}>
                <span className={styles["blog-detail__tags-label"]}>Tag:</span>
                <div className={styles["blog-detail__tags"]}>
                  {blog.blogCategories.map((cat) => (
                    <span key={cat.id} className={styles["blog-detail__blog-tag"]}>
                      {cat.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <ShareButtons title={blog.title} />
          </div>

          {(prev || next) && (
            <div className={styles["blog-detail__nav"]}>
              {prev ? (
                <Link
                  href={`/blogs/${prev.slug}`}
                  className={styles["blog-detail__nav-item"]}
                >
                  <span className={styles["blog-detail__nav-label"]}>Previous</span>
                  <span className={styles["blog-detail__nav-title"]}>{prev.title}</span>
                </Link>
              ) : (
                <span className={styles["blog-detail__nav-item"]} />
              )}
              <div className={styles["blog-detail__nav-divider"]} />
              {next ? (
                <Link
                  href={`/blogs/${next.slug}`}
                  className={`${styles["blog-detail__nav-item"]} ${styles["blog-detail__nav-item--next"]}`}
                >
                  <span className={styles["blog-detail__nav-label"]}>Next</span>
                  <span className={styles["blog-detail__nav-title"]}>{next.title}</span>
                </Link>
              ) : (
                <span className={styles["blog-detail__nav-item"]} />
              )}
            </div>
          )}
        </div>
      </article>
    </>
  );
}
