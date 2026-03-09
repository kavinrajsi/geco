import { fetchStrapi } from "@/lib/strapi";
import Header from "./Header";

export default async function HeaderWrapper() {
  const data = await fetchStrapi("/product-categories", {
    "fields[0]": "name",
    "fields[1]": "slug",
    "sort": "name:asc",
  });

  const categories = (data?.data || []).map((cat) => ({
    name: cat.name,
    slug: cat.slug,
  }));

  return <Header productCategories={categories} />;
}
