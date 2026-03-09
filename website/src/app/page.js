import HomeFeaturedProducts from "@/components/HomeFeaturedProducts/HomeFeaturedProducts";
import BuildPrinciples from "@/components/BuildPrinciples/BuildPrinciples";
import WatchOurStories from "@/components/WatchOurStories/WatchOurStories";
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
      <BuildPrinciples />
      <WatchOurStories
        title="Watch Our Stories"
        subtitle="Lorem ipsum dolor sit amet consectetur. Donec nisi purus urna eu vel. Egestas molestie enim est eu Donec nisi purus urna eu"
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />
      <HomeBlogSection />
    </>
  );
}
