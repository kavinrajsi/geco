import Button from "@/components/Button/Button";
import FallbackImage from "@/components/FallbackImage/FallbackImage";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import styles from "./ExploreCategories.module.scss";

const categories = [
  {
    name: "Tile Adhesives",
    slug: "tile-adhesives",
    image: "/images/categories/tile-adhesives.png",
  },
  {
    name: "Tile Grouts",
    slug: "tile-grouts",
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
      <div className="container-fluid">
      <SectionTitle
        title="Explore Categories"
        description="Discover our range of professional solutions that are crafted to deliver strength, precision, and lasting results for every stage of your project."
      
      />
      <div className={styles["explore__grid"]}>
        {categories.map((category) => (
          <div
            key={category.slug}
            className={styles["explore__card"]}
          >
            <FallbackImage
              src={category.image}
              alt={category.name}
              width={455}
              height={607}
              className={styles["explore__card-image"]}
            />
            <Button
              variant="white"
              text={category.name}
              href={`/products/category/${category.slug}`}
              className={styles["explore__card-label"]}
            />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
