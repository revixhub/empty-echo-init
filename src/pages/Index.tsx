
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Problems from "@/components/Problems";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import Contact from "@/components/Contact";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen w-full bg-[#0F1219] text-white transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Problems />
        <Services />
        <Cases />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
