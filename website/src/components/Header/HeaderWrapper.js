import { fetchStrapi } from "@/lib/strapi";
import Header from "./Header";

export default async function HeaderWrapper() {
  const data = await fetchStrapi("/product-categories", {
    "sort": "name:asc",
  });

  const categories = (data?.data || []).map((cat) => ({
    name: cat.name,
    slug: cat.slug,
  }));

  return <Header productCategories={categories} />;
}
