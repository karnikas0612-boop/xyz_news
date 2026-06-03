import newsroomImg from "@/assets/Newsroom.jpg";
import { Target, Eye, Shield } from "lucide-react";
import TopBar from "@/components/site/TopBar";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <TopBar />
      <Header />
      <section className="border-b border-border">
        <div className="container py-24">
          <span className="inline-block bg-accent text-accent-foreground px-3 py-1 text-xs font-bold uppercase tracking-widest">
            About Us
          </span>

          <h1 className="mt-10 max-w-4xl font-display text-5xl md:text-7xl font-black leading-tight">
            Delivering News Faster.
            <span className="text-accent"> Connecting Media Professionals.</span>
          </h1>

          <p className=" mt-12 text-muted-foreground group-hover:text-paper/70">
            XYZ News Network is a platform operated by experienced media
            professionals dedicated to collecting, verifying, and delivering
            news videos in the shortest possible time. We bridge the gap
            between information and distribution, ensuring that media houses,
            journalists, and news organizations receive timely, reliable, and
            impactful content.
          </p>
          <div className="mt-16 overflow-hidden rounded-xl border border-border">
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
          <div className="group relative bg-card p-8 transition-colors hover:bg-ink hover:text-paper border border-border">            
            <h3 className="font-display text-2xl font-bold mb-4">
              Our Mission
              <Target
               className="h-9 w-9 text-accent transition-transform group-hover:scale-110"
               strokeWidth={1.5}
              />
              <div className="absolute top-6 right-6 font-mono-news text-xs text-muted-foreground group-hover:text-paper/40">
                01
              </div>
            </h3>
            <p className="text-muted-foreground group-hover:text-paper/70">
              To empower media professionals with rapid access to verified news
              content and video resources from across the country.
            </p>
          </div>

          <div className="group relative bg-card p-8 transition-colors hover:bg-ink hover:text-paper border border-border">
            <h3 className="font-display text-2xl font-bold mb-4">
              Our Vision
              <Eye
               className="h-9 w-9 text-accent transition-transform group-hover:scale-110"
               strokeWidth={1.5}
              />
              <div className="absolute top-6 right-6 font-mono-news text-xs text-muted-foreground group-hover:text-paper/40">
               02
              </div>
            </h3>
            <p className="text-muted-foreground group-hover:text-paper/70">
              To become the most trusted and efficient news distribution network
              for journalists, broadcasters, and digital media platforms.
            </p>
          </div>

          <div className="group relative bg-card p-8 transition-colors hover:bg-ink hover:text-paper border border-border">
            <h3 className="font-display text-2xl font-bold mb-4">
              Our Values
              <Shield
               className="h-9 w-9 text-accent transition-transform group-hover:scale-110"
               strokeWidth={1.5}
              />
              <div className="absolute top-6 right-6 font-mono-news text-xs text-muted-foreground group-hover:text-paper/40">
                03
              </div>
            </h3>
            <p className="text-muted-foreground group-hover:text-paper/70">
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
      <Footer />
    </div>
  );
};

export default About