export const SITE = {
  name: "Sai Horm Kham",
  title: "Software Engineer",
  email: "saihormkham@proton.me",
  github: "https://github.com/saihormkham",
  linkedin: "https://linkedin.com/in/saihormkham",
  formEndpoint: "", // Cloudflare Worker URL — to be configured
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;
