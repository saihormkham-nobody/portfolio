import { Github, Linkedin, Mail } from "lucide-react";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-8 md:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {SITE.name}
        </p>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${SITE.email}`}
            className="text-muted transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
