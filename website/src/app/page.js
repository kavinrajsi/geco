import HeroSlider from "@/components/HeroSlider/HeroSlider";
import HomeFeaturedProducts from "@/components/HomeFeaturedProducts/HomeFeaturedProducts";
import EngineeredPrecision from "@/components/EngineeredPrecision/EngineeredPrecision";
import ExploreCategories from "@/components/ExploreCategories/ExploreCategories";
import BuildPrinciples from "@/components/BuildPrinciples/BuildPrinciples";
import WatchOurStories from "@/components/WatchOurStories/WatchOurStories";
import HomeBlogSection from "@/components/HomeBlogSection/HomeBlogSection";
import InstagramFeed from "@/components/InstagramFeed/InstagramFeed";

export const revalidate = 60;

export const metadata = {
  title: "Home | Geco",
  description: "Welcome to Geco. Building great experiences.",
  openGraph: {
    title: "Home | Geco",
    description: "Welcome to Geco. Building great experiences.",
    images: ["/og-image.png"],
  },
  twitter: {
    title: "Home | Geco",
    description: "Welcome to Geco. Building great experiences.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Geco",
      alternateName: "VNC Electrodes",
      url: "https://geco.build",
      logo: "https://geco.build/og-image.png",
      description:
        "Tile adhesives, grouts, sealants, and tapes — inspired by nature, engineered to hold.",
      foundingDate: "1983",
      parentOrganization: {
        "@type": "Organization",
        name: "VNC Group",
      },
      address: [
        {
          "@type": "PostalAddress",
          streetAddress:
            "VNC Electrodes, 3, Industrial Estate, S.Vellalapatti",
          addressLocality: "Karur",
          addressRegion: "Tamil Nadu",
          postalCode: "639004",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          streetAddress:
            "VNC Electrodes, 11/4, Janaki Avenue, MRC Nagar, Raja Annamalai Puram",
          addressLocality: "Chennai",
          addressRegion: "Tamil Nadu",
          postalCode: "600028",
          addressCountry: "IN",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "1800 599 3939",
        contactType: "customer service",
        email: "contactus@vncgroup.com",
        availableLanguage: ["English", "Tamil"],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Geco",
      url: "https://geco.build",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSlider />
      <ExploreCategories />
      <EngineeredPrecision />
      <BuildPrinciples />
      <HomeFeaturedProducts />
      <WatchOurStories
        title="Watch Our Stories"
        subtitle="Lorem ipsum dolor sit amet consectetur. Donec nisi purus urna eu vel. Egestas molestie enim est eu Donec nisi purus urna eu"
        videoSrc="/video/geco-about.mp4"
        poster="/video/geco-about-poster.png"
      />
      <InstagramFeed />
      <HomeBlogSection />
    </>
  );
}
