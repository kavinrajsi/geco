import Script from "next/script";
import { Geist, Geist_Mono, Archivo, Instrument_Sans } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import RecaptchaProvider from "@/components/RecaptchaProvider/RecaptchaProvider";
import "@/styles/globals.scss";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

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
  weight: ["400", "500", "600", "900"],
  stretch: "expanded",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata = {
  metadataBase: new URL("https://geco.com"),
  title: {
    default: "Geco",
    template: "%s | Geco",
  },
  description: "Building great experiences.",
  keywords: ["geco", "products", "blogs"],
  openGraph: {
    type: "website",
    siteName: "Geco",
    title: "Geco",
    description: "Building great experiences.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Geco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Geco",
    description: "Building great experiences.",
    images: ["/og-image.jpg"],
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
      <body className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${instrumentSans.variable}`}>
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
          <Header />
          <main>{children}</main>
          <Footer />
        </RecaptchaProvider>
      </body>
    </html>
  );
}
