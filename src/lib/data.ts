import type { Education, Experience, TechCategory } from "./types";

export const experiences: Experience[] = [
  {
    company: "One Terrace (X-Regulation Inc.)",
    role: "Lead Full-Stack Developer",
    period: "Apr 2023 – Present",
    description: [
      "Lead development of a multi-tenant compliance management SaaS platform as the #1 contributor across a 10+ person team",
      "Architect the Next.js frontend with TypeScript, implementing type-safe API contracts, Jotai state management, and React Query for server-state caching",
      "Integrate Azure OpenAI services for AI-powered compliance evaluation and automated finding generation",
      "Design and maintain CI/CD pipelines with GitHub Actions, Playwright E2E testing, and Docker-based deployments",
      "Implement internationalization supporting Japanese, English, and Chinese",
    ],
  },
  {
    company: "Digital Laboratory Myanmar",
    role: "Junior Developer / Backend Lead",
    period: "Apr 2022 – Feb 2023",
    description: [
      "Developed and maintained high-performance, SEO-optimized microsites for client businesses",
      "Researched and implemented cloud tooling and new web technologies for the team",
      "Managed WordPress and CMS-based sites for ongoing client projects",
    ],
  },
  {
    company: "Bliss Stock",
    role: "Software Developer",
    period: "Jul 2021 – Feb 2022",
    description: [
      "Built an e-learning platform using Java Spring Boot with Docker-based deployment",
      "Developed a cross-platform e-commerce mobile application with Flutter, integrating Firebase and video call functionality",
      "Conducted technical research on Google Speech-to-Text integration for audio processing",
    ],
  },
];

export const techStack: TechCategory[] = [
  {
    category: "Languages",
    items: [
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "PHP", icon: "/icons/php.svg" },
      { name: "Go", icon: "/icons/go.svg" },
      { name: "Python", icon: "/icons/python.svg" },
      { name: "Dart", icon: "/icons/dart.svg" },
      { name: "SQL", icon: "/icons/sql.svg" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
      { name: "AG-Grid", icon: "/icons/aggrid.svg" },
      { name: "shadcn/ui", icon: "/icons/shadcn.svg" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Laravel", icon: "/icons/laravel.svg" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
      { name: "MySQL", icon: "/icons/mysql.svg" },
      { name: "Redis", icon: "/icons/redis.svg" },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { name: "Docker", icon: "/icons/docker.svg" },
      { name: "GitHub Actions", icon: "/icons/github-actions.svg" },
      { name: "Azure", icon: "/icons/azure.svg" },
      { name: "Nginx", icon: "/icons/nginx.svg" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Playwright", icon: "/icons/playwright.svg" },
      { name: "Git", icon: "/icons/git.svg" },
      { name: "pnpm", icon: "/icons/pnpm.svg" },
      { name: "Figma", icon: "/icons/figma.svg" },
    ],
  },
];

export const education: Education[] = [
  {
    institution: "University of the People (UoPeople)",
    degree: "B.S. Computer Science",
    period: "2023 – Expected 2026",
    status: "~30 credits remaining",
  },
  {
    institution: "University of Computer Studies, Mandalay (UCSM)",
    degree: "B.C.Sc. (Knowledge Engineering)",
    period: "2015 – 2020",
    status: "Did not complete — university closed due to COVID-19 and political situation",
    achievements: [
      "2nd Runner Award, Myanmar Collegiate Programming Contest (MCPC) — 3 consecutive years",
      "Participant in Singapore Polytechnic extracurricular programs",
    ],
  },
];
