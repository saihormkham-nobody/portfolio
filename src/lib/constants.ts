export const SITE = {
  name: "Sai Horm Kham",
  title: "Full-Stack Developer",
  email: "saihormkham@proton.me",
  github: "https://github.com/saihormkham-nobody",
  linkedin: "https://www.linkedin.com/in/sai-horm-kham/",
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
