import { fetchStrapi, getStrapiMedia } from "@/lib/strapi";
import Header from "./Header";

export default async function HeaderWrapper() {
  const [data, productsData] = await Promise.all([
    fetchStrapi("/product-categories", {
      "fields[0]": "name",
      "fields[1]": "slug",
      "sort": "name:asc",
    }),
    fetchStrapi("/products", {
      "fields[0]": "name",
      "fields[1]": "slug",
      "populate[image][fields][0]": "url",
      "populate[productCategory][fields][0]": "name",
      "sort": "name:asc",
      "pagination[pageSize]": "100",
    }),
  ]);

  const categoryOrder = ["tile adhesives", "tile grouts", "sealants", "tapes"];
  const categories = (data?.data || [])
    .map((cat) => ({ name: cat.name, slug: cat.slug }))
    .sort((a, b) => {
      const ai = categoryOrder.indexOf(a.name.toLowerCase());
      const bi = categoryOrder.indexOf(b.name.toLowerCase());
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    });

  const products = (productsData?.data || []).map((p) => ({
    name: p.name,
    slug: p.slug,
    category: p.productCategory?.name || "",
    imageUrl: getStrapiMedia(p.image?.url),
  }));

  return <Header productCategories={categories} products={products} />;
}
