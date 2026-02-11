import { GraduationCap, Trophy } from "lucide-react";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/lib/data";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading>Education</SectionHeading>

      <div className="mt-10 space-y-8">
        {education.map((edu) => (
          <div
            key={edu.institution}
            className="rounded-xl border border-border bg-card/50 p-6"
          >
            <div className="flex items-start gap-4">
              <GraduationCap size={24} className="mt-1 shrink-0 text-primary" />
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {edu.degree}
                </h3>
                <p className="text-primary">{edu.institution}</p>
                <p className="mt-1 text-sm text-muted">{edu.period}</p>
                {edu.status && (
                  <p className="mt-1 text-sm text-muted">{edu.status}</p>
                )}

                {edu.achievements && edu.achievements.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {edu.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2 text-foreground"
                      >
                        <Trophy
                          size={14}
                          className="mt-1 shrink-0 text-accent"
                        />
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
