import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="flex min-h-screen items-center px-6 pt-24 md:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="animate-fade-in text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          I&apos;m{" "}
          <span className="text-primary">{SITE.name}</span>
        </h1>
        <p className="animate-fade-in-delay-1 mt-2 text-xl text-primary/80 md:text-2xl">
          {SITE.title}
        </p>
        <p className="animate-fade-in-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Building enterprise web applications with modern technologies.
          Currently based in Japan.
        </p>
        <div className="animate-fade-in-delay-3 mt-10 flex flex-wrap gap-4">
          <Button href="#contact" variant="ghost" size="lg">
            GET IN TOUCH
          </Button>
          <Button href="#projects" size="lg">
            PROJECTS
          </Button>
        </div>
      </div>
    </section>
  );
}
