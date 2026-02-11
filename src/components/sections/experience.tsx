import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExperienceCard } from "@/components/ui/experience-card";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" dark>
      <SectionHeading>Experience</SectionHeading>

      <div className="mt-10 md:grid md:grid-cols-[180px_1fr] md:gap-8">
        {/* Continuous timeline line on desktop — spans the right column */}
        <div className="hidden md:block" />
        <div className="relative border-l-2 border-border">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.company} experience={exp} />
          ))}
        </div>
      </div>
    </Section>
  );
}
