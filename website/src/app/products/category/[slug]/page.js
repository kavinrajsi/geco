import { notFound } from "next/navigation";
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

async function getProducts() {
  const data = await fetchStrapi("/products", {
    "populate": "*",
    "sort": "name:asc",
  });
  return data?.data || [];
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
    description: `Explore our range of ${category.name} products.`,
    openGraph: {
      title: `${category.name} Products | Geco`,
      description: `Explore our range of ${category.name} products.`,
      images: ["/og-image.jpg"],
    },
    twitter: {
      title: `${category.name} Products | Geco`,
      description: `Explore our range of ${category.name} products.`,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function ProductCategoryPage({ params }) {
  const { slug } = await params;
  const category = await getCategory(slug);

  if (!category) {
    notFound();
  }

  const allProducts = await getProducts();

  const categories = [
    ...new Set(
      allProducts
        .map((p) => p.productCategory?.name)
        .filter(Boolean)
    ),
  ];

  return (
    <>
      <PageHeader title={category.name} />
      <ProductGrid
        products={allProducts}
        categories={categories}
        defaultCategory={category.name}
      />
    </>
  );
}
