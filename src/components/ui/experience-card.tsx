import type { Experience } from "@/lib/types";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="relative border-l-2 border-border pl-6 pb-10 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-primary bg-background" />

      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            {experience.role}
          </h3>
          <p className="text-primary">{experience.company}</p>
        </div>
        <p className="text-sm text-muted whitespace-nowrap">
          {experience.period}
        </p>
      </div>

      <ul className="mt-3 space-y-2">
        {experience.description.map((item) => (
          <li key={item} className="flex gap-2 text-foreground">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
