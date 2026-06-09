import Header from "@/components/site/Header";
import parliament from "@/assets/parliament.webp";
import broadcast from "@/assets/broadcast.webp";
import rally from "@/assets/rally.webp";
import community from "@/assets/Community.jpg";
import sports from "@/assets/sports.jpg";
import zelensky from "@/assets/ur war.webp";
import { useState } from "react";
import Footer from "@/components/site/Footer";


const videos = [
  {
    title: "Breaking News Coverage",
    date: "June 2026",
    image: broadcast,
    video:
      "https://www.w3schools.com/html/mov_bbb.mp4",
    
  },
  {
    title: "Parliament Session Highlights",
    date: "May 2026",
    image: parliament,
    video:
      "/videos/parliament.mp4",
   
  },
  {
    title: "Election Rally Coverage",
    date: "May 2026",
    image: rally,
    video:
      "/videos/rally.mp4",
  },
  {
    title: "Community Meeting Highlights",
    date: "April 2026",
    image: community,
    video:
      "/videos/community.mp4",
  },
  {
    title: "Sports Event Coverage",
    date: "March 2026",
    image: sports,
    video:
      "/videos/sports.mp4",
  },
  {
    title: "Putin is avoiding peace talks and does not want to end the war: Zelenskyy",
    date: "June 2026",
    image: zelensky,
    video:
      "/videos/zelensky.mp4", 
  }
];

const Broadcast = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />

      <section className="container py-20">
        <span className="text-[11px] uppercase tracking-[0.3em] text-accent">
          — Broadcast Footage
        </span>

        <h1 className="mt-4 text-5xl font-display font-bold">
          Broadcast-Ready Footage
        </h1>

        <p className="mt-4 text-muted-foreground max-w-2xl">
          HD and 4K news footage prepared for broadcasters,
          journalists and media houses.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <div
            onClick={() => setSelectedVideo(video.video)}
            className="group overflow-hidden border border-border bg-card hover:bg-ink transition-colors cursor-pointer"
            >
              
              <img
              src={video.image}
              alt={video.title}
              className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-accent text-xs uppercase tracking-widest">
                  {video.date}
                </p>

                <h3 className="mt-2 text-2xl font-display font-bold group-hover:text-paper">
                  {video.title}
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

export default Broadcast;