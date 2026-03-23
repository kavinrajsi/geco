import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/config";
import { fetchStrapi, extractTextFromContent } from "@/lib/strapi";
import PageHeader from "@/components/PageHeader/PageHeader";
import BlogList from "@/components/BlogList/BlogList";

async function getCategory(slug) {
  const data = await fetchStrapi("/blog-categories", {
    "filters[slug][$eq]": slug,
    "fields[0]": "name",
    "fields[1]": "slug",
  });
  return data?.data?.[0] || null;
}

async function getBlogsByCategory(categorySlug) {
  const data = await fetchStrapi("/blogs", {
    "filters[blogCategories][slug][$eq]": categorySlug,
    "populate[featureImage][fields][0]": "url",
    "populate[blogCategories][fields][0]": "name",
    "populate[blogTags][fields][0]": "name",
    "fields[0]": "title",
    "fields[1]": "slug",
    "fields[2]": "excerpt",
    "populate[content][populate]": "*",
    "sort": "publishingDate:desc",
  });
  return (data?.data || []).map((blog) => ({
    ...blog,
    excerpt: blog.excerpt || extractTextFromContent(blog.content),
  }));
}

export async function generateStaticParams() {
  const data = await fetchStrapi("/blog-categories", {
    "fields[0]": "slug",
  });
  return (data?.data || []).map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = await getCategory(slug);

  if (!category) {
    return { title: "Category Not Found" };
  }

  return {
    title: `${category.name} Blogs`,
    description: `Read expert articles and guides about ${category.name.toLowerCase()} from Geco — building materials inspired by nature.`,
    alternates: {
      canonical: `/blogs/category/${slug}`,
    },
    openGraph: {
      title: `${category.name} Blogs | Geco`,
      description: `Read expert articles and guides about ${category.name.toLowerCase()} from Geco — building materials inspired by nature.`,
      images: ["/og-image.png"],
    },
    twitter: {
      title: `${category.name} Blogs | Geco`,
      description: `Read expert articles and guides about ${category.name.toLowerCase()} from Geco — building materials inspired by nature.`,
      images: ["/og-image.png"],
    },
  };
}

export default async function BlogCategoryPage({ params }) {
  const { slug } = await params;
  const category = await getCategory(slug);

  if (!category) {
    notFound();
  }

  const blogs = await getBlogsByCategory(slug);

  const categories = [
    ...new Set(
      blogs.flatMap((b) => b.blogCategories?.map((c) => c.name) || [])
    ),
  ];

  const tags = [
    ...new Set(
      blogs.flatMap((b) => b.blogTags?.map((t) => t.name) || [])
    ),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.name} Blogs`,
    url: `${SITE_URL}/blogs/category/${slug}`,
    description: `Read expert articles and guides about ${category.name.toLowerCase()} from Geco — building materials inspired by nature.`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader title={category.name} />
      <BlogList blogs={blogs} categories={categories} tags={tags} />
    </>
  );
}
