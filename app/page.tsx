import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Solutions from "@/components/sections/Solutions";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div className="page-wrap">
      <Header />
      <main className="main-wrap">
        <Hero />
        <About />
        <Solutions />
        <WhyChooseUs />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
