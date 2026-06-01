const items = [
  "BREAKING — Cabinet clears new media broadcasting bill",
  "MARKETS — Sensex closes at all-time high, up 1.4%",
  "WORLD — UN summit opens in Geneva amid climate concerns",
  "SPORTS — India clinches series with 6-wicket victory",
  "TECH — AI regulation framework draft released for public review",
  "ENTERTAINMENT — Festival of films opens in Mumbai tonight",
];

const Ticker = () => (
  <div className="bg-accent text-accent-foreground overflow-hidden border-y border-accent-glow/40">
    <div className="flex items-center">
      <span className="shrink-0 bg-ink text-paper px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.25em] font-mono-news">
        Live
      </span>
      <div className="relative flex-1 overflow-hidden">
        <div className="ticker-track flex whitespace-nowrap py-2.5 text-sm font-medium">
          {[...items, ...items].map((t, i) => (
            <span key={i} className="mx-8 inline-flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-foreground/70" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Ticker;