import TopBar from "@/components/site/TopBar";
import Header from "@/components/site/Header";
import Ticker from "@/components/site/Ticker";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Stories from "@/components/site/Stories";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

const Index = () => (
  <div className="min-h-screen bg-paper text-ink">
    <TopBar />
    <Header />
    <main>
      <Hero />
      <Ticker />
      <Services />
      <Stories />
      <CTA />
    </main>
    <Footer />
  </div>
);

export default Index;
