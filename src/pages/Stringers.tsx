import Header from "@/components/site/Header";
import rahul from "../assets/rahul.jpg";
import priya from "../assets/priya.jfif";
import arjun from "../assets/arjun.jpg";
import { MapPin } from "lucide-react";
import Footer from "@/components/site/Footer";

const stringers = [
    { name: "Rahul Singh", city: "Jaipur", stories: 120, image: rahul },
    { name: "Priya Sharma", city: "Mumbai", stories: 95, image: priya },
    { name: "Arjun Verma", city: "Delhi", stories: 140, image: arjun },
];

const assignments = [
    { title: "Jaipur Protest Coverage", description: "Need field footage and interviews.", due: "Due Today" },
    { title: "Mumbai Flood Update", description: "Traffic disruption and rescue operations.", due: "Due Today" },
    { title: "Delhi Parliament Session", description: "Live reactions from MPs.", due: "Due Tomorrow" },
];

const Stringers = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <section className="bg-background">
                <div className="container py-12">
                    <h1 className="text-4xl font-display font-bold">STRINGER NETWORK</h1>
                    <h2 className="mt-4 text-2xl font-display font-bold">500+ Contributors Across India</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl">
                        Verified journalists, videographers and field reporters providing real-time coverage from cities, towns and remote regions.
                    </p>
                    
                    {/* ✅ Stats cards are NOW inside the grid div */}
                    <div className="mt-16 grid gap-6 md:grid-cols-4">
                        <div className="border border-border p-8 text-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
                            <h2 className="text-5xl font-bold text-accent">500+</h2>
                            <p className="mt-2 text-muted-foreground">Active Stringers</p>
                        </div>
                        <div className="border border-border p-8 text-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
                            <h2 className="text-5xl font-bold text-accent">180+</h2>
                            <p className="mt-2 text-muted-foreground">Cities Covered</p>
                        </div>
                        <div className="border border-border p-8 text-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
                            <h2 className="text-5xl font-bold text-accent">24/7</h2>
                            <p className="mt-2 text-muted-foreground">Assignment Desk</p>
                        </div>
                        <div className="border border-border p-8 text-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
                            <h2 className="text-5xl font-bold text-accent">15K+</h2>
                            <p className="mt-2 text-muted-foreground">Stories Delivered</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container py-8">
                <h2 className=" mt-2 text-3xl font-display font-bold">Why Join Our Network?</h2>
                <p className="mt-4 text-muted-foreground max-w-2xl">
                    Join our network of verified stringers and contribute to real-time news coverage from across the country.
                </p>

                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    <div className="border border-border p-8 text-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
                        <h2 className="text-4xl font-bold text-accent">Sell Your Footage</h2>
                        <p className="mt-4 text-muted-foreground">Get paid for verified news footage.</p>
                    </div>
                    <div className="border border-border p-8 text-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
                        <h2 className="text-4xl font-bold text-accent">Nationwide Reach</h2>
                        <p className="mt-4 text-muted-foreground">Your stories reach millions.</p>
                    </div>
                    <div className="border border-border p-8 text-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
                        <h2 className="text-4xl font-bold text-accent">Verification Team</h2>
                        <p className="mt-4 text-muted-foreground">Professional newsroom review before publication.</p>
                    </div>
                </div>

                {/* Featured Stringers + Open Assignments */}
                <div className="mt-24">
    {/* Desktop headers - hidden on mobile */}
    <div className="hidden lg:grid lg:grid-cols-2 gap-0 mb-8">
        <div className="pr-12">
            <div className="h-6 mb-3" />
            <h2 className="text-3xl font-display font-bold">Featured Stringers</h2>
        </div>
        <div className="pl-12">
            <div className="h-6 mb-3 flex items-center gap-2 text-red-600 font-bold text-sm">
                <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
                LIVE ASSIGNMENTS
            </div>
            <h2 className="text-3xl font-display font-bold">Open Assignments</h2>
        </div>
    </div>

    {/* Mobile header - shown only on mobile */}
    <div className="lg:hidden mb-8">
        <h2 className="text-3xl font-display font-bold">Featured Stringers</h2>
        <p className="mt-2 text-muted-foreground text-sm">& Open Assignments</p>
    </div>

    {stringers.map((s, i) => (
        <div key={s.name} className="border-t border-border py-6">
            {/* Stringer row - full width on mobile */}
            <div className="flex items-center justify-between lg:hidden">
                    <div className="flex items-center gap-4">
                    <img src={s.image} alt={s.name} className="h-14 w-14 rounded-full object-cover" />
                    <div>
                        <h3 className="font-bold text-lg">{s.name}</h3>
                        <p className="text-muted-foreground text-sm">📍 {s.city}</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-2xl font-bold text-accent">{s.stories}</p>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Stories Filed</p>
                </div>
            </div>

            {/* Assignment card below stringer on mobile */}
            <div className="mt-4 lg:hidden border border-border p-4 cursor-pointer">
                <div className="flex items-center gap-2 text-red-600 font-bold text-xs mb-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
                    LIVE ASSIGNMENT
                </div>
                <h3 className="font-bold text-lg">{assignments[i].title}</h3>
                <p className="mt-1 text-muted-foreground text-sm">{assignments[i].description}</p>
                <span className="text-accent text-sm font-bold">{assignments[i].due}</span>
            </div>

            {/* Desktop two-column layout */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-0 -mt-6 -mb-6">
                <div className="flex items-center justify-between pr-12 py-6 border-r border-border">
                    <div className="flex items-center gap-4">
                        <img src={s.image} alt={s.name} className="h-20 w-20 rounded-full object-cover" />
                        <div>
                            <h3 className="font-bold text-xl">{s.name}</h3>
                            <p className="text-muted-foreground">📍 {s.city}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-3xl font-bold text-accent">{s.stories}</p>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">Stories Filed</p>
                    </div>
                </div>
                <div className="pl-12 py-6">
                    <div className="border border-border p-6 hover:bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                        <h3 className="font-bold text-xl">{assignments[i].title}</h3>
                        <p className="mt-2 text-muted-foreground">{assignments[i].description}</p>
                        <span className="text-accent text-sm font-bold">{assignments[i].due}</span>
                    </div>
                </div>
            </div>
        </div>
    ))}
</div>
            </div>
            <Footer/>
        </div>
    );
};

export default Stringers;
