import type { Metadata } from "next";
import "@fontsource-variable/josefin-sans";
import "@fontsource-variable/source-sans-3";
import { Geist_Mono } from "next/font/google";
import { ScrollToTop } from "@/components/scroll-to-top";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sai Horm Kham | Full-Stack Developer",
  description:
    "Full-Stack Developer based in Japan. Building web applications that scale — from frontend to infrastructure.",
  keywords: ["Full-Stack Developer", "Next.js", "TypeScript", "Laravel", "Go", "Japan", "React"],
  authors: [{ name: "Sai Horm Kham" }],
  openGraph: {
    title: "Sai Horm Kham | Full-Stack Developer",
    description:
      "Full-Stack Developer based in Japan. Building web applications that scale — from frontend to infrastructure.",
    siteName: "Sai Horm Kham",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Horm Kham | Full-Stack Developer",
    description:
      "Full-Stack Developer based in Japan. Building web applications that scale — from frontend to infrastructure.",
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
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
