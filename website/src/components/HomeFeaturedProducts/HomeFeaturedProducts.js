import { fetchStrapi, getStrapiMedia } from "@/lib/strapi";
import FeaturedProductsSlider from "./FeaturedProductsSlider";
import styles from "./HomeFeaturedProducts.module.scss";

export default async function HomeFeaturedProducts() {
  const productsData = await fetchStrapi("/products", {
    "fields[0]": "name",
    "fields[1]": "slug",
    "populate[image][fields][0]": "url",
    "populate[productCategory][fields][0]": "name",
    "sort": "createdAt:desc",
    "pagination[pageSize]": "100",
  });

  const categoryOrder = ["tile adhesives", "title grouts", "sealants", "tapes"];
  const products = (productsData?.data || [])
    .map((product) => ({
      ...product,
      imageUrl: getStrapiMedia(product.image?.url),
    }))
    .sort((a, b) => {
      const ai = categoryOrder.indexOf(a.productCategory?.name?.toLowerCase());
      const bi = categoryOrder.indexOf(b.productCategory?.name?.toLowerCase());
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    });

  if (products.length === 0) return null;

  return (
    <section className={styles["featured-products"]}>
      <div className={styles["featured-products__header"]}>
        <h2 className={styles["featured-products__title"]}>
          Featured Products
        </h2>
        <p className={styles["featured-products__subtitle"]}>
          Inspired by the gecko&apos;s remarkable sticking ability, our products
          stand for strength, reliability, and continuous innovation.
        </p>
      </div>
      <FeaturedProductsSlider products={products} />
    </section>
  );
}
