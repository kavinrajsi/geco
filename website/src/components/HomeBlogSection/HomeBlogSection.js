import { fetchStrapi, getStrapiMedia } from "@/lib/strapi";
import BlogSlider from "./BlogSlider";
import styles from "./HomeBlogSection.module.scss";

export default async function HomeBlogSection() {
  const blogsData = await fetchStrapi("/blogs", {
    "fields[0]": "title",
    "fields[1]": "slug",
    "populate[featureImage][fields][0]": "url",
    "populate[blogCategories][fields][0]": "name",
    "sort": "createdAt:desc",
    "pagination[limit]": "4",
  });

  const blogs = (blogsData?.data || []).map((blog) => ({
    ...blog,
    featureImageUrl: getStrapiMedia(blog.featureImage?.url),
  }));

  if (blogs.length === 0) return null;

  return (
    <section className={styles["home-blogs"]}>
      <h2 className={styles["home-blogs__title"]}>Blogs</h2>
      <BlogSlider blogs={blogs} />
    </section>
  );
}
