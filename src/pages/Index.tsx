
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        
        <footer className="py-8 border-t border-gray-800 mt-10 text-center text-sm text-gray-500">
          <div className="flex items-center justify-center space-x-4">
            <span>© {new Date().getFullYear()} Артём Уханов</span>
            <Link to="/privacy" className="hover:text-primary hover:underline">
              Политика конфиденциальности
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
