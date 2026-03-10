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

const MAX_RETRIES = 4;
const RETRY_DELAY = 5000;

export async function fetchStrapi(path, params = {}) {
  const queryString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  const url = `${STRAPI_URL}/api${path}${queryString ? `?${queryString}` : ""}`;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    const res = await fetch(url, {
      headers: getStrapiHeaders(),
      next: { tags: [getCacheTag(path)] },
    });

    if (res.ok) {
      return await res.json();
    }

    if (res.status === 503 && attempt < MAX_RETRIES) {
      console.warn(`Strapi 503 on ${path}, retrying in ${RETRY_DELAY / 1000}s (attempt ${attempt + 1}/${MAX_RETRIES})`);
      await new Promise((r) => setTimeout(r, RETRY_DELAY));
      continue;
    }

    const body = await res.text();
    console.error(`Strapi fetch error: ${res.status} ${res.statusText}`, body);
    return null;
  }
}

export function getStrapiMedia(url) {
  if (!url) return null;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return `${STRAPI_URL}${url}`;
}
