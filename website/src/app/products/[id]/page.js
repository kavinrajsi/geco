import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { fetchStrapi, getStrapiMedia } from "@/lib/strapi";
import styles from "./page.module.scss";

async function getProduct(slug) {
  const data = await fetchStrapi("/products", {
    "filters[slug][$eq]": slug,
    "populate": "*",
  });
  return data?.data?.[0] || null;
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
    openGraph: {
      title: `${product.name} | Geco`,
      description: product.tagline,
      images: ["/og-image.jpg"],
    },
    twitter: {
      title: `${product.name} | Geco`,
      description: product.tagline,
      images: ["/og-image.jpg"],
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
            child.bold ? <strong key={j}>{child.text}</strong> : child.text
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
              {item.children?.map((child, k) => child.text).join("")}
            </li>
          ))}
        </ListTag>
      );
    }
    return null;
  });
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  const imageUrl = getStrapiMedia(product.image?.url);
  const brochureUrl = getStrapiMedia(product.brochure?.url);

  return (
    <div className={styles["product-detail"]}>
      {/* Header */}
      <div className={styles["product-detail__header"]}>
        <span className={styles["product-detail__tag"]}>
          {product.productCategory?.name}
        </span>
        <h1 className={styles["product-detail__title"]}>{product.name}</h1>
        <p className={styles["product-detail__tagline"]}>{product.tagline}</p>
      </div>

      {/* Image */}
      {imageUrl && (
        <div className={styles["product-detail__image"]}>
          <Image
            src={imageUrl}
            alt={product.name}
            width={600}
            height={600}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      )}

      {/* Description */}
      <section className={styles["product-detail__section"]}>
        <h2 className={styles["product-detail__section-title"]}>Description</h2>
        <p className={styles["product-detail__description"]}>
          {product.description}
        </p>
      </section>

      {/* Features */}
      {product.features?.length > 0 && (
        <section className={styles["product-detail__section"]}>
          <h2 className={styles["product-detail__section-title"]}>Features</h2>
          <ul className={styles["product-detail__features"]}>
            {product.features.map((feature) => (
              <li key={feature.id} className={styles["product-detail__feature"]}>
                {feature.text}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Areas of Application */}
      {product.areasOfApplication?.length > 0 && (
        <section className={styles["product-detail__section"]}>
          <h2 className={styles["product-detail__section-title"]}>Areas of Application</h2>
          <div className={styles["product-detail__blocks"]}>
            <BlocksRenderer content={product.areasOfApplication} />
          </div>
        </section>
      )}

      {/* How to Use */}
      {product.howToUse?.length > 0 && (
        <section className={styles["product-detail__section"]}>
          <h2 className={styles["product-detail__section-title"]}>How to Use</h2>
          <div className={styles["product-detail__steps"]}>
            {product.howToUse.map((step) => (
              <div key={step.id} className={styles["product-detail__step"]}>
                <span className={styles["product-detail__step-number"]}>
                  {step.stepNumber}
                </span>
                <div>
                  <h3 className={styles["product-detail__step-title"]}>
                    {step.title}
                  </h3>
                  <p className={styles["product-detail__step-description"]}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Standard Compliance */}
      {product.standardCompliance?.length > 0 && (
        <section className={styles["product-detail__section"]}>
          <h2 className={styles["product-detail__section-title"]}>Standard Compliance</h2>
          <div className={styles["product-detail__blocks"]}>
            <BlocksRenderer content={product.standardCompliance} />
          </div>
        </section>
      )}

      {/* Highlight / CTA */}
      {product.highlight && (
        <section className={styles["product-detail__highlight"]}>
          <h2 className={styles["product-detail__highlight-title"]}>
            {product.highlight.title}
          </h2>
          <div className={styles["product-detail__highlight-description"]}>
            <BlocksRenderer content={product.highlight.description} />
          </div>
          {product.highlight.buttonLink && (
            <Link
              href={product.highlight.buttonLink}
              className={styles["product-detail__highlight-btn"]}
            >
              {product.highlight.buttonText || "Learn more"}
            </Link>
          )}
        </section>
      )}

      {/* FAQs */}
      {product.faqs?.length > 0 && (
        <section className={styles["product-detail__section"]}>
          <h2 className={styles["product-detail__section-title"]}>FAQs</h2>
          <div className={styles["product-detail__faqs"]}>
            {product.faqs.map((faq) => (
              <details key={faq.id} className={styles["product-detail__faq"]}>
                <summary className={styles["product-detail__faq-question"]}>
                  {faq.question}
                </summary>
                <p className={styles["product-detail__faq-answer"]}>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Brochure Download */}
      {brochureUrl && (
        <section className={styles["product-detail__section"]}>
          <a
            href={brochureUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles["product-detail__brochure"]}
          >
            Download Brochure
          </a>
        </section>
      )}
    </div>
  );
}
