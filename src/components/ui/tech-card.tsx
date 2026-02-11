import Image from "next/image";
import type { TechItem } from "@/lib/types";

interface TechCardProps {
  item: TechItem;
}

export function TechCard({ item }: TechCardProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-card/50 px-4 py-3 transition-colors hover:border-primary/30">
      <Image
        src={item.icon}
        alt={item.name}
        width={24}
        height={24}
        className="h-6 w-6"
        unoptimized
      />
      <span className="text-sm font-medium text-foreground">{item.name}</span>
    </div>
  );
}
