import { clsx } from "clsx";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2
      className={clsx(
        "text-2xl font-bold tracking-wide text-primary uppercase md:text-3xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}
