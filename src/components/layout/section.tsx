import { clsx } from "clsx";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function Section({ id, children, className, dark }: SectionProps) {
  return (
    <section id={id} className={clsx("px-6 py-20 md:px-8", dark && "bg-dark-section", className)}>
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}
