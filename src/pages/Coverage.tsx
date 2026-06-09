import Header from "@/components/site/Header";
import { MapPin, Radio } from "lucide-react";
import india from "@/assets/india.avif";
import Footer from "@/components/site/Footer";


const states = [
  { name: "Rajasthan", reporters: 15 },
  { name: "Maharashtra", reporters: 22 },
  { name: "Delhi NCR", reporters: 12 },
  { name: "Karnataka", reporters: 18 },
  { name: "Tamil Nadu", reporters: 14 },
  { name: "Uttar Pradesh", reporters: 27 },
];

const activeCities = [
  "Jaipur",
  "Delhi",
  "Mumbai",
  "Bengaluru",
  "Chennai",
];

const Coverage = () => {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />


      <section className="container py-20">
        <span className="text-[11px] uppercase tracking-[0.3em] text-accent">
          — Pan India Coverage
        </span>
       
        <h1 className="mt-4 text-5xl font-display font-bold">
          180+ Cities. One Network.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          From Kashmir to Kanyakumari, our journalists deliver
          verified coverage, interviews and live reports from
          every corner of India.
        </p>


        {/* Stats */}


        <div className="mt-16 grid gap-6 md:grid-cols-4">
          <div className="border border-border p-8 text-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
            <h2 className="text-5xl font-bold text-accent">180+</h2>
            <p className="mt-2 text-muted-foreground">Cities Covered</p>
          </div>

          <div className="border border-border p-8 text-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
            <h2 className="text-5xl font-bold text-accent">400+</h2>
            <p className="mt-2 text-muted-foreground">Journalists</p>
          </div>

          <div className="border border-border p-8 text-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
            <h2 className="text-5xl font-bold text-accent">24/7</h2>
            <p className="mt-2 text-muted-foreground">Monitoring</p>
          </div>

          <div className="border border-border p-8 text-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
            <h2 className="text-5xl font-bold text-accent">15K+</h2>
            <p className="mt-2 text-muted-foreground">Stories Delivered</p>
          </div>

        </div>


        {/* State Network */}
        <h2 className="mt-24 text-3xl font-display font-bold">
          Coverage Network
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {states.map((state) => (
            <div
              key={state.name}
              className="group border border-border p-6 text-center min-h-[140px] flex flex-col justify-center hover:bg-card hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-5 w-5 text-accent" />
                <h3 className="font-bold text-xl">{state.name}</h3>
              </div>

              <p className="mt-2 text-muted-foreground">
                {state.reporters} Correspondents
              </p>
            </div>
          ))}
        </div>

        {/* Active Cities */}
        <h2 className="mt-24 text-3xl font-display font-bold">
          Currently Active
        </h2>

        <div className="mt-8 flex flex-wrap gap-4">
          {activeCities.map((city) => (
            <div
              key={city}
              className="flex items-center gap-2 border border-border px-4 py-2 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
              <Radio className="h-4 w-4 text-green-500 animate-pulse" />
              <span>{city}</span>
            </div>
          ))}
        </div>

        {/* Latest Coverage */}
        <h2 className="mt-24 text-3xl font-display font-bold">
          Latest Coverage
        </h2>

        <div className="mt-8 space-y-4">
          <div className="border border-border p-6 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
            <h3 className="font-bold text-xl">
              <MapPin size={16} className="mr-1 inline"/>
               Jaipur Protest Coverage
            </h3>
            <p className="text-muted-foreground mt-2">
              Student groups gather outside university campus.
            </p>

          </div>

          <div className="border border-border p-6 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">

            <h3 className="font-bold text-xl">
              <MapPin size={16} className="mr-1 inline"/>
               Mumbai Flood Update
            </h3>
            <p className="text-muted-foreground mt-2">
              Heavy rainfall affects transportation across the city.
            </p>
          </div>

          <div className="border border-border p-6 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
            <h3 className="font-bold text-xl">
              <MapPin size= {16} className="mr-1 inline"/> 
              Delhi Parliament Session
            </h3>
            <p className="text-muted-foreground mt-2">
              Key legislation discussed during today's proceedings.
            </p>
          </div>
        </div>
        {/* {/* <section className="relative h-[400px] overflow-hidden">
  <img
    src={india}
    alt="India Coverage"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-black/50" />

  <div className="relative z-10 flex h-full items-center justify-center">
    <h1 className="text-5xl font-display font-bold text-white text-center">
      180+ Cities. One Network.
    </h1>
    
  </div> 
</section> */}

      </section>
      <Footer/>
    </div>

  );

};

export default Coverage;