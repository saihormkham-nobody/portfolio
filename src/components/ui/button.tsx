import { clsx } from "clsx";
import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-background font-semibold hover:brightness-110",
  secondary: "bg-card text-foreground hover:bg-border",
  ghost:
    "bg-transparent border border-foreground/30 text-foreground font-semibold hover:border-primary hover:text-primary",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm tracking-wider",
  md: "px-7 py-3 text-sm tracking-wider",
  lg: "px-9 py-3.5 text-sm tracking-wider",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer",
    "active:scale-[0.98]",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
