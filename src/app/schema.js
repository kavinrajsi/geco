// Shared JSON-LD schema generators for structured data

const SITE_URL = "https://www.geco.in";
const LOGO_URL = `${SITE_URL}/images/geco-logo.png`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "GECO",
  alternateName: "VNC Electrodes",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
    width: 233,
    height: 60,
  },
  description:
    "GECO by VNC Group – Professional construction chemical solutions including tile adhesives, grouts, sealants, and tapes. Engineered for precision, built for professionals.",
  foundingDate: "1972",
  parentOrganization: {
    "@type": "Organization",
    name: "VNC Group",
    url: "https://www.vncgroup.com",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-1800-599-3939",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Tamil", "Hindi"],
      contactOption: "TollFree",
    },
    {
      "@type": "ContactPoint",
      email: "contactus@vncgroup.com",
      contactType: "customer service",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "3, Industrial Estate, S.Vellalapatti",
    addressLocality: "Karur",
    addressRegion: "Tamil Nadu",
    postalCode: "639004",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/gecoofficial",
    "https://www.instagram.com/gecoofficial",
    "https://www.linkedin.com/company/vnc-group",
    "https://www.youtube.com/@gecoofficial",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "GECO",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/products?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Manufacturer",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "VNC Electrodes (GECO)",
  image: LOGO_URL,
  url: SITE_URL,
  telephone: "+91-1800-599-3939",
  email: "contactus@vncgroup.com",
  address: [
    {
      "@type": "PostalAddress",
      name: "Registered Office",
      streetAddress: "3, Industrial Estate, S.Vellalapatti",
      addressLocality: "Karur",
      addressRegion: "Tamil Nadu",
      postalCode: "639004",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      name: "Chennai Office",
      streetAddress: "11/4, Janaki Avenue, MRC Nagar, Raja Annamalai Puram",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600028",
      addressCountry: "IN",
    },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.9601,
    longitude: 78.0766,
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
};

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url ? `${SITE_URL}${item.url}` : undefined,
    })),
  };
}

export function productSchema({ name, category, description, image, slug, features, compliance }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: image?.startsWith("http") ? image : `${SITE_URL}${image}`,
    brand: {
      "@type": "Brand",
      name: "GECO",
    },
    category,
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    url: `${SITE_URL}/products/${slug}`,
    ...(features && {
      additionalProperty: features.map((f) => ({
        "@type": "PropertyValue",
        name: f,
      })),
    }),
    ...(compliance && {
      review: {
        "@type": "Review",
        reviewBody: compliance,
        author: { "@type": "Organization", name: "Bureau of Indian Standards" },
      },
    }),
  };
}

export function articleSchema({ title, description, slug, tag, image, datePublished, dateModified }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image?.startsWith("http") ? image : `${SITE_URL}${image}`,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: `${SITE_URL}/blogs/${slug}`,
    datePublished: datePublished || "2025-01-01",
    dateModified: dateModified || datePublished || "2025-01-01",
    articleSection: tag,
    inLanguage: "en-IN",
  };
}

export function faqSchema(faqs) {
  const validFaqs = faqs.filter((f) => f.question && f.answer);
  if (validFaqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: validFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function itemListSchema(items, name) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: item.url ? `${SITE_URL}${item.url}` : undefined,
      name: item.name,
    })),
  };
}

export function JsonLd({ data }) {
  if (!data) return null;
  const schemas = Array.isArray(data) ? data : [data];
  return (
    <>
      {schemas.map((schema, i) =>
        schema ? (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ) : null
      )}
    </>
  );
}
