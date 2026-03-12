import { fetchStrapi } from "@/lib/strapi";
import { SITE_URL } from "@/lib/config";

const BASE_URL = SITE_URL;

export default async function sitemap() {
  const staticRoutes = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/products`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/blogs`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/contact-us`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms-and-conditions`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/cookie-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/disclaimer`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  // Fetch all published blogs
  const blogsData = await fetchStrapi("/blogs", {
    "fields[0]": "slug",
    "fields[1]": "updatedAt",
    "pagination[pageSize]": "100",
    "sort": "publishedAt:desc",
  });

  const blogRoutes = (blogsData?.data || []).map((blog) => ({
    url: `${BASE_URL}/blogs/${blog.slug}`,
    lastModified: new Date(blog.updatedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Fetch all products
  const productsData = await fetchStrapi("/products", {
    "fields[0]": "slug",
    "fields[1]": "updatedAt",
    "pagination[pageSize]": "100",
    "sort": "name:asc",
  });

  const productRoutes = (productsData?.data || []).map((product) => ({
    url: `${BASE_URL}/products/${product.slug}`,
    lastModified: new Date(product.updatedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Fetch all product categories
  const categoriesData = await fetchStrapi("/product-categories", {
    "fields[0]": "slug",
    "fields[1]": "updatedAt",
    "pagination[pageSize]": "100",
  });

  const categoryRoutes = (categoriesData?.data || []).map((category) => ({
    url: `${BASE_URL}/products/category/${category.slug}`,
    lastModified: new Date(category.updatedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes, ...categoryRoutes, ...blogRoutes];
}
