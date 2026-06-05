import { Camera, Globe2, Mic2, Satellite, Video, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Broadcast-Ready Footage",
    desc: "HD & 4K news videos shot, cut and captioned to your channel's specs.",
    link: "/media/broadcast",
  },
  {
    icon: Satellite,
    title: "Live Feed & Uplinks",
    desc: "On-ground stringers with live transmission from any breaking scene.",
    link: "/media/livefeed",
  },
  {
    icon: Mic2,
    title: "Bytes & Interviews",
    desc: "First-voice access to leaders, eyewitnesses and subject experts.",
    link: "/media/interviews",
  },
  {
    icon: Globe2,
    title: "Pan-India Coverage",
    desc: "180+ cities and counting — local stories with national context.",
    link: "/media/coverage",
  },
  {
    icon: Camera,
    title: "Event & Field Crews",
    desc: "PCRs, OB vans and certified camera units on standby, 24/7.",
    link: "/media/events",
  },
  {
    icon: Zap,
    title: "Verified in Minutes",
    desc: "Editorial desk authenticates every clip before it reaches you.",
    link: "/media/verified",
  },    
];


const Services = () => (
  <section id="services" className="bg-paper py-24 md:py-32">
    <div className="container">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <span className="text-[11px] font-mono-news uppercase tracking-[0.3em] text-accent">— What we deliver</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-ink sm:text-5xl text-balance">
            One newsroom.
            <span className="italic font-light text-ink-soft"> Every story.</span>
          </h2>
        </div>
        <p className="max-w-md text-muted-foreground">
          From a roadside protest to a presidential address — our crews capture, verify and deliver
          to your editing suite before the competition is on the scene.
        </p>
      </div>

      <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3 border border-border">
        {services.map(({ icon: Icon, title, desc, link }, i) => (
  <Link key={title} to={link}>
    <article className="group relative bg-card p-8 transition-colors hover:bg-ink hover:text-paper cursor-pointer">
      <Icon className="h-10 w-10 text-accent" />
      <h3 className="font-display text-2xl font-bold mt-4">{title}</h3>
      <p className="mt-2 text-muted-foreground group-hover:text-paper/70">{desc}</p>
      <div className="absolute top-6 right-6 font-mono-news text-xs text-muted-foreground group-hover:text-paper/40">
        {i + 1 < 10 ? `0${i + 1}` : i + 1}
      </div>
    </article>
  </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Services;