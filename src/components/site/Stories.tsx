import { ArrowUpRight } from "lucide-react";
import field from "@/assets/story-field.jpg";
import city from "@/assets/story-city.jpg";
import press from "@/assets/story-press.jpg";

const stories = [
  { tag: "Politics", time: "12 min ago", title: "Parliament passes landmark broadcasting reform bill", img: city },
  { tag: "Field", time: "38 min ago", title: "Inside the rally: exclusive footage from the ground", img: field },
  { tag: "Press", time: "1 hr ago", title: "Industry leaders address future of regional journalism", img: press },
];

const Stories = () => (
  <section id="stories" className="bg-ink text-paper py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-grid opacity-[0.04]" />
    <div className="container relative">
      <div className="flex items-end justify-between gap-6">
        <div>
          <span className="text-[11px] font-mono-news uppercase tracking-[0.3em] text-accent">— Latest from the desk</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-balance">
            Stories filed in the last hour.
          </h2>
        </div>
        <a href="#newsroom" className="hidden md:inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-paper/70 hover:text-accent transition-colors">
          All stories <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {stories.map((s) => (
          <article key={s.title} className="group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                width={1280}
                height={896}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
              <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-[0.25em] px-2.5 py-1">
                {s.tag}
              </span>
            </div>
            <div className="mt-5 flex items-center gap-3 text-[11px] font-mono-news uppercase tracking-[0.25em] text-paper/50">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-live" /> {s.time}
            </div>
            <h3 className="mt-3 font-display text-2xl font-bold leading-snug group-hover:text-accent transition-colors">
              {s.title}
            </h3>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Stories;