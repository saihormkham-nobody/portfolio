export const SITE = {
  name: "Sai Horm Kham",
  title: "Full Stack Software Engineer",
  url: "https://saihormkham.dev",
  email: "saihormkham@proton.me",
  github: "https://github.com/saihormkham-nobody",
  linkedin: "https://www.linkedin.com/in/sai-horm-kham/",
  formEndpoint: "", // TODO: set up Cloudflare Worker for contact form
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/#hero" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Tech Stack", href: "/#tech-stack" },
  { label: "About", href: "/#about" },
] as const;
