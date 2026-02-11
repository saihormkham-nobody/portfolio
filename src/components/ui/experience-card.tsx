import type { Experience } from "@/lib/types";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="relative pb-10 pl-6 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-primary bg-background" />

      {/* Date badge — inline on mobile, absolute left on desktop */}
      <div className="mb-2 md:absolute md:-left-[220px] md:mb-0 md:w-[180px] md:pt-0 md:text-right">
        <span className="text-sm text-muted md:inline-block md:rounded-full md:bg-primary/10 md:px-3 md:py-1 md:text-xs md:font-medium md:text-primary">
          {experience.period}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-foreground">{experience.role}</h3>
      <p className="text-primary">{experience.company}</p>

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
