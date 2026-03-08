import type { MDXComponents } from "mdx/types";
import { ExternalLink } from "lucide-react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    img: (props) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        {...props}
        loading="lazy"
        decoding="async"
        className="w-full rounded-xl border border-border"
      />
    ),
    a: (props) => {
      const isExternal = props.href?.startsWith("http");
      return (
        <a {...props} {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {props.children}
          {isExternal && <ExternalLink className="ml-1 inline-block h-3.5 w-3.5" />}
        </a>
      );
    },
  };
}
