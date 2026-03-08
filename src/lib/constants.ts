export const SITE = {
  name: "Sai Horm Kham",
  title: "Full Stack Software Engineer",
  email: "saihormkham@proton.me",
  github: "https://github.com/saihormkham-nobody",
  linkedin: "https://www.linkedin.com/in/sai-horm-kham/",
  formEndpoint: "", // Cloudflare Worker URL — to be configured
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/#hero" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Tech Stack", href: "/#tech-stack" },
  { label: "About", href: "/#about" },
] as const;
