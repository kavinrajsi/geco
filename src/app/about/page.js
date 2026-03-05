import styles from "./page.module.css";
import { JsonLd, breadcrumbSchema } from "../schema";

export const metadata = {
  title: "About Us – Geco",
  description:
    "GECO is inspired by the gecko — nature's perfect adhesive. Learn about our story, philosophy, and the VNC family of brands.",
  alternates: {
    canonical: "https://www.geco.in/about",
  },
  openGraph: {
    title: "About GECO – Inspired by Nature, Engineered to Hold",
    description:
      "GECO is inspired by the gecko — nature's perfect adhesive. Learn about our story, philosophy, and the VNC family of brands.",
    url: "https://www.geco.in/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About GECO – Inspired by Nature, Engineered to Hold",
    description:
      "GECO is inspired by the gecko — nature's perfect adhesive. Learn about our story, philosophy, and the VNC family of brands.",
  },
};

// Philosophy section – gecko photo mosaic
const philosophyImages = [
  {
    src: "https://www.figma.com/api/mcp/asset/7fca0da8-90f4-41e1-9147-4158e771b689",
    alt: "Gecko climbing",
    className: styles.mosaicTall,
  },
  {
    src: "https://www.figma.com/api/mcp/asset/144e0eda-b2eb-47de-bad3-65455c2e321f",
    alt: "Gecko close-up",
    className: styles.mosaicTopRight,
  },
  {
    src: "https://www.figma.com/api/mcp/asset/2af6b13f-23e5-48a7-8b7d-bed493c5f880",
    alt: "Gecko on leaf",
    className: styles.mosaicBottomLeft,
  },
  {
    src: "https://www.figma.com/api/mcp/asset/a29f4e56-df7c-4308-9208-176bd942758d",
    alt: "Blue gecko",
    className: styles.mosaicBottomRight,
  },
];

export default function AboutPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About" },
  ]);

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About GECO",
    description: metadata.description,
    mainEntity: { "@id": "https://www.geco.in/#organization" },
  };

  return (
    <>
    <JsonLd data={[breadcrumbs, aboutSchema]} />
    <main className={styles.main}>
      {/* ── Hero ── */}
      <div className={styles.hero}>
        <div className={styles.heroInner} />
      </div>

      {/* ── Section 1: Origin Story ── */}
      <div className={styles.textSection}>
        <div className={styles.textInner}>
          <h1 className={styles.sectionHeading}>Where Dreams Meet the Surface</h1>
          <div className={styles.bodyGroup}>
            <p className={styles.body}>
              In nature&apos;s laboratory, a small creature performs an everyday miracle. The
              gecko—weighing just 70 grams yet capable of supporting 133 kilograms—defies gravity
              with effortless grace. Climbing vertically at over one meter per second, it adheres to
              any surface through millions of microscopic setae, nature&apos;s most elegant adhesive
              system refined over millions of years.
            </p>
            <p className={styles.body}>
              This is where GECO begins: with wonder at nature&apos;s perfect engineering.
            </p>
          </div>
        </div>
      </div>

      {/* ── Section 2: Philosophy – text left, gecko mosaic right ── */}
      <div className={`${styles.splitSection} ${styles.splitSectionGreen}`}>
        <div className={styles.splitInner}>
          <div className={`${styles.splitText} ${styles.splitTextPadRight}`}>
            <h2 className={styles.sectionHeading}>Built on Nature&apos;s Blueprint</h2>
            <p className={styles.body}>
              We saw more than biological curiosity in the gecko&apos;s abilities. We saw a
              philosophy. What if the products you use to build, repair, and create could offer that
              same unwavering grip? That same adaptability? That same reliable performance across
              every surface and project?
            </p>
          </div>
          <div className={styles.splitImage}>
            <div className={styles.mosaic}>
              {philosophyImages.map((img) => (
                <div key={img.alt} className={img.className}>
                  <img src={img.src} alt={img.alt} className={styles.mosaicImg} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Section 3: Products intro ── */}
      <div className={styles.textSection}>
        <div className={styles.textInner}>
          <h2 className={styles.sectionHeading}>From Inspiration to Innovation</h2>
          <div className={styles.bodyGroup}>
            <p className={styles.body}>
              GECO products embody this ethos. Our comprehensive range—tile adhesives and grouts,
              sealants and tapes—delivers superior performance through intelligent design. Each
              product is engineered to complete your task efficiently, to hold when it matters, to
              become the invisible foundation of what you&apos;re building.
            </p>
            <p className={styles.body}>
              We&apos;re committed to continuous evolution, constantly expanding our range with
              advanced solutions inspired by the same nanostructure adhesives used in space shuttles
              and delicate handicrafts alike.
            </p>
          </div>
        </div>
      </div>

      {/* ── Section 4: Products – image left, text right ── */}
      <div className={`${styles.splitSection} ${styles.splitSectionGreen}`}>
        <div className={`${styles.splitInner} ${styles.splitInnerReverse}`}>
          <div className={styles.splitImage}>
            <div className={styles.productImages}>
              <div className={styles.productImgBack}>
                <img
                  src="https://www.figma.com/api/mcp/asset/b511b48a-1ea1-46c5-9122-854b6d09040e"
                  alt="Tile installation"
                  className={styles.productImg}
                />
              </div>
              <div className={styles.productImgFront}>
                <img
                  src="https://www.figma.com/api/mcp/asset/7bde0b32-49a6-4503-bd0b-df70b8b19d69"
                  alt="GECO Tilebond product"
                  className={styles.productImg}
                />
              </div>
            </div>
          </div>
          <div className={`${styles.splitText} ${styles.splitTextPadLeft}`}>
            <h2 className={styles.sectionHeading}>Your Dreams, Our Foundation</h2>
            <div className={styles.bodyGroup}>
              <p className={styles.body}>
                Whether you&apos;re a professional contractor or DIY enthusiast, GECO is your
                partner in creation, enabling you to bring your dreams to life. Like the gecko that
                inspired us, we believe in the power of perfect adhesion—not just to surfaces, but
                to principles. Quality. Reliability. Innovation. Performance.
              </p>
              <p className={styles.tagline}>
                GECO. Inspired by nature. Engineered to hold.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Section 5: Company (VNC) – text left, image right ── */}
      <div className={styles.splitSection}>
        <div className={styles.splitInner}>
          <div className={`${styles.splitText} ${styles.splitTextPadRight}`}>
            <h2 className={styles.sectionHeading}>
              GECO is part of the VNC family of brands.
            </h2>
            <p className={styles.body}>
              Founded in 1983, VNC&apos;s brands are now a market leader in many product categories.
              Apart from tile and stone fixing solutions, VNC operates with leading brands &amp;
              products in multiple categories: welding consumables, steel wires, fencing solutions,
              paints, coatings &amp; waterproofing solutions.
            </p>
          </div>
          <div className={styles.splitImage}>
            <div className={styles.companyImageWrap}>
              <div className={styles.companyImagePlaceholder} />
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
