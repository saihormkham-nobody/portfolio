import { SITE } from "@/lib/constants";
import { SocialLinks } from "@/components/social-links";
import { CopyEmail } from "@/components/copy-email";

export function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-8 md:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {SITE.name}
        </p>

        <div className="flex items-center gap-4">
          <SocialLinks size={20} />
          <CopyEmail />
        </div>
      </div>
    </footer>
  );
}
