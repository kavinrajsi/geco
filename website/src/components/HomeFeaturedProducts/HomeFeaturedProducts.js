import { fetchStrapi, getStrapiMedia } from "@/lib/strapi";
import FeaturedProductsSlider from "./FeaturedProductsSlider";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import styles from "./HomeFeaturedProducts.module.scss";

export default async function HomeFeaturedProducts() {
  const productsData = await fetchStrapi("/products", {
    "fields[0]": "name",
    "fields[1]": "slug",
    "populate[image][fields][0]": "url",
    "populate[secondaryImage][fields][0]": "url",
    "populate[productCategory][fields][0]": "name",
    "sort": "publishedAt:desc",
    "pagination[pageSize]": "100",
  });

  const featuredNames = [
    "geco tilebond classic",
    "geco jointfill epoxy",
    "geco durafill max",
    "geco uniseal gp pro",
    "geco tilebond plus",
    "geco jointfill",
  ];
  const products = (productsData?.data || [])
    .filter((p) => featuredNames.includes(p.name?.toLowerCase()))
    .map((product) => ({
      ...product,
      imageUrl: getStrapiMedia(product.image?.url),
      secondaryImageUrl: getStrapiMedia(product.secondaryImage?.url),
    }))
    .sort((a, b) =>
      featuredNames.indexOf(a.name?.toLowerCase()) -
      featuredNames.indexOf(b.name?.toLowerCase())
    );

  if (products.length === 0) return null;

  return (
    <section className={styles["featured-products"]}>
      <div className={`container ${styles["featuredProductsContainer"]}`}>
        <SectionTitle
          title="Featured Products"
          description="Inspired by the gecko's remarkable sticking ability, our products stand for strength, reliability, and continuous innovation."
        />
        <FeaturedProductsSlider products={products} />
      </div>
    </section>
  );
}
