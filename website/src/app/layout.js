import Script from "next/script";
import { Archivo } from "next/font/google";
import localFont from "next/font/local";
import HeaderWrapper from "@/components/Header/HeaderWrapper";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import RecaptchaProvider from "@/components/RecaptchaProvider/RecaptchaProvider";
import { SITE_URL } from "@/lib/config";
import "@/styles/globals.scss";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "900"],
  stretch: "expanded",
});

const archivoExpanded = localFont({
  src: "../../public/font/ArchivoExpanded-Black.woff2",
  variable: "--font-archivo-expanded",
  weight: "900",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Geco",
    template: "%s | Geco",
  },
  description:
    "Geco — high-performance tile adhesives, grouts, sealants, and tapes by VNC Group. Inspired by the gecko's natural adhesion, engineered for superior bonding and durability.",
  keywords: [
    "geco",
    "tile adhesive",
    "tile grout",
    "sealant",
    "masking tape",
    "VNC Group",
    "building materials",
    "tile fixing",
    "construction adhesive",
  ],
  openGraph: {
    type: "website",
    siteName: "Geco",
    title: "Geco",
    description:
      "Geco — high-performance tile adhesives, grouts, sealants, and tapes by VNC Group. Inspired by the gecko's natural adhesion, engineered for superior bonding and durability.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Geco — Inspired By Nature. Engineered To Hold.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Geco",
    description:
      "Geco — high-performance tile adhesives, grouts, sealants, and tapes by VNC Group. Inspired by the gecko's natural adhesion, engineered for superior bonding and durability.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {GTM_ID && (
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      )}
      <body className={`${archivo.variable} ${archivoExpanded.variable}`}>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <RecaptchaProvider>
          <ScrollToTop />
          <HeaderWrapper />
          <main>{children}</main>
          <Footer />
        </RecaptchaProvider>
      </body>
    </html>
  );
}
