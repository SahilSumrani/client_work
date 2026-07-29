import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import StatsBar from "@/components/sections/StatsBar";
import Solutions from "@/components/sections/Solutions";
import Process from "@/components/sections/Process";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import SubsidyBanner from "@/components/sections/SubsidyBanner";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="page-wrap">
      <Header />
      <main className="main-wrap">
        <Hero />
        <About />
        <StatsBar />
        <Solutions />
        <Process />
        <WhyChooseUs />
        <SubsidyBanner />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
