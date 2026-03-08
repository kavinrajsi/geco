import { fetchStrapi, getStrapiMedia } from "@/lib/strapi";
import BlogSlider from "./BlogSlider";
import styles from "./HomeBlogSection.module.scss";

export default async function HomeBlogSection() {
  const blogsData = await fetchStrapi("/blogs", {
    "populate": "*",
    "sort": "createdAt:desc",
    "pagination[limit]": "3",
  });

  const blogs = blogsData?.data || [];

  if (blogs.length === 0) return null;

  return (
    <section className={styles["home-blogs"]}>
      <h2 className={styles["home-blogs__title"]}>Blogs</h2>
      <BlogSlider blogs={blogs} getStrapiMediaUrl={getStrapiMedia} />
    </section>
  );
}
