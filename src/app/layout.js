import { Geist, Geist_Mono, Archivo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JsonLd, organizationSchema, websiteSchema } from "./schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://www.geco.in";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GECO – Professional Construction Chemical Solutions | Tile Adhesives, Grouts, Sealants",
    template: "%s | GECO",
  },
  description:
    "GECO by VNC Group delivers professional-grade construction chemicals — tile adhesives, tile grouts, sealants, and tapes. Engineered for precision, built for professionals across India.",
  keywords: [
    "tile adhesive",
    "tile grout",
    "sealant",
    "construction chemicals",
    "GECO",
    "VNC Group",
    "tilebond",
    "jointfill",
    "epoxy grout",
    "masking tape",
    "silicone sealant",
    "tile fixing",
    "construction solutions India",
  ],
  authors: [{ name: "VNC Electrodes", url: SITE_URL }],
  creator: "VNC Electrodes",
  publisher: "GECO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "GECO",
    title: "GECO – Professional Construction Chemical Solutions",
    description:
      "Tile adhesives, grouts, sealants & tapes engineered for precision. Built for professionals by VNC Group.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "GECO – Construction Chemical Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GECO – Professional Construction Chemical Solutions",
    description:
      "Tile adhesives, grouts, sealants & tapes engineered for precision. Built for professionals by VNC Group.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Expanded:wght@900&display=swap"
          rel="stylesheet"
        />
        <JsonLd data={[organizationSchema, websiteSchema]} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
