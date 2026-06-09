import Header from "@/components/site/Header";
import protest from "@/assets/jaipurprotest.jpeg";
import delhi from "@/assets/newdelhi.jpg";
import mumbai from "@/assets/mumbai.avif"; 
import { useState } from "react"
import {
  Eye,
  MapPin,
  Clock,
  Video,
  Mic,
  Radio,
  Camera
} from "lucide-react";
import Footer from "@/components/site/Footer";

const liveFeeds = [
  {
    title: "Jaipur Protest Coverage",
    location: "Jaipur",
    time: "2 min ago",
    image: protest,
    description: "Thousands of protesters gather in Jaipur to demand justice for recent incidents. Live coverage of the ongoing demonstrations and interviews with participants.",
    viewers: "1.2K",
    link: "/videos/modi.mp4"
    
  },
  {
    title: "Parliament Session",
    location: "New Delhi",
    time: "5 min ago",
    image: delhi,
    description: "Live coverage of the latest parliamentary session in New Delhi. Key discussions on economic policies, foreign relations, and social issues.",
    viewers: "3.5K",
    link: "/videos/parliament.mp4"
  
  },
  {
    title: "Election Rally",
    location: "Mumbai",
    time: "12 min ago",
    image: mumbai,
    description: "Live from Mumbai, where a major political rally is underway. Stay tuned for speeches, crowd reactions, and analysis of the political landscape.",
    viewers: "2.1K",
    link: "/videos/rally.mp4"
  
  },
];

const Live = () => {
  const [selectedlive, setSelectedlive] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />

      <section className="container py-20">
        <span className="text-[11px] uppercase tracking-[0.3em] text-accent">
          — Live Feed
        </span>

        <h1 className="mt-4 text-5xl font-display font-bold">
          Live Coverage
        </h1>

        <div className="mt-12 space-y-4">
          {liveFeeds.map((feed) => (
           
              <div 
              onClick={() => setSelectedlive(feed.link)}
              className="border border-border p-6 hover:bg-card transition-colors cursor-pointer">
                <img
                  src={feed.image}
                  alt={feed.title}
                  className="h-64 w-full object-cover"
                />
                <p className="mt-2 text-muted-foreground">{feed.description}</p>
                <div className="flex items-center gap-3 mt-3">
                  <span className="inline-flex items-center gap-2 bg-red-600 text-white px-3 py-1 text-sm font-bold rounded-full">
                    <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
                    LIVE NOW
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-display font-bold">
                  {feed.title}
                </h3>

                <div className="flex items-center gap-3 text-sm text-muted-foreground mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> {feed.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {feed.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" /> {feed.viewers} watching
                  </span>
                </div>
              </div>
            
          ))}
        </div>
      </section>
      {selectedlive && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    onClick={() => setSelectedlive(null)}
  >
    <div
      className="w-[90%] max-w-4xl"
      onClick={(e) => e.stopPropagation()}
    >
      <video
        src={selectedlive}
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

export default Live;