import type { ReactNode } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function CaseStudyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 pt-28 pb-20 md:px-8">
        <article className="prose prose-lg max-w-none prose-invert prose-headings:font-heading prose-headings:tracking-wide prose-h1:text-4xl prose-h1:md:text-5xl prose-h2:text-2xl prose-h2:text-primary prose-a:text-primary prose-a:underline-offset-4 prose-strong:text-foreground prose-code:rounded prose-code:bg-card prose-code:px-1.5 prose-code:py-0.5 prose-code:text-primary prose-code:before:content-none prose-code:after:content-none prose-img:rounded-xl prose-img:border prose-img:border-border">
          {children}
        </article>
        <Link
          href="/#projects"
          className="mt-8 inline-block text-primary underline-offset-4 hover:underline"
        >
          ← Back to Projects
        </Link>
      </main>
      <Footer />
    </>
  );
}
