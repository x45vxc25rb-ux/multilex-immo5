import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Properties from "@/components/Properties";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Services from "@/components/Services";
import Statement from "@/components/Statement";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Properties />
        <About />
        <Expertise />
        <Services />
        <Statement />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
