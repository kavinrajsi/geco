import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

// Strapi model → cache tag mapping
const MODEL_TAG_MAP = {
  product: "strapi-products",
  "product-category": "strapi-product-categories",
  blog: "strapi-blogs",
  "blog-category": "strapi-blog-categories",
  "blog-tag": "strapi-blog-tags",
};

export async function POST(request) {
  const secret = request.headers.get("x-revalidate-secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const model = body.model;

    if (model && MODEL_TAG_MAP[model]) {
      revalidateTag(MODEL_TAG_MAP[model]);
      return NextResponse.json({ revalidated: MODEL_TAG_MAP[model] });
    }

    // Fallback: revalidate all Strapi tags
    Object.values(MODEL_TAG_MAP).forEach((tag) => revalidateTag(tag));
    return NextResponse.json({ revalidated: "all" });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
