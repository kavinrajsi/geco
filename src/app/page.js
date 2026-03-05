import HomeContent from "./HomeContent";
import { JsonLd, breadcrumbSchema, itemListSchema } from "./schema";

export const metadata = {
  title: "GECO – Professional Construction Chemical Solutions | Tile Adhesives, Grouts, Sealants",
  description:
    "GECO by VNC Group delivers professional-grade tile adhesives, tile grouts, sealants, and tapes. Engineered for precision, built for professionals across India.",
  alternates: {
    canonical: "https://www.geco.in",
  },
  openGraph: {
    title: "GECO – Professional Construction Chemical Solutions",
    description:
      "Tile adhesives, grouts, sealants & tapes engineered for precision. Built for professionals by VNC Group.",
    url: "https://www.geco.in",
    type: "website",
  },
};

export default function Home() {
  const categoryList = itemListSchema(
    [
      { name: "Tile Adhesives", url: "/products" },
      { name: "Tile Grouts", url: "/products" },
      { name: "Sealants", url: "/products" },
      { name: "Tapes", url: "/products" },
    ],
    "GECO Product Categories"
  );

  return (
    <>
      <JsonLd data={[categoryList]} />
      <HomeContent />
    </>
  );
}
