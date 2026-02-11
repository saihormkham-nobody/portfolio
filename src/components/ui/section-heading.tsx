import { clsx } from "clsx";

interface SectionHeadingProps {
  children: string;
  className?: string;
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2
      className={clsx(
        "text-3xl font-bold tracking-tight text-primary md:text-4xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}
