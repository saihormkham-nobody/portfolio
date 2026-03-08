// import Image from "next/image";
import { GraduationCap, Languages, Trophy } from "lucide-react";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { education, languages } from "@/lib/data";

export function About() {
  return (
    <Section id="about">
      <SectionHeading>
        About <span className="text-foreground">Me</span>
      </SectionHeading>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        {/* Personal note */}
        <div className="space-y-4 text-base leading-relaxed text-foreground md:text-lg">
          <p>
            I am a Full-Stack Developer at One Terrace in Japan, where I lead an internal team
            building an enterprise compliance management SaaS platform. As the team&apos;s #1
            contributor, I work across the full stack with Next.js, TypeScript, Laravel, and MySQL.
          </p>
          <p>
            I&apos;m currently exploring Go and backend systems architecture, and I&apos;m drawn to
            roles that involve complex technical challenges — whether that&apos;s scaling
            infrastructure, building developer tooling, or working on greenfield products.
          </p>
          <p>
            I am particularly focused on building reliable, maintainable systems at scale. My work
            involves AI integration, complex data grid interfaces, CI/CD pipeline design, and
            internationalized applications serving users in Japanese and English.
          </p>
        </div>

        {/* Education & Languages */}
        <div className="space-y-8">
          {education.map((edu) => (
            <div key={edu.institution}>
              <div className="flex items-start gap-4">
                <GraduationCap size={24} className="mt-1 shrink-0 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-primary">{edu.institution}</p>
                  <p className="mt-1 text-sm text-muted">{edu.period}</p>
                  {edu.status && <p className="mt-1 text-sm text-muted">{edu.status}</p>}

                  {edu.achievements && edu.achievements.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {edu.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-2 text-foreground">
                          <Trophy size={14} className="mt-1 shrink-0 text-accent" />
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}

          <div className="flex items-start gap-4">
            <Languages size={24} className="mt-1 shrink-0 text-primary" />
            <div>
              <h3 className="text-lg font-semibold text-foreground">Languages</h3>
              <ul className="mt-2 space-y-1">
                {languages.map((lang) => (
                  <li key={lang.name} className="text-sm text-foreground">
                    <span className="text-primary">{lang.name}</span>{" "}
                    <span className="text-muted">— {lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Profile photo — commented out for now
      <div className="mx-auto w-full max-w-[480px] md:mx-0 md:max-w-none">
        <Image
          src="/assets/profile-enchance.png"
          alt="Sai Horm Kham"
          width={640}
          height={800}
          sizes="(min-width: 1024px) 320px, 280px"
          className="w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
          priority
        />
      </div>
      */}
    </Section>
  );
}
