import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => (
  <section id="contact" className="bg-paper py-24 md:py-32">
    <div className="container">
      <div className="relative overflow-hidden bg-gradient-broadcast text-paper p-6 md:p-16 lg:p-20 shadow-broadcast">
        <div className="absolute inset-0 bg-grid opacity-[0.06]" />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center min-w-0">
          <div>
            <span className="text-[11px] font-mono-news uppercase tracking-[0.3em] text-accent">— For media professionals</span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] break-words">
              Plug into the fastest video news pipeline in the country.
            </h2>
          </div>
          <div className="min-w-0 lg:pl-12 lg:border-l border-paper/15">
            <p className="text-paper/75 text-base sm:text-lg leading-relaxed break-words">
              Get a daily delivery feed, request location‑specific coverage, or commission an
              exclusive — talk to our newsroom in minutes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button variant="broadcast" size="lg" className="group">
                Request Coverage
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline-paper" 
              size="lg" 
              className="text-xs sm:text-base"
              >
                +91 9891039200 
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;