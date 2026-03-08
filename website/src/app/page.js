import HomeFeaturedProducts from "@/components/HomeFeaturedProducts/HomeFeaturedProducts";
import HomeBlogSection from "@/components/HomeBlogSection/HomeBlogSection";

export const metadata = {
  title: "Home | Geco",
  description: "Welcome to Geco. Building great experiences.",
  openGraph: {
    title: "Home | Geco",
    description: "Welcome to Geco. Building great experiences.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    title: "Home | Geco",
    description: "Welcome to Geco. Building great experiences.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <HomeFeaturedProducts />
      <HomeBlogSection />
    </>
  );
}
