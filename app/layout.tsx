import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Foysal Islam — Web developer",
  description:
    "Portfolio of Foysal Islam, a web developer. Precise interfaces, typography, and three-dimensional web, made without figurative imagery.",
  authors: [{ name: "Foysal Islam", url: "https://github.com/torquefoysal-art" }],
  openGraph: {
    title: "Foysal Islam — Web developer",
    description: "Precise interfaces, typography, and three-dimensional web.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foysal Islam — Web developer",
    description: "Precise interfaces, typography, and three-dimensional web.",
  },
};

export const viewport: Viewport = {
  themeColor: "#090807",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Foysal Islam",
  jobTitle: "Web Developer",
  url: "https://github.com/torquefoysal-art",
  sameAs: ["https://github.com/torquefoysal-art"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
