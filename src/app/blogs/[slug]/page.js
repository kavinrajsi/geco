import Link from "next/link";
import styles from "./page.module.css";
import { JsonLd, breadcrumbSchema, articleSchema } from "../../schema";

// Static blog data – replace with CMS/API data as needed
const posts = {
  "applications-of-silicone-sealant": {
    tag: "General",
    title: "Applications of Silicone Sealant",
    heroImage: "https://www.figma.com/api/mcp/asset/32408eeb-d350-41dc-8eb2-34ca1d61e99b",
    heroImageMobile: "https://www.figma.com/api/mcp/asset/ee5d1891-7bd6-4e73-a095-6b7d1cbb1c8d",
    intro: [
      "Silicone sealant can be used to seal the joints between two surfaces. Silicone sealant versions are flexible and stable under severe temperatures and may be used to glue a variety of surfaces including plastic, metal, and glass.",
      "Here are some top applications of Silicone Sealant:",
    ],
    sections: [
      {
        heading: "Sanitary",
        body: "Silicone sealant is widely utilised in sealing of sanitary gaps in bathrooms as it is water resistant. Silicone sealant forms a watertight joints around bathtubs, glass doors and sinks preventing water from seeping out and causing damage. They are attractive in the sense that they do not clash with the surface as they fit in seamlessly.",
        image: "https://www.figma.com/api/mcp/asset/b6d28ac7-d0fc-4a34-b5f0-9b4132a70962",
        imageAlt: "Sanitary application of silicone sealant",
      },
      {
        heading: "Windows & Doors",
        body: "The lifetime of your windows and doors is determined by how efficiently you have fixed and sealed them. They're applied as an adhesive or glue in the window frames, doors, glasses and building materials that are exposed to extreme weather conditions like sunlight, rainfall and winds, and also fill up gaps between the joints.",
        image: "https://www.figma.com/api/mcp/asset/c328baaf-0aa4-4573-94e6-bc8cab8ca00a",
        imageAlt: "Windows and doors sealing",
      },
      {
        heading: "Electrical",
        body: "Silicone sealants are most commonly used to seal gaps between the switch box and the walls. Silicone Sealant is created especially for enclosing junction boxes, and it can reduce the average mounting cost of the junction box.",
        image: "https://www.figma.com/api/mcp/asset/3fdf8a4c-0150-45ea-aa7c-76912585b771",
        imageAlt: "Electrical application of silicone sealant",
      },
      {
        heading: "Sealing and Bonding",
        body: "Silicone sealants are frequently used to seal window, doors, plastic, metal, glass, frames, ceramics, concrete, and bricks because they produce a water-resistant barrier that holds up well in severe weather. They're also utilized in the fields of home maintenance, commercial construction, aerospace and engineering.",
        image: "https://www.figma.com/api/mcp/asset/650da4ae-91c1-43d8-a9a7-13c4b0477498",
        imageAlt: "Sealing and bonding application",
      },
    ],
    about: {
      heading: "About Uniseal Silicone Sealant",
      body: "Silicone sealant is widely utilised in sealing of sanitary gaps in bathrooms as it is water resistant. Silicone sealant forms a watertight joints around bathtubs, glass doors and sinks preventing water from seeping out and causing damage. They are attractive in the sense that they do not clash with the surface as they fit in seamlessly.",
      image: "https://www.figma.com/api/mcp/asset/4bba4946-2bb4-4a4c-9a7b-92550313ee69",
      imageAlt: "Uniseal Silicone Sealant",
    },
    tags: ["General", "Application Guides"],
    prev: { label: "I Couldn't Help But Splurge On These Epic Fall Finds", href: "#" },
    next: { label: "My Mani Photo Dump To Save To Your Nail Inspo Folder", href: "#" },
  },
};

