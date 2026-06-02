import newsroomImg from "@/assets/newsroom.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <section className="border-b border-border">
        <div className="container py-24">
          <span className="inline-block bg-accent text-accent-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest">
            About Us
          </span>

          <h1 className="mt-6 max-w-4xl font-display text-5xl md:text-7xl font-black leading-tight">
            Delivering News Faster.
            <span className="text-accent"> Connecting Media Professionals.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            XYZ News Network is a platform operated by experienced media
            professionals dedicated to collecting, verifying, and delivering
            news videos in the shortest possible time. We bridge the gap
            between information and distribution, ensuring that media houses,
            journalists, and news organizations receive timely, reliable, and
            impactful content.
          </p>
          <div className="mt-12 overflow-hidden rounded-xl border border-border">
  <div className="relative mt-12 overflow-hidden rounded-xl">
  <img
    src={newsroomImg}
    alt="XYZ News Network"
    className="w-full h-[500px] object-cover"
  />

  <div className="absolute inset-0 bg-black/40 flex items-end">
    <div className="p-8">
      <h2 className="text-white text-3xl font-bold">
        News Delivered Without Delay
      </h2>

      <p className="text-white/80 mt-2">
        Supporting media professionals with timely and reliable content.
      </p>
    </div>
  </div>
</div>
</div>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="border border-border p-8 rounded-lg">
            <h3 className="font-display text-2xl font-bold mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground">
              To empower media professionals with rapid access to verified news
              content and video resources from across the country.
            </p>
          </div>

          <div className="border border-border p-8 rounded-lg">
            <h3 className="font-display text-2xl font-bold mb-4">
              Our Vision
            </h3>
            <p className="text-muted-foreground">
              To become the most trusted and efficient news distribution network
              for journalists, broadcasters, and digital media platforms.
            </p>
          </div>

          <div className="border border-border p-8 rounded-lg">
            <h3 className="font-display text-2xl font-bold mb-4">
              Our Values
            </h3>
            <p className="text-muted-foreground">
              Accuracy, speed, credibility, and professional excellence are at
              the core of everything we deliver.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-card border-y border-border">
        <div className="container py-20">
          <div className="grid gap-10 md:grid-cols-4 text-center">
            <div>
              <h2 className="text-5xl font-black text-accent">24/7</h2>
              <p className="mt-2 text-muted-foreground">News Monitoring</p>
            </div>

            <div>
              <h2 className="text-5xl font-black text-accent">100%</h2>
              <p className="mt-2 text-muted-foreground">Media Focused</p>
            </div>

            <div>
              <h2 className="text-5xl font-black text-accent">Fast</h2>
              <p className="mt-2 text-muted-foreground">Content Delivery</p>
            </div>

            <div>
              <h2 className="text-5xl font-black text-accent">Trusted</h2>
              <p className="mt-2 text-muted-foreground">Professional Network</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About