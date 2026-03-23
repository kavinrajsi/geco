import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/config";
import { fetchStrapi, extractTextFromContent } from "@/lib/strapi";
import PageHeader from "@/components/PageHeader/PageHeader";
import BlogList from "@/components/BlogList/BlogList";

async function getTag(slug) {
  const data = await fetchStrapi("/blog-tags", {
    "filters[slug][$eq]": slug,
    "fields[0]": "name",
    "fields[1]": "slug",
  });
  return data?.data?.[0] || null;
}

async function getBlogsByTag(tagSlug) {
  const data = await fetchStrapi("/blogs", {
    "filters[blogTags][slug][$eq]": tagSlug,
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
  const data = await fetchStrapi("/blog-tags", {
    "fields[0]": "slug",
  });
  return (data?.data || []).map((tag) => ({ slug: tag.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tag = await getTag(slug);

  if (!tag) {
    return { title: "Tag Not Found" };
  }

  return {
    title: `${tag.name} Blogs`,
    description: `Browse articles tagged "${tag.name}" — expert guides and tips from Geco on building materials and construction.`,
    alternates: {
      canonical: `/blogs/tag/${slug}`,
    },
    openGraph: {
      title: `${tag.name} Blogs | Geco`,
      description: `Browse articles tagged "${tag.name}" — expert guides and tips from Geco on building materials and construction.`,
      images: ["/og-image.png"],
    },
    twitter: {
      title: `${tag.name} Blogs | Geco`,
      description: `Browse articles tagged "${tag.name}" — expert guides and tips from Geco on building materials and construction.`,
      images: ["/og-image.png"],
    },
  };
}

export default async function BlogTagPage({ params }) {
  const { slug } = await params;
  const tag = await getTag(slug);

  if (!tag) {
    notFound();
  }

  const blogs = await getBlogsByTag(slug);

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
    name: `${tag.name} Blogs`,
    url: `${SITE_URL}/blogs/tag/${slug}`,
    description: `Browse articles tagged "${tag.name}" — expert guides and tips from Geco on building materials and construction.`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader title={tag.name} />
      <BlogList blogs={blogs} categories={categories} tags={tags} />
    </>
  );
}
