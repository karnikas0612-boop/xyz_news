import { Radio } from "lucide-react";

const TopBar = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-ink text-paper border-b border-white/10">
      <div className="container flex h-9 items-center justify-between text-[11px] uppercase tracking-[0.18em]">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 font-mono-news">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-live" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            On Air
          </span>
          <span className="hidden sm:inline text-paper/60">{today}</span>
        </div>
        <div className="hidden md:flex items-center gap-5 text-paper/70">
          <span className="inline-flex items-center gap-1.5"><Radio className="h-3 w-3" /> 24 / 7 Newsroom</span>
          <span>EN · हिं · ગુજ</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;