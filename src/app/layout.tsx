import type { Metadata } from "next";
import "@fontsource-variable/josefin-sans";
import "@fontsource-variable/source-sans-3";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sai Horm Kham | Software Engineer",
  description:
    "Lead Full-Stack Developer based in Japan. Building enterprise SaaS applications with Next.js, TypeScript, Laravel, and AI integration.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "Laravel",
    "Japan",
    "React",
  ],
  authors: [{ name: "Sai Horm Kham" }],
  openGraph: {
    title: "Sai Horm Kham | Software Engineer",
    description:
      "Lead Full-Stack Developer based in Japan. Building enterprise SaaS applications.",
    siteName: "Sai Horm Kham",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Horm Kham | Software Engineer",
    description:
      "Lead Full-Stack Developer based in Japan. Building enterprise SaaS applications.",
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
        {children}
      </body>
    </html>
  );
}
