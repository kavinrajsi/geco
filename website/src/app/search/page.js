import { SITE_URL } from "@/lib/config";
import { fetchStrapi, getStrapiMedia } from "@/lib/strapi";
import PageHeader from "@/components/PageHeader/PageHeader";
import SearchResults from "./SearchResults";

export const metadata = {
  title: "Search",
  description: "Search Geco products and blog articles.",
  alternates: {
    canonical: "/search",
  },
};

export const revalidate = 60;

export default async function SearchPage() {
  const [productsData, blogsData] = await Promise.all([
    fetchStrapi("/products", {
      "fields[0]": "name",
      "fields[1]": "slug",
      "populate[image][fields][0]": "url",
      "populate[secondaryImage][fields][0]": "url",
      "populate[productCategory][fields][0]": "name",
      "sort": "name:asc",
      "pagination[pageSize]": "100",
    }),
    fetchStrapi("/blogs", {
      "fields[0]": "title",
      "fields[1]": "slug",
      "fields[2]": "excerpt",
      "populate[featureImage][fields][0]": "url",
      "populate[blogCategories][fields][0]": "name",
      "sort": "publishedAt:desc",
      "pagination[pageSize]": "100",
    }),
  ]);

  const products = (productsData?.data || []).map((product) => ({
    ...product,
    type: "product",
    imageUrl: getStrapiMedia(product.image?.url),
    secondaryImageUrl: getStrapiMedia(product.secondaryImage?.url),
  }));

  const blogs = (blogsData?.data || []).map((blog) => ({
    ...blog,
    type: "blog",
    imageUrl: getStrapiMedia(blog.featureImage?.url),
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SearchResultsPage",
    name: "Search",
    url: `${SITE_URL}/search`,
    description: "Search Geco products and blog articles.",
    mainEntity: {
      "@type": "WebSite",
      name: "Geco",
      url: SITE_URL,
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader title="Search" />
      <SearchResults products={products} blogs={blogs} />
    </>
  );
}
