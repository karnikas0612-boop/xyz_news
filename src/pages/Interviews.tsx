import Header from "@/components/site/Header";
import putin from "@/assets/putin.webp";
import modi from "@/assets/modi.jpg";
import trump from "@/assets/trump.webp";
import joe from "@/assets/joe.jfif";
import yogi from "@/assets/yogi.jpg";
import mc from "@/assets/mc.jpg";
import { useState } from "react";
import Footer from "@/components/site/Footer";


const worldLeaders = [
  {
    title: "Interview with Valdamir Putin",
    date: "June 2026",
    image: putin,
    video:
      "/videos/putin.mp4",
    
  },
  {
    title: "Interview with Narendra Modi",
    date: "May 2026",
    image: modi,
    video:
      "/videos/modi.mp4",
   
  },
  {
    title: "Interview with Donald Trump",
    date: "May 2026",
    image: trump,
    video:
      "/videos/trump.mp4",
  },
  {
    title: "Interview with Joe Biden",
    date: "April 2026",
    image: joe,
    video:
      "/videos/trump.mp4",
  }
];

const chiefMinisters = [{
    title: "Interview with Yogi Adityanath",
    date: "June 2026",
    image: yogi,
    video:
      "/videos/putin.mp4",
},
{
    title: "Interview with Mamata Banerjee",
    date: "May 2026",
    image: mc,
    video:
      "/videos/modi.mp4",
}
];

const Interviews = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />

      <section className="container py-20">
        <span className="text-[11px] uppercase tracking-[0.3em] text-accent">
          — Interview Footage
        </span>

        <h1 className="mt-4 text-5xl font-display font-bold">
          Interviews with World Leaders
        </h1>

        <p className="mt-4 text-muted-foreground max-w-2xl">
          HD and 4K news footage prepared for broadcasters,
          journalists and media houses.
        </p>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {worldLeaders.map((leader) => (
            <div
            onClick={() => setSelectedVideo(leader.video)}
            className="group overflow-hidden border border-border bg-card hover:bg-ink transition-colors cursor-pointer">
              
              <img
              src={leader.image}
              alt={leader.title}
              className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-accent text-xs uppercase tracking-widest">
                  {leader.date}
                </p>

                <h3 className="mt-2 text-2xl font-display font-bold group-hover:text-paper">
                  {leader.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <h1 className="text-5xl font-display font-bold mt-6">Interview with CMs of India</h1>
         <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {chiefMinisters.map((cm) => (
            <div
            onClick={() => setSelectedVideo(cm.video)}
            className="group overflow-hidden border border-border bg-card hover:bg-ink transition-colors cursor-pointer">
              
              <img
              src={cm.image}
              alt={cm.title}
              className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-accent text-xs uppercase tracking-widest">
                  {cm.date}
                </p>

                <h3 className="mt-2 text-2xl font-display font-bold group-hover:text-paper">
                  {cm.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      {selectedVideo && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    onClick={() => setSelectedVideo(null)}
  >
    <div
      className="w-[90%] max-w-4xl"
      onClick={(e) => e.stopPropagation()}
    >
      <video
        src={selectedVideo}
        controls
        autoPlay
        className="w-full rounded-xl"
      />
    </div>
  </div>
)}
<Footer/>
    </div>
  );
};

export default Interviews;