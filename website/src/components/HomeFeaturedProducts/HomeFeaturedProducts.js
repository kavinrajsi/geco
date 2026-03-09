import { fetchStrapi, getStrapiMedia } from "@/lib/strapi";
import FeaturedProductsSlider from "./FeaturedProductsSlider";
import styles from "./HomeFeaturedProducts.module.scss";

export default async function HomeFeaturedProducts() {
  const productsData = await fetchStrapi("/products", {
    "populate": "*",
    "sort": "createdAt:desc",
    "pagination[limit]": "4",
  });

  const products = (productsData?.data || []).map((product) => ({
    ...product,
    featureImageUrl: getStrapiMedia(product.featureImage?.url),
  }));

  if (products.length === 0) return null;

  return (
    <section className={styles["featured-products"]}>
      <div className={styles["featured-products__header"]}>
        <h2 className={styles["featured-products__title"]}>
          Featured Products
        </h2>
        <p className={styles["featured-products__subtitle"]}>
          Explore our top-quality products designed for durability and
          performance.
        </p>
      </div>
      <FeaturedProductsSlider products={products} />
    </section>
  );
}
