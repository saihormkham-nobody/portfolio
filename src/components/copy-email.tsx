"use client";

import { useState } from "react";
import { Mail, Check } from "lucide-react";
import { SITE } from "@/lib/constants";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(SITE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="group relative">
      <button
        onClick={handleCopy}
        aria-label="Copy email address"
        className="flex cursor-pointer items-center gap-1.5 rounded-full border border-border/50 px-3 py-1 text-sm text-muted transition-colors hover:border-primary/50 hover:text-primary"
      >
        <span className="grid [&>*]:col-start-1 [&>*]:row-start-1">
          <Mail
            size={16}
            className={`transition-opacity duration-300 ${copied ? "opacity-0" : "opacity-100"}`}
          />
          <Check
            size={16}
            className={`transition-opacity duration-300 ${copied ? "opacity-100" : "opacity-0"}`}
          />
        </span>
        <span className="relative overflow-hidden">
          <span
            className={`inline-block transition-all duration-300 ${copied ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
          >
            {SITE.email}
          </span>
          <span
            className={`absolute top-0 left-0 transition-all duration-300 ${copied ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
          >
            Copied to the clipboard!
          </span>
        </span>
      </button>
      <span className="pointer-events-none absolute top-1/2 left-full ml-2 -translate-y-1/2 rounded border border-border/50 bg-card px-2 py-1 text-xs whitespace-nowrap text-foreground opacity-0 transition-opacity group-hover:opacity-100">
        {copied ? "Copied!" : "Click to copy"}
      </span>
    </div>
  );
}
