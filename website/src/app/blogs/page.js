import { SITE_URL } from "@/lib/config";
import { fetchStrapi, extractTextFromContent } from "@/lib/strapi";
import PageHeader from "@/components/PageHeader/PageHeader";
import BlogList from "@/components/BlogList/BlogList";

export const metadata = {
  title: "Blogs",
  description:
    "Expert guides, tips, and articles on tiling, adhesives, grouting, and construction from Geco — building materials inspired by nature.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Blogs | Geco",
    description:
      "Expert guides, tips, and articles on tiling, adhesives, grouting, and construction from Geco — building materials inspired by nature.",
    images: ["/og-image.png"],
  },
  twitter: {
    title: "Blogs | Geco",
    description:
      "Expert guides, tips, and articles on tiling, adhesives, grouting, and construction from Geco — building materials inspired by nature.",
    images: ["/og-image.png"],
  },
};

export const revalidate = 60;

export default async function BlogsPage() {
  const blogsData = await fetchStrapi("/blogs", {
    "populate[featureImage][fields][0]": "url",
    "populate[blogCategories][fields][0]": "name",
    "populate[blogTags][fields][0]": "name",
    "fields[0]": "title",
    "fields[1]": "slug",
    "fields[2]": "excerpt",
    "populate[content][populate]": "*",
    "sort": "createdAt:desc",
  });

  const blogs = (blogsData?.data || []).map((blog) => ({
    ...blog,
    excerpt: blog.excerpt || extractTextFromContent(blog.content),
  }));

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blogs",
    url: `${SITE_URL}/blogs`,
    description:
      "Expert guides, tips, and articles on tiling, adhesives, grouting, and construction from Geco — building materials inspired by nature.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader title="Blogs" />
      <BlogList blogs={blogs} categories={categories} tags={tags} />
    </>
  );
}
