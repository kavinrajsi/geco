import ProductsContent from "./ProductsContent";
import { JsonLd, breadcrumbSchema, itemListSchema } from "../schema";

export const metadata = {
  title: "Products – Tile Adhesives, Grouts, Sealants & Tapes",
  description:
    "Explore GECO's professional range of construction chemicals – tile adhesives (Tilebond), tile grouts (Jointfill, Durafill), silicone sealants (Uniseal), and masking tapes.",
  alternates: {
    canonical: "https://www.geco.in/products",
  },
  openGraph: {
    title: "GECO Products – Tile Adhesives, Grouts, Sealants & Tapes",
    description:
      "Professional-grade construction chemicals for tile fixing, grouting, sealing, and taping.",
    url: "https://www.geco.in/products",
    type: "website",
  },
};

export default function ProductsPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Products" },
  ]);

  const productList = itemListSchema(
    [
      { name: "GECO TILEBOND", url: "/products/tilebond" },
      { name: "GECO TILEBOND PLUS", url: "/products/tilebond-plus" },
      { name: "GECO TILEBOND CLASSIC", url: "/products/tilebond-classic" },
      { name: "GECO JOINTFILL EPOXY", url: "/products/jointfill-epoxy" },
      { name: "GECO JOINTFILL", url: "/products/jointfill" },
      { name: "GECO DURAFILL 12", url: "/products/durafill-12" },
      { name: "GECO DURAFILL MAX", url: "/products/durafill-max" },
      { name: "GECO MASKING TAPE", url: "/products/masking-tape" },
      { name: "UNISEAL", url: "/products/uniseal" },
    ],
    "GECO Products"
  );

  return (
    <>
      <JsonLd data={[breadcrumbs, productList]} />
      <ProductsContent />
    </>
  );
}
