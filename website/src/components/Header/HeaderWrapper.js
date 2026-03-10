import { fetchStrapi } from "@/lib/strapi";
import Header from "./Header";

export default async function HeaderWrapper() {
  const data = await fetchStrapi("/product-categories", {
    "fields[0]": "name",
    "fields[1]": "slug",
    "sort": "name:asc",
  });

  const categoryOrder = ["Tile Adhesives", "Tile Grouts", "Sealants", "Tapes"];
  const categories = (data?.data || [])
    .map((cat) => ({ name: cat.name, slug: cat.slug }))
    .sort((a, b) => {
      const ai = categoryOrder.indexOf(a.name);
      const bi = categoryOrder.indexOf(b.name);
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    });

  return <Header productCategories={categories} />;
}
