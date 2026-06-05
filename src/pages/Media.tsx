import Header from "@/components/site/Header";

const videos = [
  {
    title: "Breaking News Coverage",
    category: "Broadcast Footage",
    thumbnail:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Political Press Conference",
    category: "Live Feed",
    thumbnail:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Exclusive Interview",
    category: "Bytes & Interviews",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Field Report",
    category: "Ground Coverage",
    thumbnail:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  },
];

const Media = () => {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />

      <section className="container py-20">
        <span className="text-[11px] uppercase tracking-[0.3em] text-accent">
          — Media Gallery
        </span>

        <h1 className="mt-4 font-display text-5xl font-bold">
          News Videos & Coverage
        </h1>

        <p className="mt-4 text-muted-foreground max-w-2xl">
          Browse verified news footage, live feeds, interviews, and field
          reports from across the country.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <div
              key={video.title}
              className="group overflow-hidden border border-border bg-card"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="p-6">
                <span className="text-accent text-xs uppercase tracking-widest">
                  {video.category}
                </span>

                <h3 className="mt-2 text-2xl font-display font-bold">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Media;