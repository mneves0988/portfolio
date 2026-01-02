import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatIBuild from "@/components/WhatIBuild";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <Hero />
      <WhatIBuild />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
