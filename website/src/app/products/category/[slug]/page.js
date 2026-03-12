import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/config";
import { fetchStrapi } from "@/lib/strapi";
import PageHeader from "@/components/PageHeader/PageHeader";
import ProductGrid from "@/components/ProductGrid/ProductGrid";

async function getCategory(slug) {
  const data = await fetchStrapi("/product-categories", {
    "filters[slug][$eq]": slug,
    "populate": "*",
  });
  return data?.data?.[0] || null;
}

async function getProductsByCategory(categorySlug) {
  const data = await fetchStrapi("/products", {
    "filters[productCategory][slug][$eq]": categorySlug,
    "populate[image][fields][0]": "url",
    "populate[secondaryImage][fields][0]": "url",
    "populate[productCategory][fields][0]": "name",
    "populate[productCategory][fields][1]": "slug",
    "fields[0]": "name",
    "fields[1]": "slug",
    "fields[2]": "tagline",
    "sort": "name:asc",
  });
  return data?.data || [];
}

const categoryOrder = ["tile adhesives", "tile grouts", "sealants", "tapes"];

async function getAllCategories() {
  const data = await fetchStrapi("/product-categories", {
    "fields[0]": "name",
    "fields[1]": "slug",
    "sort": "name:asc",
  });
  return (data?.data || [])
    .map((cat) => ({ name: cat.name, slug: cat.slug }))
    .sort((a, b) => {
      const ai = categoryOrder.indexOf(a.name.toLowerCase());
      const bi = categoryOrder.indexOf(b.name.toLowerCase());
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    });
}

export async function generateStaticParams() {
  const data = await fetchStrapi("/product-categories", {
    "fields[0]": "slug",
  });
  const categories = data?.data || [];
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = await getCategory(slug);

  if (!category) {
    return { title: "Category Not Found" };
  }

  return {
    title: `${category.name} Products`,
    description: `Explore Geco's range of ${category.name.toLowerCase()} — high-performance building materials engineered for superior bonding and durability.`,
    alternates: {
      canonical: `/products/category/${slug}`,
    },
    openGraph: {
      title: `${category.name} Products | Geco`,
      description: `Explore Geco's range of ${category.name.toLowerCase()} — high-performance building materials engineered for superior bonding and durability.`,
      images: ["/og-image.png"],
    },
    twitter: {
      title: `${category.name} Products | Geco`,
      description: `Explore Geco's range of ${category.name.toLowerCase()} — high-performance building materials engineered for superior bonding and durability.`,
      images: ["/og-image.png"],
    },
  };
}

export default async function ProductCategoryPage({ params }) {
  const { slug } = await params;
  const category = await getCategory(slug);

  if (!category) {
    notFound();
  }

  const [products, categories] = await Promise.all([
    getProductsByCategory(slug),
    getAllCategories(),
  ]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.name} Products`,
    url: `${SITE_URL}/products/category/${slug}`,
    description: `Explore Geco's range of ${category.name.toLowerCase()} — high-performance building materials engineered for superior bonding and durability.`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader title={category.name} />
      <ProductGrid
        products={products}
        categories={categories}
        activeCategory={slug}
      />
    </>
  );
}
