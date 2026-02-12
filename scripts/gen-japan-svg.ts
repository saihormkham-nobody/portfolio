import fs from "node:fs";
import { geoMercator, geoPath } from "d3-geo";
import * as topojsonClient from "topojson-client";
import { presimplify, simplify } from "topojson-simplify";
import type { Topology, GeometryCollection } from "topojson-specification";

const topo: Topology<{ japan: GeometryCollection }> = JSON.parse(
  fs.readFileSync("public/geo/japan.topojson", "utf8"),
);

// Simplify the topology — keep ~5% of points
const presimplified = presimplify(topo);
const simplified = simplify(presimplified, 0.005);

const geojson = topojsonClient.feature(simplified, simplified.objects.japan);

const projection = geoMercator().fitSize([400, 500], geojson);
const pathGen = geoPath().projection(projection);

// Round coordinates to 1 decimal
function roundPath(d: string | null): string {
  if (!d) return "";
  return d.replace(/(\d+\.\d)\d*/g, "$1");
}

const prefectures = geojson.features
  .map((f) => ({
    name: f.properties?.nam as string,
    d: roundPath(pathGen(f)),
  }))
  .filter((p) => p.d);

// Split
const akita = prefectures.filter((p) => p.name === "Akita Ken");
const rest = prefectures.filter((p) => p.name !== "Akita Ken");

// Build TSX
let tsx = `// Auto-generated from japan.topojson — do not edit by hand

export function JapanSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Map of Japan with Akita prefecture highlighted"
      role="img"
    >
      {/* Base prefectures */}
      <g className="fill-primary/20 stroke-primary/40" strokeWidth={0.5}>
`;

for (const p of rest) {
  tsx += `        <path d="${p.d}" />\n`;
}

tsx += `      </g>
      {/* Akita */}
      <g className="fill-accent/50 stroke-accent/80" strokeWidth={0.8}>
`;

for (const p of akita) {
  tsx += `        <path d="${p.d}" />\n`;
}

tsx += `      </g>
    </svg>
  );
}
`;

fs.writeFileSync("src/components/japan-paths.generated.tsx", tsx);
console.log("Prefectures:", prefectures.length);
console.log("Written SVG component, size:", Math.round(tsx.length / 1024) + "KB");
