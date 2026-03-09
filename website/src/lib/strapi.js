const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

function getStrapiHeaders() {
  const headers = {
    "Content-Type": "application/json",
  };

  if (STRAPI_TOKEN) {
    headers.Authorization = `Bearer ${STRAPI_TOKEN}`;
  }

  return headers;
}

// Derive a cache tag from the API path, e.g. "/products" → "strapi-products"
function getCacheTag(path) {
  const segment = path.split("/").filter(Boolean)[0] || "strapi";
  return `strapi-${segment}`;
}

export async function fetchStrapi(path, params = {}) {
  const queryString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  const url = `${STRAPI_URL}/api${path}${queryString ? `?${queryString}` : ""}`;

  const res = await fetch(url, {
    headers: getStrapiHeaders(),
    next: { tags: [getCacheTag(path)] },
  });

  if (!res.ok) {
    const body = await res.text();
    console.error(`Strapi fetch error: ${res.status} ${res.statusText}`, body);
    return null;
  }

  const json = await res.json();
  return json;
}

export function getStrapiMedia(url) {
  if (!url) return null;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${STRAPI_URL}${url}`;
}
