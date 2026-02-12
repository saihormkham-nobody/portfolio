import { X } from "lucide-react";

const BUCKET_LIST = [
  { label: "Watch Hanabi", done: true },
  { label: "Kanto Festival", done: true },
  { label: "Fall while skiing", done: true },
  { label: "Soak in Nyuto Onsen", done: false },
  { label: "Visit Lake Tazawa", done: false },
];

export function AkitaDetailPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className="flex w-40 origin-center flex-col gap-2 rounded-xl border border-border/50 bg-card/95 p-2 shadow-lg backdrop-blur-sm transition-all duration-500 ease-out md:origin-bottom-right"
      style={{
        opacity: open ? 1 : 0,
        transform: open ? "scale(1) translate(0, 0)" : "scale(0.1) translate(20%, 20%)",
      }}
    >
      <div className="flex items-start justify-between gap-4 pl-0.5">
        <div>
          <p className="font-heading text-sm font-bold text-primary">Akita, Japan</p>
          <p className="text-[10px] text-muted">Bucket list</p>
        </div>
        <button onClick={onClose} className="mt-0.5 cursor-pointer" aria-label="Close">
          <X size={14} />
        </button>
      </div>
      <ul className="flex flex-col gap-1 px-1 text-xs text-muted">
        {BUCKET_LIST.map((item) => (
          <li
            key={item.label}
            className={`flex items-center gap-1.5${item.done ? "" : " text-muted"}`}
          >
            {item.done ? <span className="text-accent">&#10003;</span> : <span>&#9744;</span>}
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
