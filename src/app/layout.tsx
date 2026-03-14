import type { Metadata } from "next";
import "@fontsource-variable/josefin-sans";
import "@fontsource-variable/source-sans-3";
import { Geist_Mono } from "next/font/google";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SITE } from "@/lib/constants";
import { JsonLd } from "@/components/json-ld";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Sai Horm Kham — Full-Stack Developer in Japan. Building scalable web apps with Next.js, TypeScript, Laravel, and Go. From frontend to infrastructure.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Sai Horm Kham | Full-Stack Developer",
  description,
  keywords: ["Full-Stack Developer", "Next.js", "TypeScript", "Laravel", "Go", "Japan", "React"],
  authors: [{ name: SITE.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sai Horm Kham | Full-Stack Developer",
    description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sai Horm Kham | Full-Stack Developer",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>
        <JsonLd />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
