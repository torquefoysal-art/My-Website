import type { Metadata, Viewport } from "next";
import { Manrope, Syne } from "next/font/google";
import { CartProvider } from "@/components/store/CartProvider";
import "./globals.css";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
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
  title: {
    default: "Halyard — Race jerseys",
    template: "%s — Halyard",
  },
  description: "Halyard sells eight F1 jerseys. Carbon, red, white, and signal yellow, cut on one race block.",
  openGraph: {
    title: "Halyard — Race jerseys",
    description: "Eight F1 jerseys. Each one flies in from a corner.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07080c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
