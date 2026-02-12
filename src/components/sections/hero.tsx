import { MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";
import { JapanMapPanel } from "@/components/japan-map-panel";
import { CopyEmail } from "@/components/copy-email";
import { SocialLinks } from "@/components/social-links";

export function Hero() {
  return (
    <section className="flex w-full items-start px-6 pt-24 pb-6 md:px-8 md:pt-32 md:pb-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 md:flex-row md:items-center md:justify-between">
        <div className="relative z-10 max-w-xl">
          <p className="animate-fade-in flex items-center gap-2 text-sm text-accent">
            <MapPin size={16} />
            Based in Japan · Open to remote &amp; relocation
          </p>
          <h1 className="animate-fade-in mt-4 text-4xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            I&apos;m <span className="text-primary">{SITE.name}</span>
          </h1>
          <p className="animate-fade-in-delay-1 mt-2 text-xl text-primary/80 md:text-2xl">
            {SITE.title}
          </p>
          <p className="animate-fade-in-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-foreground">
            I have 4+ years building enterprise web applications with{" "}
            <strong className="font-semibold text-primary">Next.js</strong>,{" "}
            <strong className="font-semibold text-primary">TypeScript</strong>, and{" "}
            <strong className="font-semibold text-primary">Laravel</strong> — currently exploring{" "}
            <strong className="font-semibold text-primary">Go</strong>.
          </p>
          <div className="animate-fade-in-delay-3 mt-3 flex items-center gap-3">
            <SocialLinks />
            <CopyEmail />
          </div>
        </div>

        <JapanMapPanel />
      </div>
    </section>
  );
}
