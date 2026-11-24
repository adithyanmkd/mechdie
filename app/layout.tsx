import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/site";

export const viewport: Viewport = {
  themeColor: "#261A66",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mechanddie.com"),
  title: {
    default: `${siteConfig.name} – ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "MECH & DIE",
    "Industrial Machinery",
    "Bakery Machinery",
    "Food Processing Machinery",
    "Idli Steaming Cabinet",
    "Automatic Chapathi Maker",
    "Tool & Die",
    "Iron Casting",
    "Custom Engineering Solutions",
    "Industrial Pumps",
    "Air Compressors",
    "Universal Joints",
    "Pneumatic Machines",
    "UAE",
    "India",
  ],
  authors: [{ name: "MECH & DIE" }],
  creator: "MECH & DIE",
  publisher: "MECH & DIE",
  robots: "index, follow",
  icons: {
    icon: "/logo-purple.jpg",
    apple: "/logo-purple.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mechanddie.com",
    title: `${siteConfig.name} – ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MECH & DIE – Engineering Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} – ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-dark font-sans selection:bg-brand selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
