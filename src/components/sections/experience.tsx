import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExperienceCard } from "@/components/ui/experience-card";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" dark>
      <SectionHeading>Experience</SectionHeading>

      <div className="mt-10">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.company} experience={exp} />
        ))}
      </div>
    </Section>
  );
}
