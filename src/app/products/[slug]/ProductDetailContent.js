"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

/* ---- SVG Icons ---- */

function ChevronRight({ size = 12, color = "#a0a0a0" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 2.5L7.5 6L4.5 9.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronDown({ size = 24, color = "#1f1f1f" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9L12 15L18 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowLeft() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18L9 12L15 6" stroke="#6b727a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 6L15 12L9 18" stroke="#6b727a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CarouselArrowLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18L9 12L15 6" stroke="#1f1f1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CarouselArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 6L15 12L9 18" stroke="#1f1f1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---- Feature Icons ---- */
function SelfCuringIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="#1f1f1f" strokeWidth="1.5" />
      <path d="M12 7V12L15 15" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BondingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DurabilityIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WaterResistantIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SlipResistantIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="7" height="7" rx="1" stroke="#1f1f1f" strokeWidth="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1" stroke="#1f1f1f" strokeWidth="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1" stroke="#1f1f1f" strokeWidth="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1" stroke="#1f1f1f" strokeWidth="1.5" />
    </svg>
  );
}

function AestheticsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="#1f1f1f" strokeWidth="1.5" />
      <path d="M12 3a9 9 0 0 1 0 18" fill="#1f1f1f" fillOpacity="0.15" />
      <circle cx="12" cy="12" r="3" stroke="#1f1f1f" strokeWidth="1.5" />
    </svg>
  );
}

function SpeedIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShrinkageIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 14h6v6" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 10h-6V4" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 10l7-7" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 21l7-7" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CoverageIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#1f1f1f" strokeWidth="1.5" />
      <path d="M3 9h18M9 3v18" stroke="#1f1f1f" strokeWidth="1.5" />
    </svg>
  );
}

/* ---- Accordion Component ---- */
function Accordion({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={styles.accordion}>
      <button className={styles.accordionHeader} onClick={() => setOpen(!open)}>
        <span className={styles.accordionTitle}>{title}</span>
        <span className={`${styles.accordionIcon} ${open ? styles.accordionIconOpen : ""}`}>
          <ChevronDown />
        </span>
      </button>
      {open && <div className={styles.accordionContent}>{children}</div>}
    </div>
  );
}

/* ---- FAQ Item Component ---- */
function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button className={styles.faqQuestion} onClick={() => setOpen(!open)}>
        <span className={styles.faqQuestionText}>{question}</span>
        <span className={`${styles.faqChevron} ${open ? styles.faqChevronOpen : ""}`}>
          <ChevronDown />
        </span>
      </button>
      {open && <p className={styles.faqAnswer}>{answer}</p>}
    </div>
  );
}

