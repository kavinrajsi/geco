import { Suspense } from "react";
import { SITE_URL } from "@/lib/config";
import { fetchStrapi, getStrapiMedia } from "@/lib/strapi";
import PageHeader from "@/components/PageHeader/PageHeader";
import SearchResults from "./SearchResults";

export const metadata = {
  title: "Search",
  description: "Search Geco products.",
  alternates: {
    canonical: "/search",
  },
};

export const revalidate = 60;

export default async function SearchPage() {
  const productsData = await fetchStrapi("/products", {
    "fields[0]": "name",
    "fields[1]": "slug",
    "populate[image][fields][0]": "url",
    "populate[secondaryImage][fields][0]": "url",
    "populate[productCategory][fields][0]": "name",
    "sort": "publishDate:desc",
    "pagination[pageSize]": "100",
  });

  const products = (productsData?.data || []).map((product) => ({
    ...product,
    imageUrl: getStrapiMedia(product.image?.url),
    secondaryImageUrl: getStrapiMedia(product.secondaryImage?.url),
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SearchResultsPage",
    name: "Search",
    url: `${SITE_URL}/search`,
    description: "Search Geco products.",
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
      <Suspense>
        <SearchResults products={products} />
      </Suspense>
    </>
  );
}
