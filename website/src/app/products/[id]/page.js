import { notFound } from "next/navigation";
import Link from "next/link";
import FallbackImage from "@/components/FallbackImage/FallbackImage";
import { SITE_URL } from "@/lib/config";
import { fetchStrapi, getStrapiMedia } from "@/lib/strapi";
import FaqAccordion from "@/components/FaqAccordion/FaqAccordion";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import CollapsibleSection from "@/components/CollapsibleSection/CollapsibleSection";
import CollapsibleGroup from "@/components/CollapsibleSection/CollapsibleGroup";
import HowToUseSteps from "@/components/HowToUseSteps/HowToUseSteps";
import WatchOurStories from "@/components/WatchOurStories/WatchOurStories";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Button from "@/components/Button/Button";
import styles from "./page.module.scss";

export const revalidate = 60;

async function getProduct(slug) {
  const data = await fetchStrapi("/products", {
    "filters[slug][$eq]": slug,
    "populate[image][fields][0]": "url",
    "populate[secondaryImage][fields][0]": "url",
    "populate[brochure][fields][0]": "url",
    "populate[productCategory][fields][0]": "name",
    "populate[features][populate]": "icon",
    "populate[faqs][populate]": "*",
    "populate[highlight][populate]": "*",
    "populate[howToUse][populate]": "image",
    "populate[relatedProducts][fields][0]": "name",
    "populate[relatedProducts][fields][1]": "slug",
    "populate[relatedProducts][populate][image][fields][0]": "url",
    "populate[relatedProducts][populate][productCategory][fields][0]": "name",
  });
  return data?.data?.[0] || null;
}

async function getOtherProducts(currentSlug, currentId) {
  const data = await fetchStrapi("/products", {
    "populate[image][fields][0]": "url",
    "populate[productCategory][fields][0]": "name",
    "fields[0]": "name",
    "fields[1]": "slug",
    sort: "publishingDate:desc",
  });
  const products = data?.data || [];
  const idx = products.findIndex(
    (p) => p.documentId === currentId || p.id === currentId,
  );
  return {
    related: products.filter((p) => p.slug !== currentSlug),
    prev: idx > 0 ? products[idx - 1] : null,
    next: idx < products.length - 1 ? products[idx + 1] : null,
  };
}

