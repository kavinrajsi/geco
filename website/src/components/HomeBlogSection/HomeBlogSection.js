import { fetchStrapi, getStrapiMedia, extractTextFromContent } from "@/lib/strapi";
import BlogSlider from "./BlogSlider";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import styles from "./HomeBlogSection.module.scss";

export default async function HomeBlogSection() {
  const blogsData = await fetchStrapi("/blogs", {
    "fields[0]": "title",
    "fields[1]": "slug",
    "fields[2]": "excerpt",
    "fields[3]": "sticky",
    "populate[featureImage][fields][0]": "url",
    "populate[blogCategories][fields][0]": "name",
    "populate[content][populate]": "*",
    "sort": "publishingDate:desc",
    "pagination[limit]": "6",
  });

  const blogs = (blogsData?.data || [])
    .map((blog) => ({
      ...blog,
      excerpt: blog.excerpt || extractTextFromContent(blog.content),
      featureImageUrl: getStrapiMedia(blog.featureImage?.url),
    }))
    .sort((a, b) => (b.sticky ? 1 : 0) - (a.sticky ? 1 : 0));

  if (blogs.length === 0) return null;

  return (
    <section className={styles["home-blogs"]}>
      <div className={`container ${styles["homeBlogsContainer"]}`}>
        <SectionTitle title="Blogs" />
        <BlogSlider blogs={blogs} />
      </div>
    </section>
  );
}