/* ---- Product Data (hardcoded for now) ---- */
const product = {
  category: "Tile Adhesives",
  name: "GECO TILEBOND CLASSIC",
  subtitle: "Highly Polymer Modified Tile & Stone Adhesive",
  description:
    "GECO TILEBOND CLASSIC is a highly polymer-modified white cement-based adhesive designed for fixing tiles and natural stones. Its advanced polymers deliver superior adhesion, and its self-curing property doesn\u2019t leave any air pockets resulting in stronger anchoring of tiles and stones. It adds to the aesthetic look of light-coloured tiles and stones.",
  image: "/images/products/tilebond-classic.png",
  features: [
    { icon: <SelfCuringIcon />, text: "Self-curing" },
    { icon: <BondingIcon />, text: "Strong Bonding Strength" },
    { icon: <DurabilityIcon />, text: "Enhanced Durability" },
    { icon: <WaterResistantIcon />, text: "Water Resistant" },
    { icon: <SlipResistantIcon />, text: "Excellent Slip Resistant" },
    { icon: <AestheticsIcon />, text: "Enhanced Aesthetics" },
    { icon: <SpeedIcon />, text: "Faster Installation" },
    { icon: <ShrinkageIcon />, text: "Reduced Shrinkage" },
    { icon: <CoverageIcon />, text: "Better Coverage & Efficiency" },
  ],
  applicationIntro: "GECO TILEBOND CLASSIC can be used:",
  applicationPoints: [
    "for fixing all types of light-coloured ceramic, vitrified, glass mosaic and stone tiles up to 600 x 600 mm in size and natural stones",
    "on interior floors and walls, exterior floors, and in wet and submerged areas",
    "for tile-on-tile application",
  ],
  compliance:
    "GECO TILEBOND CLASSIC complies with IS 15477:2019 \u2013 Type 2T Adhesive standards.",
  steps: [
    {
      label: "STEP 1",
      title: "Prepare the Surface",
      desc: "Ensure the substrate is properly cured, clean, dry, level, and free from dust or loose particles. Repair cracks if required.",
      image: "/images/products/step-1.png",
    },
    {
      label: "STEP 2",
      title: "Mix the Adhesive",
      desc: "Add TILEBOND to water as per the mixing ratio & mix until a workable paste is obtained. Allow the paste to stand for 2 mins. for it to mature.",
      image: "/images/products/step-2.png",
    },
    {
      label: "STEP 3",
      title: "Apply the Adhesive",
      desc: "Spread the adhesive on the surface using a notched trowel to create uniform grooves. Apply only as much area as you can tile within 10\u201315 minutes.",
      image: "/images/products/step-3.png",
    },
    {
      label: "STEP 4",
      title: "Fix the Tiles",
      desc: "Press the tiles firmly into the adhesive bed, adjust alignment, and lightly tap with a rubber mallet. Leave to set before grouting.",
      image: "/images/products/step-4.png",
    },
  ],
  faqs: [
    {
      question: "What makes GECO Tilebond better than traditional cement mortar?",
      answer:
        "Unlike traditional cement mortar, GECO TILEBOND CLASSIC uses advanced polymer modification that delivers superior adhesion with no air pockets. It is self-curing, requires less water, reduces shrinkage, and can be applied in a thin bed — resulting in stronger tile anchoring, faster installation, and less material waste overall.",
    },
    {
      question: "Do tile adhesives contribute to long-lasting tile installations?",
      answer:
        "Absolutely. Their flexible, high-strength bonding resists movement, temperature changes, and moisture-related issues\u2014greatly improving the durability of tiled surfaces.",
    },
    {
      question: "What makes TILEBOND CLASSIC suitable for light-coloured tiles?",
      answer:
        "TILEBOND CLASSIC is formulated with a white cement base. This prevents any dark or grey bleed-through that standard grey-cement adhesives can cause beneath translucent or light-coloured tiles, preserving their natural tone and enhancing the final aesthetic finish.",
    },
    {
      question: "Can TILEBOND CLASSIC be used in wet and submerged areas?",
      answer:
        "Yes. TILEBOND CLASSIC is water resistant and suitable for use in wet areas such as bathrooms, kitchens, swimming pool surrounds, and other submerged or high-humidity environments, making it a versatile choice for both interior and exterior applications.",
    },
    {
      question: "What kinds of tiles can be fixed using TILEBOND CLASSIC?",
      answer:
        "TILEBOND CLASSIC is suitable for fixing all types of light-coloured ceramic, vitrified, glass mosaic, and stone tiles up to 600 × 600 mm in size, as well as natural stones. It also supports tile-on-tile application, making it ideal for renovation projects.",
    },
    {
      question: "Does TILEBOND CLASSIC offer strong durability?",
      answer:
        "Yes. TILEBOND CLASSIC is engineered for enhanced durability. Its polymer-modified formula reduces shrinkage, improves resistance to water and thermal movement, and complies with IS 15477:2019 – Type 2T Adhesive standards, ensuring long-term performance in both residential and commercial projects.",
    },
  ],
  relatedProducts: [
    {
      category: "Tile Adhesives",
      name: "GECO TILEBOND",
      image: "/images/products/tilebond.png",
      slug: "tilebond",
    },
    {
      category: "Tile Adhesives",
      name: "GECO TILEBOND PLUS",
      image: "/images/products/tilebond-plus.png",
      slug: "tilebond-plus",
    },
    {
      category: "Tile Adhesives",
      name: "GECO TILEBOND CLASSIC",
      image: "/images/products/tilebond-classic.png",
      slug: "tilebond-classic",
    },
    {
      category: "Tile Grouts",
      name: "GECO JOINTFILL EPOXY",
      image: "/images/products/jointfill-epoxy.png",
      slug: "jointfill-epoxy",
    },
  ],
};

