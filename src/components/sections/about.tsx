import Image from "next/image";
import { MapPin } from "lucide-react";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <Section id="about">
      <SectionHeading>About Me</SectionHeading>

      <div className="mt-10 grid items-start gap-10 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_320px]">
        <div>
          <div className="flex items-center gap-2 text-sm text-accent">
            <MapPin size={16} />
            <span>Based in Japan</span>
          </div>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground md:text-lg">
            <p>
              I am a Full-Stack Developer at One Terrace in Japan, where I lead
              an internal team building an enterprise compliance management SaaS
              platform. As the team&apos;s #1 contributor, I work across the
              full stack with Next.js, TypeScript, Laravel, and MySQL.
            </p>
            <p>
              I&apos;m currently exploring Go and backend systems architecture,
              and I&apos;m drawn to roles that involve complex technical
              challenges — whether that&apos;s scaling infrastructure, building
              developer tooling, or working on greenfield products.
            </p>
            <p>
              I am particularly focused on building reliable, maintainable
              systems at scale. My work involves AI integration, complex data
              grid interfaces, CI/CD pipeline design, and internationalized
              applications serving users in Japanese and English.
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[280px] md:mx-0 md:max-w-none">
          <Image
            src="/profile-enchance.webp"
            alt="Sai Horm Kham"
            width={640}
            height={800}
            sizes="(min-width: 1024px) 320px, 280px"
            className="w-full rounded-2xl object-cover grayscale transition-all duration-700 hover:grayscale-0"
            priority
          />
        </div>
      </div>
    </Section>
  );
}
