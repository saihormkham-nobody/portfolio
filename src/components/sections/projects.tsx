import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";

const PROJECTS = [
  {
    title: "May Koe Koe",
    description:
      "A personal space online with custom cursor previews, voice acting demos, and scroll animations. Built from scratch for my fiancée.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Jotai", "WaveSurfer.js"],
    href: "/projects/maykoekoe",
    live: "https://maykoekoe.com",
    thumbnail: "/case-studies/maykoekoe/thumbnail.webp",
  },
] as const;

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading>
        Notable <span className="text-foreground">Projects</span>
      </SectionHeading>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {PROJECTS.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(124,202,213,0.15)]"
          >
            <div className="relative overflow-hidden">
              {/* overlay */}
              <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-t from-black/30 to-transparent opacity-30 transition-opacity duration-300 group-hover:opacity-100" />
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={400}
                height={225}
                unoptimized
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
