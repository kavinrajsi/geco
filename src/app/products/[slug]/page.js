import ProductDetailContent from "./ProductDetailContent";
import { JsonLd, breadcrumbSchema, productSchema, faqSchema } from "../../schema";

const productData = {
  "tilebond-classic": {
    name: "GECO TILEBOND CLASSIC",
    category: "Tile Adhesives",
    description:
      "GECO TILEBOND CLASSIC is a highly polymer-modified white cement-based adhesive designed for fixing tiles and natural stones. Its advanced polymers deliver superior adhesion, and its self-curing property doesn't leave any air pockets resulting in stronger anchoring of tiles and stones.",
    image: "/images/products/tilebond-classic.png",
    features: [
      "Self-curing",
      "Strong Bonding Strength",
      "Enhanced Durability",
      "Water Resistant",
      "Excellent Slip Resistant",
      "Enhanced Aesthetics",
      "Faster Installation",
      "Reduced Shrinkage",
      "Better Coverage & Efficiency",
    ],
    compliance: "Complies with IS 15477:2019 – Type 2T Adhesive standards.",
    faqs: [
      {
        question: "What makes GECO Tilebond better than traditional cement mortar?",
        answer: null,
      },
      {
        question: "Do tile adhesives contribute to long-lasting tile installations?",
        answer:
          "Absolutely. Their flexible, high-strength bonding resists movement, temperature changes, and moisture-related issues—greatly improving the durability of tiled surfaces.",
      },
      {
        question: "What makes TILEBOND CLASSIC suitable for light-coloured tiles?",
        answer: null,
      },
      {
        question: "What kinds of tiles can be fixed using TILEBOND CLASSIC?",
        answer: null,
      },
      {
        question: "Does TILEBOND CLASSIC offer strong durability?",
        answer: null,
      },
    ],
  },
};

const defaultProduct = {
  name: "GECO Product",
  category: "Construction Chemicals",
  description: "Professional-grade construction chemical by GECO, engineered for precision and built for professionals.",
  image: "/images/products/tilebond.png",
  features: [],
  compliance: null,
  faqs: [],
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = productData[slug] || defaultProduct;
  return {
    title: `${data.name} – ${data.category}`,
    description: data.description,
    alternates: {
      canonical: `https://www.geco.in/products/${slug}`,
    },
    openGraph: {
      title: `${data.name} – GECO ${data.category}`,
      description: data.description,
      url: `https://www.geco.in/products/${slug}`,
      type: "website",
      images: data.image ? [{ url: data.image }] : [],
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const data = productData[slug] || defaultProduct;

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: data.category, url: "/products" },
    { name: data.name },
  ]);

  const product = productSchema({
    name: data.name,
    category: data.category,
    description: data.description,
    image: data.image,
    slug: slug,
    features: data.features,
    compliance: data.compliance,
  });

  const faqs = faqSchema(data.faqs);

  return (
    <>
      <JsonLd data={[breadcrumbs, product, faqs]} />
      <ProductDetailContent />
    </>
  );
}
