import { SITE_URL } from "@/lib/config";
import { fetchStrapi, getStrapiMedia } from "@/lib/strapi";
import PageHeader from "@/components/PageHeader/PageHeader";
import ProductGrid from "@/components/ProductGrid/ProductGrid";

export const metadata = {
  title: "Products",
  description:
    "Browse Geco's full range of tile adhesives, tile grouts, silicone sealants, and masking tapes — engineered for superior bonding, durability, and performance.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Products | Geco",
    description:
      "Browse Geco's full range of tile adhesives, tile grouts, silicone sealants, and masking tapes — engineered for superior bonding, durability, and performance.",
    images: ["/og-image.png"],
  },
  twitter: {
    title: "Products | Geco",
    description:
      "Browse Geco's full range of tile adhesives, tile grouts, silicone sealants, and masking tapes — engineered for superior bonding, durability, and performance.",
    images: ["/og-image.png"],
  },
};

export const revalidate = 60;

export default async function ProductsPage() {
  const [productsData, categoriesData] = await Promise.all([
    fetchStrapi("/products", {
      "fields[0]": "name",
      "fields[1]": "slug",
      "populate[image][fields][0]": "url",
      "populate[secondaryImage][fields][0]": "url",
      "populate[productCategory][fields][0]": "name",
      "sort": "publishingDate:desc",
      "pagination[pageSize]": "100",
    }),
    fetchStrapi("/product-categories", {
      "fields[0]": "name",
      "fields[1]": "slug",
      "sort": "name:asc",
    }),
  ]);

  const categoryOrder = ["tile adhesives", "tile grouts", "sealants", "tapes"];
  const products = (productsData?.data || []).sort((a, b) => {
    const ai = categoryOrder.indexOf(a.productCategory?.name?.toLowerCase());
    const bi = categoryOrder.indexOf(b.productCategory?.name?.toLowerCase());
    const catDiff = (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    if (catDiff !== 0) return catDiff;
    return (a.name || "").localeCompare(b.name || "");
  });
  const categories = (categoriesData?.data || [])
    .map((cat) => ({ name: cat.name, slug: cat.slug }))
    .sort((a, b) => {
      const ai = categoryOrder.indexOf(a.name.toLowerCase());
      const bi = categoryOrder.indexOf(b.name.toLowerCase());
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Our Products",
    url: `${SITE_URL}/products`,
    description:
      "Browse Geco's full range of tile adhesives, tile grouts, silicone sealants, and masking tapes — engineered for superior bonding, durability, and performance.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader title="Our Products" />
      <ProductGrid products={products} categories={categories} />
    </>
  );
}
