import { fetchStrapi } from "@/lib/strapi";
import PageHeader from "@/components/PageHeader/PageHeader";
import BlogList from "@/components/BlogList/BlogList";

export const metadata = {
  title: "Blogs",
  description: "Read our latest blog posts and updates.",
  openGraph: {
    title: "Blogs | Geco",
    description: "Read our latest blog posts and updates.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    title: "Blogs | Geco",
    description: "Read our latest blog posts and updates.",
    images: ["/og-image.jpg"],
  },
};

export default async function BlogsPage() {
  const blogsData = await fetchStrapi("/blogs", {
    "populate": "*",
    "sort": "createdAt:desc",
  });

  const blogs = blogsData?.data || [];

  const categories = [
    ...new Set(
      blogs.flatMap(
        (b) => b.blogCategories?.map((c) => c.name) || []
      )
    ),
  ];

  const tags = [
    ...new Set(
      blogs.flatMap(
        (b) => b.blogTags?.map((t) => t.name) || []
      )
    ),
  ];

  return (
    <>
      <PageHeader title="Blogs" />
      <BlogList blogs={blogs} categories={categories} tags={tags} />
    </>
  );
}
