import { fetchStrapi } from "@/lib/strapi";
import PageHeader from "@/components/PageHeader/PageHeader";
import ProductGrid from "@/components/ProductGrid/ProductGrid";

export const metadata = {
  title: "Products",
  description: "Explore our range of tile adhesives, grouts, tapes, and sealants.",
  openGraph: {
    title: "Products | Geco",
    description: "Explore our range of tile adhesives, grouts, tapes, and sealants.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    title: "Products | Geco",
    description: "Explore our range of tile adhesives, grouts, tapes, and sealants.",
    images: ["/og-image.jpg"],
  },
};

export default async function ProductsPage() {
  const productsData = await fetchStrapi("/products", {
    "populate": "*",
    "sort": "name:asc",
  });

  const products = productsData?.data || [];

  // Extract unique category names
  const categories = [
    ...new Set(
      products
        .map((p) => p.productCategory?.name)
        .filter(Boolean)
    ),
  ];

  return (
    <>
      <PageHeader title="Products" />
      <ProductGrid products={products} categories={categories} />
    </>
  );
}
