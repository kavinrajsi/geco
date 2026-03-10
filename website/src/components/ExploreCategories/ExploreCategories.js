import FallbackImage from "@/components/FallbackImage/FallbackImage";
import Link from "next/link";
import styles from "./ExploreCategories.module.scss";

const categories = [
  {
    name: "Tile Adhesives",
    slug: "tile-adhesives",
    image: "/images/categories/tile-adhesives.png",
  },
  {
    name: "Tile Grouts",
    slug: "title-grouts",
    image: "/images/categories/tile-grouts.png",
  },
  {
    name: "Sealants",
    slug: "sealants",
    image: "/images/categories/sealants.png",
  },
  {
    name: "Tapes",
    slug: "tapes",
    image: "/images/categories/tapes.png",
  },
];

export default function ExploreCategories() {
  return (
    <section className={styles["explore"]}>
      <div className={styles["explore__header"]}>
        <h2 className={styles["explore__title"]}>Explore Categories</h2>
        <p className={styles["explore__subtitle"]}>
          Discover our range of professional solutions that are crafted to
          deliver strength, precision, and lasting results for every stage of
          your project.
        </p>
      </div>
      <div className={styles["explore__grid"]}>
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/products/category/${category.slug}`}
            className={styles["explore__card"]}
          >
            <FallbackImage
              src={category.image}
              alt={category.name}
              width={455}
              height={607}
              className={styles["explore__card-image"]}
            />
            <span className={styles["explore__card-label"]}>
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