export default function ProductDetailContent() {
  return (
    <main>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className={styles.breadcrumbLinks}>
          <span className={styles.breadcrumbText}>
            <Link href="/">Homepage</Link>
          </span>
          <span className={styles.breadcrumbSep}>
            <ChevronRight />
          </span>
          <span className={styles.breadcrumbText}>
            <Link href="/products">Products</Link>
          </span>
          <span className={styles.breadcrumbSep}>
            <ChevronRight />
          </span>
          <span className={styles.breadcrumbText}>
            <Link href="/products">{product.category}</Link>
          </span>
          <span className={styles.breadcrumbSep}>
            <ChevronRight />
          </span>
          <span className={styles.breadcrumbCurrent}>{product.name}</span>
        </div>
        <div className={styles.prevNext}>
          <button className={styles.prevNextBtn}>
            <ArrowLeft />
            Previous Product
          </button>
          <div className={styles.prevNextDivider} />
          <button className={styles.prevNextBtn}>
            Next Product
            <ArrowRight />
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className={styles.detailsSection}>
        <div className={styles.productImageWrap}>
          <div className={styles.productImage}>
            <img src={product.image} alt={product.name} />
          </div>
        </div>
        <div className={styles.productInfo}>
          {/* Heading */}
          <div>
            <p className={styles.category}>{product.category}</p>
            <h1 className={styles.productName}>{product.name}</h1>
          </div>
          <div>
            <p className={styles.subtitle}>{product.subtitle}</p>
          </div>
          <p className={styles.description}>{product.description}</p>

          {/* Brochure */}
          <div className={styles.brochureWrap}>
            <a href="#" className={styles.brochureBtn}>
              BROCHURE
            </a>
          </div>

          {/* Features */}
          <Accordion title="Features" defaultOpen={true}>
            {product.features.map((f, i) => (
              <div key={i} className={styles.featureItem}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <span className={styles.featureText}>{f.text}</span>
              </div>
            ))}
          </Accordion>

          {/* Areas of Application */}
          <Accordion title="Areas of application" defaultOpen={true}>
            <p className={styles.applicationIntro}>{product.applicationIntro}</p>
            <ul className={styles.applicationList}>
              {product.applicationPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </Accordion>

          {/* Standard Compliance */}
          <Accordion title="Standard Compliance" defaultOpen={true}>
            <p className={styles.complianceText}>{product.compliance}</p>
          </Accordion>
        </div>
      </div>

      {/* How to Use */}
      <section className={styles.howToUse}>
        <h2 className={styles.sectionTitle}>How to use?</h2>
        <div className={styles.stepsGrid}>
          {product.steps.map((step, i) => (
            <div key={i} className={styles.stepCard}>
              <div className={styles.stepImageWrap}>
                <img src={step.image} alt={step.title} />
              </div>
              <div>
                <p className={styles.stepLabel}>{step.label}</p>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Watch Our Stories */}
      <section className={styles.watchStories}>
        <h2 className={styles.watchStoriesHeading}>WATCH OUR STORIES</h2>
        <p className={styles.watchStoriesSubtext}>
          Lorem ipsum dolor sit amet consectetur. Donec nisi purus urna eu vel. Egestas molestie enim est eu Donec nisi purus urna eu
        </p>
        <div className={styles.videoPlaceholder} />
      </section>

      {/* Advantage Banner */}
      <div className={styles.advantageBanner}>
        <div className={styles.advantageImage} />
        <div className={styles.advantageContent}>
          <div>
            <h2 className={styles.advantageTitle}>
              The Tile Adhesive Advantage: Superior Bonding, Speed, and Flexibility
            </h2>
            <p className={styles.advantageDesc}>
              Tile adhesives are transforming modern construction by replacing traditional sand-cement mortar with a faster, stronger, and more reliable solution. They allow thin-bed application, quicker drying, and reduced labour, completing projects faster with consistent quality. Lighter, cleaner, and eco-friendly, tile adhesives minimise waste and enhance durability.
            </p>
          </div>
          <a href="#" className={styles.advantageBtn}>
            Learn more
          </a>
        </div>
      </div>

      {/* FAQs */}
      <section className={styles.faqSection}>
        <h2 className={styles.faqTitle}>FAQs</h2>
        <div className={styles.faqList}>
          {product.faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* Related Products */}
      <section className={styles.relatedSection}>
        <h2 className={styles.relatedTitle}>Related products</h2>
        <div className={styles.relatedGrid}>
          {product.relatedProducts.map((rp, i) => (
            <Link key={i} href={`/products/${rp.slug}`} className={styles.relatedCard}>
              <div className={styles.relatedCardImage}>
                <img src={rp.image} alt={rp.name} />
              </div>
              <div>
                <p className={styles.relatedCardCategory}>{rp.category}</p>
                <p className={styles.relatedCardName}>{rp.name}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.carouselNav}>
          <button className={styles.carouselBtn} aria-label="Previous">
            <CarouselArrowLeft />
          </button>
          <button className={styles.carouselBtn} aria-label="Next">
            <CarouselArrowRight />
          </button>
        </div>
      </section>
    </main>
  );
}