export async function generateStaticParams() {
  const data = await fetchStrapi("/products", {
    "fields[0]": "slug",
  });
  const products = data?.data || [];
  return products.map((product) => ({ id: product.slug }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.name,
    description: product.tagline,
    alternates: {
      canonical: `/products/${id}`,
    },
    openGraph: {
      title: `${product.name} | Geco`,
      description: product.tagline,
      images: ["/og-image.png"],
    },
    twitter: {
      title: `${product.name} | Geco`,
      description: product.tagline,
      images: ["/og-image.png"],
    },
  };
}

function BlocksRenderer({ content }) {
  if (!content || !Array.isArray(content)) return null;

  return content.map((block, i) => {
    if (block.type === "paragraph") {
      return (
        <p key={i}>
          {block.children?.map((child, j) =>
            child.bold ? <strong key={j}>{child.text}</strong> : child.text,
          )}
        </p>
      );
    }
    if (block.type === "list") {
      const ListTag = block.format === "ordered" ? "ol" : "ul";
      return (
        <ListTag key={i}>
          {block.children?.map((item, j) => (
            <li key={j}>
              {item.children?.map((child) => child.text).join("")}
            </li>
          ))}
        </ListTag>
      );
    }
    return null;
  });
}

function ChevronRight() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 2.5L8 6L4.5 9.5"
        stroke="#A0A0A0"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowCircleLeft() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="11" stroke="#6B727A" strokeWidth="1.2" />
      <path
        d="M14 8L10 12L14 16"
        stroke="#6B727A"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowCircleRight() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="11" stroke="#6B727A" strokeWidth="1.2" />
      <path
        d="M10 8L14 12L10 16"
        stroke="#6B727A"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  const imageUrl = getStrapiMedia(product.image?.url);
  const secondaryImageUrl = getStrapiMedia(product.secondaryImage?.url);
  const brochureUrl = getStrapiMedia(product.brochure?.url);
  const { prev, next, related: fallbackRelated } = await getOtherProducts(
    id,
    product.documentId || product.id,
  );
  const relatedProducts =
    product.relatedProducts?.length > 0
      ? product.relatedProducts.slice(0, 8)
      : fallbackRelated;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      description: product.tagline || product.description,
      ...(imageUrl && { image: imageUrl }),
      brand: { "@type": "Brand", name: "Geco" },
      ...(product.productCategory?.name && {
        category: product.productCategory.name,
      }),
      url: `${SITE_URL}/products/${id}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Products",
          item: `${SITE_URL}/products`,
        },
        ...(product.productCategory?.name
          ? [
              {
                "@type": "ListItem",
                position: 3,
                name: product.productCategory.name,
              },
              {
                "@type": "ListItem",
                position: 4,
                name: product.name,
              },
            ]
          : [
              {
                "@type": "ListItem",
                position: 3,
                name: product.name,
              },
            ]),
      ],
    },
    ...(product.faqs?.length > 0
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: product.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          },
        ]
      : []),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Breadcrumb */}
      <nav className={styles["breadcrumb"]}>
        <div className={`container ${styles["breadcrumbContainer"]}`}>
        <div className={styles["breadcrumb__links"]}>
          <div className={styles["breadcrumb__path"]}>
            <Link href="/" className={styles["breadcrumb__link"]}>
              Homepage
            </Link>
            <ChevronRight />
            <Link href="/products" className={styles["breadcrumb__link"]}>
              Products
            </Link>
            {product.productCategory?.name && (
              <>
                <ChevronRight />
                <span className={styles["breadcrumb__link"]}>
                  {product.productCategory.name}
                </span>
              </>
            )}
            <ChevronRight />
          </div>
          <span className={styles["breadcrumb__current"]}>{product.name}</span>
        </div>
        <div className={styles["breadcrumb__nav"]}>
          {prev ? (
            <Link
              href={`/products/${prev.slug}`}
              className={styles["breadcrumb__nav-link"]}
            >
              <ArrowCircleLeft />
              <span>Previous Product</span>
            </Link>
          ) : (
            <span />
          )}
          <div className={styles["breadcrumb__nav-divider"]} />
          {next ? (
            <Link
              href={`/products/${next.slug}`}
              className={styles["breadcrumb__nav-link"]}
            >
              <span>Next Product</span>
              <ArrowCircleRight />
            </Link>
          ) : (
            <span />
          )}
        </div>
        </div>
      </nav>

      <div className={`container ${styles["productDetailContainer"]}`}>
        {/* Image Column */}
        <div className={styles["product-detail__image-col"]}>
          <div className={styles["product-detail__image"]}>
            {imageUrl && (
              <FallbackImage
                src={imageUrl}
                alt={product.name}
                width={520}
                height={693}
                className={styles["product-detail__img-primary"]}
              />
            )}
            {secondaryImageUrl && (
              <FallbackImage
                src={secondaryImageUrl}
                alt={`${product.name} - secondary`}
                width={520}
                height={693}
                className={styles["product-detail__img-secondary"]}
              />
            )}
          </div>
        </div>

        {/* Details Column */}
        <div className={styles["product-detail__details-col"]}>
          {/* Header */}
          <div className={styles["product-detail__header"]}>
            <span className={styles["product-detail__tag"]}>
              {product.productCategory?.name}
            </span>
            <h1 className={styles["product-detail__title"]}>{product.name}</h1>
            <p className={styles["product-detail__tagline"]}>
              {product.tagline}
            </p>
          </div>

          {/* Description */}
          <p className={styles["product-detail__description"]}>
            {product.description}
          </p>

          {/* Brochure Download */}
          {brochureUrl && (
            <div className={styles["product-detail__brochure-wrap"]}>
              <Button
                href={brochureUrl}
                target="_blank"
                text="Brochure"
                className={styles["product-detail__brochure"]}
              />
            </div>
          )}

          {/* Collapsible sections — only one open at a time */}
          <CollapsibleGroup defaultOpen={0}>
            {product.features?.length > 0 && (
              <CollapsibleSection title="Features">
                <ul className={styles["product-detail__features"]}>
                  {product.features.map((feature) => {
                    const featureIconUrl = getStrapiMedia(feature.icon?.url);
                    return (
                      <li
                        key={feature.id}
                        className={styles["product-detail__feature"]}
                      >
                        {featureIconUrl ? (
                          <FallbackImage
                            src={featureIconUrl}
                            alt={feature.text}
                            width={24}
                            height={24}
                            className={styles["product-detail__feature-icon"]}
                          />
                        ) : (
                          <svg
                            className={styles["product-detail__feature-icon"]}
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path
                              d="M3 9L7.5 13.5L15 4.5"
                              stroke="#97D700"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                        <span className={styles["product-detail__feature-text"]}>
                          {feature.text}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </CollapsibleSection>
            )}

            {product.areasOfApplication?.length > 0 && (
              <CollapsibleSection title="Areas of Application">
                <div className={styles["product-detail__blocks"]}>
                  <BlocksRenderer content={product.areasOfApplication} />
                </div>
              </CollapsibleSection>
            )}

            {product.standardCompliance?.length > 0 && (
              <CollapsibleSection title="Standard Compliance">
                <div className={styles["product-detail__blocks"]}>
                  <BlocksRenderer content={product.standardCompliance} />
                </div>
              </CollapsibleSection>
            )}
          </CollapsibleGroup>
        </div>
      </div>

      {/* How to Use */}
      {product.howToUse?.length > 0 && (
        <section className={styles["product-detail__how-to-use"]}>
          <div className={`container ${styles["howToUseContainer"]}`}>
            <SectionTitle title="How to use?" />
            <HowToUseSteps
              steps={product.howToUse.map((step) => ({
                ...step,
                imageUrl: getStrapiMedia(step.image?.url),
              }))}
            />
          </div>
        </section>
      )}

      {/* Watch Our Stories */}
      <WatchOurStories
        title="Watch Our Stories"
        subtitle={product.videoSubtitle}
        videoUrl={product.videoUrl}
      />

      {/* Highlight / CTA */}
      {product.highlight &&
        (() => {
          const highlightImageUrl = getStrapiMedia(
            product.highlight.image?.url,
          );
          return (
            <section className={styles["highlight"]}>
              <div className={styles["highlight__card"]}>
                <div className={styles["highlight__image"]}>
                  {highlightImageUrl && (
                    <FallbackImage
                      src={highlightImageUrl}
                      alt={product.highlight.title}
                      width={630}
                      height={430}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>
                <div className={styles["highlight__content"]}>
                  <div className={styles["highlight__text"]}>
                    <h2 className={styles["highlight__title"]}>
                      {product.highlight.title}
                    </h2>
                    <div className={styles["highlight__description"]}>
                      <BlocksRenderer content={product.highlight.description} />
                    </div>
                  </div>
                  {(product.highlight.linkedBlog?.slug || product.highlight.buttonLink) && (
                    <Link
                      href={product.highlight.linkedBlog?.slug ? `/blogs/${product.highlight.linkedBlog.slug}` : product.highlight.buttonLink}
                      className={styles["highlight__btn"]}
                    >
                      {product.highlight.buttonText || "Learn more"}
                    </Link>
                  )}
                </div>
              </div>
            </section>
          );
        })()}

      {/* FAQs */}
      {product.faqs?.length > 0 && (
        <section className={styles["product-detail__faq-section"]}>
          <div className={`container ${styles["faqContainer"]}`}>
            <SectionTitle title="FAQs" noTransform />
            <FaqAccordion faqs={product.faqs} />
          </div>
        </section>
      )}

      {/* Related Products */}
      <RelatedProducts products={relatedProducts} />
    </>
  );
}
