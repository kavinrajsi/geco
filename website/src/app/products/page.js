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

export const revalidate = 60;

export default async function ProductsPage() {
  const [productsData, categoriesData] = await Promise.all([
    fetchStrapi("/products", {
      "fields[0]": "name",
      "fields[1]": "slug",
      "populate[image][fields][0]": "url",
      "populate[productCategory][fields][0]": "name",
      "sort": "name:asc",
      "pagination[pageSize]": "100",
    }),
    fetchStrapi("/product-categories", {
      "fields[0]": "name",
      "fields[1]": "slug",
      "sort": "name:asc",
    }),
  ]);

  const products = productsData?.data || [];
  const categoryOrder = ["Tile Adhesives", "Tile Grouts", "Sealants", "Tapes"];
  const categories = (categoriesData?.data || [])
    .map((cat) => ({ name: cat.name, slug: cat.slug }))
    .sort((a, b) => {
      const ai = categoryOrder.indexOf(a.name);
      const bi = categoryOrder.indexOf(b.name);
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    });

  return (
    <>
      <PageHeader title="Products" />
      <ProductGrid products={products} categories={categories} />
    </>
  );
}