const fallbackPost = {
  tag: "General",
  title: "Blog Post",
  heroImage: "https://www.figma.com/api/mcp/asset/32408eeb-d350-41dc-8eb2-34ca1d61e99b",
  heroImageMobile: "https://www.figma.com/api/mcp/asset/ee5d1891-7bd6-4e73-a095-6b7d1cbb1c8d",
  intro: ["Content coming soon."],
  sections: [],
  about: null,
  tags: [],
  prev: null,
  next: null,
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts[slug] || fallbackPost;
  const description = post.intro?.[0] || "Read this article from GECO on construction chemicals and tiling techniques.";
  return {
    title: `${post.title} – GECO Blog`,
    description,
    alternates: {
      canonical: `https://www.geco.in/blogs/${slug}`,
    },
    openGraph: {
      title: post.title,
      description,
      url: `https://www.geco.in/blogs/${slug}`,
      type: "article",
      images: post.heroImage ? [{ url: post.heroImage }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
    },
  };
}

function FacebookShareIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 10.5H13L13.75 7.5H11V6C11 5.17 11 4.5 12.5 4.5H13.75V2.1C13.5 2.07 12.6 2 11.6 2C9.57 2 8.25 3.24 8.25 5.55V7.5H6V10.5H8.25V18H11V10.5Z" fill="white"/>
    </svg>
  );
}

function TwitterShareIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3L8.5 10.5M3 3H6L10 8M3 3H17L11.5 10.5M17 3L11.5 10.5M8.5 10.5L6 17H9L10 14.5M8.5 10.5L11.5 10.5M11.5 10.5L14 17H17L14.5 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function WhatsAppShareIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 2C5.58 2 2 5.58 2 10C2 11.39 2.38 12.69 3.04 13.8L2 18L6.32 16.97C7.39 17.57 8.65 17.92 10 17.92C14.42 17.92 18 14.34 18 9.92C18 5.58 14.42 2 10 2ZM13.96 13.12C13.77 13.62 12.99 14.05 12.49 14.11C12.04 14.17 11.47 14.19 10.84 13.98C10.45 13.85 9.94 13.68 9.28 13.4C6.96 12.38 5.49 10.02 5.37 9.86C5.25 9.7 4.42 8.6 4.42 7.46C4.42 6.32 5.01 5.76 5.23 5.53C5.45 5.3 5.71 5.24 5.87 5.24C6.03 5.24 6.19 5.24 6.33 5.25C6.48 5.26 6.69 5.19 6.89 5.65C7.09 6.11 7.57 7.25 7.63 7.37C7.69 7.49 7.73 7.63 7.65 7.79C7.57 7.95 7.53 8.05 7.41 8.19C7.29 8.33 7.16 8.5 7.05 8.61C6.93 8.73 6.81 8.86 6.95 9.1C7.09 9.34 7.57 10.12 8.27 10.74C9.17 11.54 9.92 11.79 10.16 11.91C10.4 12.03 10.54 12.01 10.68 11.85C10.82 11.69 11.28 11.15 11.44 10.91C11.6 10.67 11.76 10.71 11.98 10.79C12.2 10.87 13.34 11.43 13.58 11.55C13.82 11.67 13.98 11.73 14.04 11.83C14.1 11.95 14.1 12.45 13.96 13.12Z" fill="#1f1f1f"/>
    </svg>
  );
}

function LinkedInShareIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 7H2V18H4.5V7Z" fill="#1f1f1f"/>
      <circle cx="3.25" cy="3.75" r="1.75" fill="#1f1f1f"/>
      <path d="M11.5 7H9V18H11.5V12C11.5 10.62 12.38 9.5 13.75 9.5C15.12 9.5 15.5 10.5 15.5 12V18H18V11.5C18 9 16.5 7 13.75 7C12.5 7 11.5 7.5 11.5 7.5V7Z" fill="#1f1f1f"/>
    </svg>
  );
}

function EmailShareIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="16" height="13" rx="2" stroke="#1f1f1f" strokeWidth="1.5"/>
      <path d="M2 7L10 12L18 7" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = posts[slug] || fallbackPost;

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blogs", url: "/blogs" },
    { name: post.title },
  ]);

  const article = articleSchema({
    title: post.title,
    description: post.intro?.[0] || "",
    slug: slug,
    tag: post.tag,
    image: post.heroImage,
    datePublished: "2025-01-15",
  });

  return (
    <>
    <JsonLd data={[breadcrumbs, article]} />
    <main className={styles.main}>
      {/* Hero image */}
      <div className={styles.hero}>
        <img
          src={post.heroImage}
          alt={post.title}
          className={`${styles.heroImg} ${styles.heroImgDesktop}`}
        />
        <img
          src={post.heroImageMobile}
          alt={post.title}
          className={`${styles.heroImg} ${styles.heroImgMobile}`}
        />
      </div>

      {/* Article content */}
      <article className={styles.article}>
        {/* Header */}
        <header className={styles.postHeader}>
          <span className={styles.tag}>{post.tag}</span>
          <h1 className={styles.title}>{post.title}</h1>
        </header>

        {/* Intro */}
        <div className={styles.intro}>
          {post.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Sections */}
        {post.sections.map((section) => (
          <div key={section.heading} className={styles.section}>
            <div className={styles.sectionText}>
              <h2 className={styles.sectionHeading}>{section.heading}</h2>
              <p className={styles.sectionBody}>{section.body}</p>
            </div>
            <div className={styles.sectionImageWrap}>
              <img src={section.image} alt={section.imageAlt} className={styles.sectionImage} />
            </div>
          </div>
        ))}

        {/* About section */}
        {post.about && (
          <div className={styles.aboutSection}>
            <div className={styles.sectionText}>
              <h2 className={styles.sectionHeading}>{post.about.heading}</h2>
              <p className={styles.sectionBody}>{post.about.body}</p>
            </div>
            <div className={styles.aboutImageWrap}>
              <img src={post.about.image} alt={post.about.imageAlt} className={styles.aboutImage} />
            </div>
          </div>
        )}

        {/* Tags + Share */}
        <div className={styles.metaRow}>
          <div className={styles.tagsRow}>
            <span className={styles.tagLabel}>Tag:</span>
            {post.tags.map((t) => (
              <span key={t} className={styles.tagPill}>{t}</span>
            ))}
          </div>
          <div className={styles.shareRow}>
            <span className={styles.shareLabel}>Share :</span>
            <div className={styles.shareIcons}>
              <button className={`${styles.shareBtn} ${styles.shareBtnFilled} ${styles.shareBtnBlue}`} aria-label="Share on Facebook">
                <FacebookShareIcon />
              </button>
              <button className={`${styles.shareBtn} ${styles.shareBtnFilled} ${styles.shareBtnDark}`} aria-label="Share on Twitter">
                <TwitterShareIcon />
              </button>
              <button className={styles.shareBtn} aria-label="Share on WhatsApp">
                <WhatsAppShareIcon />
              </button>
              <button className={styles.shareBtn} aria-label="Share on LinkedIn">
                <LinkedInShareIcon />
              </button>
              <button className={styles.shareBtn} aria-label="Share via Email">
                <EmailShareIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Prev / Next */}
        {(post.prev || post.next) && (
          <div className={styles.prevNext}>
            <div className={styles.prevNextItem}>
              {post.prev && (
                <Link href={post.prev.href} className={styles.prevNextLink}>
                  <span className={styles.prevNextLabel}>Previous</span>
                  <span className={styles.prevNextTitle}>{post.prev.label}</span>
                </Link>
              )}
            </div>
            <div className={styles.prevNextDivider} />
            <div className={`${styles.prevNextItem} ${styles.prevNextRight}`}>
              {post.next && (
                <Link href={post.next.href} className={`${styles.prevNextLink} ${styles.prevNextLinkRight}`}>
                  <span className={styles.prevNextLabel}>Next</span>
                  <span className={styles.prevNextTitle}>{post.next.label}</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </article>
    </main>
    </>
  );
}
