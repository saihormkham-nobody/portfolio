import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechCard } from "@/components/ui/tech-card";
import { techStack } from "@/lib/data";

export function TechStack() {
  return (
    <Section id="tech-stack">
      <SectionHeading>Tech Stack</SectionHeading>

      <div className="mt-10 space-y-8">
        {techStack.map((category) => (
          <div key={category.category}>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-muted uppercase">
              {category.category}
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {category.items.map((item) => (
                <TechCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
