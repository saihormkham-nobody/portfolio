import { Mail, Github, Linkedin } from "lucide-react";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/ui/contact-form";
import { SITE } from "@/lib/constants";

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading>Get in Touch</SectionHeading>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        {/* Form */}
        <ContactForm />

        {/* Info */}
        <div className="space-y-6">
          <p className="text-foreground leading-relaxed">
            Interested in working together? Feel free to reach out through the
            form or contact me directly.
          </p>

          <div className="space-y-4">
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
            >
              <Mail size={20} className="text-primary" />
              <span>{SITE.email}</span>
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
            >
              <Github size={20} className="text-primary" />
              <span>GitHub</span>
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
            >
              <Linkedin size={20} className="text-primary" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
