import HeroSlider from "@/components/HeroSlider/HeroSlider";
import HomeFeaturedProducts from "@/components/HomeFeaturedProducts/HomeFeaturedProducts";
import EngineeredPrecision from "@/components/EngineeredPrecision/EngineeredPrecision";
import ExploreCategories from "@/components/ExploreCategories/ExploreCategories";
import BuildPrinciples from "@/components/BuildPrinciples/BuildPrinciples";
import WatchOurStories from "@/components/WatchOurStories/WatchOurStories";
import HomeBlogSection from "@/components/HomeBlogSection/HomeBlogSection";
import InstagramFeed from "@/components/InstagramFeed/InstagramFeed";

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
      <HomeBlogSection />
    </>
  );
}
