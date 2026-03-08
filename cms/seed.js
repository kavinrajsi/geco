const strapi = require("@strapi/strapi");

async function seed() {
  const app = await strapi.createStrapi({ appDir: process.cwd() }).load();

  console.log("Seeding sample data...");

  // Create categories
  const categories = [];
  const categoryData = [
    { name: "Technology", slug: "technology" },
    { name: "Design", slug: "design" },
    { name: "Business", slug: "business" },
  ];

  for (const cat of categoryData) {
    const existing = await app.documents("api::blog-category.blog-category").findMany({
      filters: { name: cat.name },
    });
    if (existing.length > 0) {
      categories.push(existing[0]);
      console.log(`Blog category "${cat.name}" already exists, skipping.`);
    } else {
      const created = await app.documents("api::blog-category.blog-category").create({
        data: cat,
      });
      categories.push(created);
      console.log(`Created category: ${cat.name}`);
    }
  }

  // Create tags
  const tags = [];
  const tagData = [
    { name: "JavaScript", slug: "javascript" },
    { name: "React", slug: "react" },
    { name: "Next.js", slug: "nextjs" },
    { name: "UI/UX", slug: "ui-ux" },
    { name: "Startup", slug: "startup" },
    { name: "AI", slug: "ai" },
  ];

  for (const tag of tagData) {
    const existing = await app.documents("api::blog-tag.blog-tag").findMany({
      filters: { name: tag.name },
    });
    if (existing.length > 0) {
      tags.push(existing[0]);
      console.log(`Blog tag "${tag.name}" already exists, skipping.`);
    } else {
      const created = await app.documents("api::blog-tag.blog-tag").create({
        data: tag,
      });
      tags.push(created);
      console.log(`Created tag: ${tag.name}`);
    }
  }

  // Helper to find tag/category by name
  const findTag = (name) => tags.find((t) => t.name === name);
  const findCat = (name) => categories.find((c) => c.name === name);

  // Create blog posts
  const blogPosts = [
    {
      title: "Getting Started with Next.js and Strapi",
      slug: "getting-started-with-nextjs-and-strapi",
      excerpt:
        "Learn how to build a modern web application using Next.js as the frontend and Strapi as the headless CMS backend.",
      content: [
        {
          __component: "blog.heading",
          text: "Why Next.js + Strapi?",
          level: "h2",
        },
        {
          __component: "blog.rich-text",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "The combination of Next.js and Strapi gives you the best of both worlds: a powerful React-based frontend framework with server-side rendering, and a flexible headless CMS that lets content editors manage data without touching code.",
                },
              ],
            },
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "In this guide, we will walk through setting up both tools, connecting them via API, and deploying the final result.",
                },
              ],
            },
          ],
        },
        {
          __component: "blog.heading",
          text: "Setting Up the Project",
          level: "h2",
        },
        {
          __component: "blog.rich-text",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "First, create a new directory for your project and initialize both the CMS and the website:",
                },
              ],
            },
            {
              type: "code",
              children: [
                {
                  type: "text",
                  text: "mkdir my-project\ncd my-project\nnpx create-strapi-app@latest cms --quickstart\nnpx create-next-app@latest website",
                },
              ],
            },
          ],
        },
        {
          __component: "blog.heading",
          text: "Fetching Data from Strapi",
          level: "h2",
        },
        {
          __component: "blog.rich-text",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Strapi exposes a REST API by default. You can fetch your content types using standard fetch calls or use the Strapi SDK.",
                },
              ],
            },
            {
              type: "code",
              children: [
                {
                  type: "text",
                  text: "export async function fetchStrapi(path) {\n  const res = await fetch(`http://localhost:1337/api${path}`);\n  const data = await res.json();\n  return data;\n}",
                },
              ],
            },
          ],
        },
        {
          __component: "blog.video",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          title: "Next.js + Strapi Tutorial",
        },
      ],
      blogCategories: [findCat("Technology").documentId],
      blogTags: [findTag("JavaScript").documentId, findTag("Next.js").documentId, findTag("React").documentId],
    },
    {
      title: "10 UI Design Principles Every Developer Should Know",
      slug: "10-ui-design-principles-every-developer-should-know",
      excerpt:
        "Good design is not just for designers. These 10 principles will help you create better user interfaces.",
      content: [
        {
          __component: "blog.rich-text",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "As a developer, understanding design principles can dramatically improve the quality of your work. You do not need to be a professional designer to create clean, usable interfaces.",
                },
              ],
            },
          ],
        },
        {
          __component: "blog.heading",
          text: "1. Consistency is Key",
          level: "h2",
        },
        {
          __component: "blog.rich-text",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Use consistent spacing, colors, and typography throughout your application. When elements behave predictably, users feel more confident navigating your interface.",
                },
              ],
            },
          ],
        },
        {
          __component: "blog.heading",
          text: "2. Visual Hierarchy",
          level: "h2",
        },
        {
          __component: "blog.rich-text",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Not all elements are equally important. Use size, color, and spacing to guide the user's eye to the most important parts of the page first.",
                },
              ],
            },
          ],
        },
        {
          __component: "blog.heading",
          text: "3. Whitespace Matters",
          level: "h2",
        },
        {
          __component: "blog.rich-text",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Do not be afraid of empty space. Whitespace helps group related elements, reduces cognitive load, and makes your interface feel more polished.",
                },
              ],
            },
          ],
        },
        {
          __component: "blog.table",
          content:
            "| System | Creator | Components | Open Source |\n|--------|---------|------------|-------------|\n| Material UI | Google | 60+ | Yes |\n| Ant Design | Alibaba | 70+ | Yes |\n| Chakra UI | Community | 50+ | Yes |",
        },
        {
          __component: "blog.embed",
          url: "https://codepen.io/pen/",
          title: "Interactive CSS Grid Demo",
        },
      ],
      blogCategories: [findCat("Design").documentId],
      blogTags: [findTag("UI/UX").documentId, findTag("React").documentId],
    },
    {
      title: "The Rise of AI-Powered Development Tools",
      slug: "the-rise-of-ai-powered-development-tools",
      excerpt:
        "AI is transforming how we write code. From code completion to automated testing, here is how AI tools are reshaping the developer experience.",
      content: [
        {
          __component: "blog.heading",
          text: "A New Era for Developers",
          level: "h2",
        },
        {
          __component: "blog.rich-text",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Artificial intelligence has moved from a buzzword to a practical tool in the developer's toolkit. Code assistants, automated review tools, and intelligent testing frameworks are now part of everyday workflows.",
                },
              ],
            },
          ],
        },
        {
          __component: "blog.heading",
          text: "Code Completion and Generation",
          level: "h2",
        },
        {
          __component: "blog.rich-text",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "Tools like GitHub Copilot and Claude have changed how developers write code. Instead of typing every line from scratch, developers can describe what they want and get intelligent suggestions.",
                },
              ],
            },
          ],
        },
        {
          __component: "blog.heading",
          text: "Automated Testing with AI",
          level: "h2",
        },
        {
          __component: "blog.rich-text",
          body: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  text: "AI-powered testing tools can generate test cases by analyzing your code paths, identify edge cases you might have missed, and predict which parts of your codebase are most likely to have bugs.",
                },
              ],
            },
            {
              type: "list",
              format: "unordered",
              children: [
                {
                  type: "list-item",
                  children: [{ type: "text", text: "Automatic test generation from code analysis" }],
                },
                {
                  type: "list-item",
                  children: [{ type: "text", text: "Smart coverage recommendations" }],
                },
                {
                  type: "list-item",
                  children: [{ type: "text", text: "Regression detection before deployment" }],
                },
              ],
            },
          ],
        },
        {
          __component: "blog.video",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          title: "The Future of AI in Software Development",
        },
      ],
      blogCategories: [findCat("Technology").documentId, findCat("Business").documentId],
      blogTags: [findTag("AI").documentId, findTag("JavaScript").documentId],
    },
  ];

  for (const post of blogPosts) {
    const existing = await app.documents("api::blog.blog").findMany({
      filters: { slug: post.slug },
    });

    if (existing.length > 0) {
      console.log(`Blog "${post.title}" already exists, skipping.`);
      continue;
    }

    const { blogCategories: catIds, blogTags: tagIds, ...postData } = post;

    const created = await app.documents("api::blog.blog").create({
      data: postData,
    });

    // Connect relations
    await app.documents("api::blog.blog").update({
      documentId: created.documentId,
      data: {
        blogCategories: catIds,
        blogTags: tagIds,
      },
    });

    // Publish
    await app.documents("api::blog.blog").publish({
      documentId: created.documentId,
    });

    console.log(`Created & published blog: ${post.title}`);
  }

  console.log("\nSeeding complete!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed error:", err);
  process.exit(1);
});
