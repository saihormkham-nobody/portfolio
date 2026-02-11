import { MapPin } from "lucide-react";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <Section id="about">
      <SectionHeading>About Me</SectionHeading>

      <div className="mt-4 flex items-center gap-2 text-sm text-accent">
        <MapPin size={16} />
        <span>Based in Japan</span>
      </div>

      <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-foreground md:text-lg">
        <p>
          I am a Full-Stack Developer at One Terrace in Japan, where I lead an
          internal team building an enterprise compliance management SaaS
          platform. As the team's #1 contributor, I architect and build features
          across the full stack — from Next.js and TypeScript on the frontend to
          Laravel and PostgreSQL on the backend.
        </p>
        <p>
          I&apos;m currently exploring Go and backend systems architecture, and
          I&apos;m drawn to roles that involve complex technical challenges —
          whether that&apos;s scaling infrastructure, building developer tooling,
          or working on greenfield products.
        </p>
        <p>
          I am particularly focused on building reliable, maintainable systems
          at scale. My work involves AI integration, complex data grid
          interfaces, CI/CD pipeline design, and internationalized applications
          serving users in Japanese and English.
        </p>
      </div>
    </Section>
  );
}
