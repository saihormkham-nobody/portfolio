import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = path.resolve(__dirname, "../public/assets");

interface ImageConfig {
  src: string;
  widths: number[];
  quality?: number;
}

const IMAGES: ImageConfig[] = [
  {
    src: "profile-enchance.png",
    widths: [16, 32, 48, 64, 96, 128, 256, 384, 640],
  },
];

async function generate() {
  for (const { src, widths, quality = 100 } of IMAGES) {
    const input = path.join(ASSETS_DIR, src);
    const base = src.replace(/\.[^.]+$/, "");

    for (const w of widths) {
      const output = path.join(ASSETS_DIR, `${base}-${w}w.webp`);
      const info = await sharp(input)
        .resize(w)
        .webp({ quality })
        .toFile(output);
      console.log(`  ${base}-${w}w.webp  (${Math.round(info.size / 1024)} KB)`);
    }
  }
  console.log("Done.");
}

generate();
