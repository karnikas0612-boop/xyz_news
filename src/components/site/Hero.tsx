import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-newsroom.jpg";

const Hero = () => (
  <section id="top" className="relative isolate overflow-hidden bg-ink text-paper">
    <img
      src={hero}
      alt="XYZ News Network newsroom"
      width={1920}
      height={1280}
      className="absolute inset-0 h-full w-full object-cover opacity-55"
    />
    <div className="absolute inset-0 bg-gradient-veil" />
    <div className="absolute inset-0 bg-grid opacity-30 mix-blend-overlay" />

    <div className="container relative z-10 grid gap-10 py-24 md:py-32 lg:grid-cols-12 lg:gap-12 lg:py-40">
      <div className="lg:col-span-8 animate-rise">
        <div className="inline-flex items-center gap-3 border border-accent/60 bg-accent/15 px-3 py-1.5 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-accent animate-live" />
          <span className="text-[11px] font-mono-news uppercase tracking-[0.3em] text-paper">
            Breaking · One‑Point Video News Solution
          </span>
        </div>

        <h1 className="mt-8 font-display text-5xl font-black leading-[1.02] text-paper sm:text-6xl lg:text-7xl xl:text-8xl text-balance">
          The story,
          <br />
          <span className="italic font-light text-paper/85">delivered before</span>
          <br />
          <span className="text-accent">it breaks.</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg text-paper/75 leading-relaxed">
          XYZ News Network is run by media professionals, for media professionals — collecting and
          delivering broadcast‑grade news videos in the shortest possible time, anywhere in the world.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button variant="broadcast" size="lg" className="group">
            Get Live Feed
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline-paper" size="lg">
            <PlayCircle className="mr-2 h-5 w-5" />
            Watch Showreel
          </Button>
        </div>
      </div>

      <aside className="lg:col-span-4 self-end animate-rise [animation-delay:200ms]">
        <div className="border-l-2 border-accent pl-6 space-y-6">
          {[
            { k: "00:08:24", v: "Avg. delivery to client desk" },
            { k: "180+", v: "Cities with stringer coverage" },
            { k: "24/7", v: "Newsroom & verification desk" },
          ].map((s) => (
            <div key={s.k}>
              <div className="font-display text-3xl font-bold text-paper">{s.k}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-paper/60 mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  </section>
);

export default Hero;