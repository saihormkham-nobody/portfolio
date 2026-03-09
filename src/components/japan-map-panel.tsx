"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { JapanSvg } from "@/components/japan-svg";
import { AkitaDetailPanel } from "@/components/akita-detail-panel";
import { AkitaPhoto } from "@/components/akita-photo";
import { useMediaQuery } from "@/hooks/use-media-query";

export function JapanMapPanel() {
  const [zoomed, setZoomed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const akitaRef = useRef<SVGGElement>(null);
  const [akitaPos, setAkitaPos] = useState<{ left: number; top: number } | null>(null);
  const isLg = useMediaQuery("(min-width: 1024px)");

  const updatePos = useCallback(() => {
    if (!containerRef.current || !akitaRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const akitaRect = akitaRef.current.getBoundingClientRect();
    setAkitaPos({
      left: akitaRect.left - containerRect.left,
      top: akitaRect.top - containerRect.top,
    });
  }, []);

  useEffect(() => {
    updatePos();
    if (!isLg) {
      setZoomed(false);
    }
    window.addEventListener("resize", updatePos);
    return () => window.removeEventListener("resize", updatePos);
  }, [updatePos, isLg, setZoomed]);

  return (
    <div
      ref={containerRef}
      className="animate-fade-in-delay-2 relative mx-auto flex h-68 w-full max-w-80 shrink-0 items-center justify-center overflow-hidden md:h-96 md:w-[400px] md:max-w-full lg:h-full lg:w-[480px] lg:overflow-visible"
    >
      <JapanSvg
        className="w-full"
        zoomed={zoomed}
        onZoomIn={() => isLg && setZoomed(true)}
        onZoomOut={() => isLg && setZoomed(false)}
        akitaRef={akitaRef}
      />

      {akitaPos && (
        <>
          <div
            className="absolute z-20 opacity-80 md:z-0 lg:opacity-100"
            style={{
              left: akitaPos.left - 144,
              bottom: akitaPos.top + 84,
              pointerEvents: zoomed ? "auto" : "none",
            }}
          >
            <AkitaDetailPanel open={zoomed} onClose={() => setZoomed(false)} />
          </div>
          <div
            className="absolute hidden lg:block"
            style={{
              left: akitaPos.left + 60,
              bottom: akitaPos.top + 60,
              pointerEvents: zoomed ? "auto" : "none",
            }}
          >
            <AkitaPhoto open={zoomed} />
          </div>
        </>
      )}
    </div>
  );
}
