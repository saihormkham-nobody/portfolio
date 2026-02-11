"use client";

interface ImageLoaderParams {
  src: string;
  width: number;
  quality?: number;
}

const GENERATED_WIDTHS: Record<string, number[]> = {
  "/assets/profile-enchance": [16, 32, 48, 64, 96, 128, 256, 384, 640],
};

export default function imageLoader({ src, width }: ImageLoaderParams): string {
  // Check if we have pre-generated sizes for this image
  const base = src.replace(/\.[^.]+$/, "");
  const widths = GENERATED_WIDTHS[base];

  if (widths) {
    // Pick the smallest generated width that's >= requested width
    const match = widths.find((w) => w >= width) ?? widths[widths.length - 1];
    return `${base}-${match}w.webp`;
  }

  // Fallback: serve the original file as-is
  return src;
}
