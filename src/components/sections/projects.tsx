import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Briefcase } from "lucide-react";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading>
        Notable <span className="text-foreground">Projects</span>
      </SectionHeading>

      <div className="mt-10 flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16 text-center">
        <Briefcase size={40} className="text-muted" />
        <p className="mt-4 text-lg text-muted">Selected projects coming soon.</p>
        <p className="mt-2 text-sm text-muted/70">
          Current work is under NDA. Personal projects are in progress.
        </p>
      </div>
    </Section>
  );
}
