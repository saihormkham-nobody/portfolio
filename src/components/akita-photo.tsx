import Image from "next/image";

export function AkitaPhoto({ open }: { open: boolean }) {
  return (
    <div
      className="overflow-hidden rounded-xl border border-border/50 shadow-lg transition-all duration-500 ease-out"
      style={{
        opacity: open ? 1 : 0,
        transform: open ? "scale(1) translate(0, 0)" : "scale(0.1) translate(-20%, 20%)",
        transformOrigin: "bottom left",
        transitionDelay: open ? "100ms" : "0ms",
      }}
    >
      <Image
        src="/assets/akita-skiing.webp"
        alt="Skiing in Akita, Japan"
        width={187}
        height={140}
        unoptimized
        className="object-cover"
      />
    </div>
  );
}
