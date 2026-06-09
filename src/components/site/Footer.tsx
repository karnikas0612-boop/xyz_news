import { Link } from "react-router-dom";

const cols = [
  {
    title: "Coverage",
    items: [
      { name: "Politics", link: "/media/interviews" },
      { name: "World", link: "/media/interviews" },
      { name: "Markets", link: "/media/broadcast" },
      { name: "Sports", link: "/media/broadcast" },
      { name: "Entertainment", link: "/media/interviews" },
    ],
  },

  {
    title: "Services",
    items: [
      { name: "Live Feed", link: "/media/livefeed" },
      { name: "Stringer Network", link: "/stringers" },
      { name: "Verification", link: "/verification" },
    ],
  },

  {
    title: "Company",
    items: [
      { name: "About", link: "/about" },
      { name: "Newsroom", link: "/newsroom" },
      { name: "Careers", link: "/careers" },
      { name: "Contact", link: "/contact" },
    ],
  },
];

const Footer = () => (
  <footer className="bg-ink text-paper">
    <div className="container py-20">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center">
            <span className="bg-accent text-accent-foreground font-display font-black text-3xl px-3 py-1.5 leading-none">XYZ</span>
            <span className="ml-2 font-display text-2xl font-bold leading-none">News<span className="text-accent">.</span></span>
          </div>
          <p className="mt-6 max-w-sm text-paper/65 leading-relaxed">
            Built by media professionals to be the single point of trust for video news — fast, verified
            and broadcast‑ready.
          </p>
          <div className="mt-6 text-[11px] font-mono-news uppercase tracking-[0.25em] text-paper/40">
            xyznewsagency@gmail.com · +91 9891039200
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title} className="lg:col-span-2">
            <div className="text-[11px] font-mono-news uppercase tracking-[0.25em] text-accent">{c.title}</div>
            <ul className="mt-5 space-y-3 text-sm text-paper/75">
              {c.items.map((item) => (
                <li key={item.name}>
  <Link
    to={item.link}
    className="hover:text-accent transition-colors"
  >
    {item.name}
  </Link>
</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="border-t border-white/10">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-xs text-paper/50">
        <span>© {new Date().getFullYear()} XYZ News Network. All rights reserved.</span>
        <span className="font-mono-news uppercase tracking-[0.25em]">Truth · Speed · Source</span>
      </div>
    </div>
  </footer>
);

export default Footer;