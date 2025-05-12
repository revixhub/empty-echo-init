
import React from "react";
import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 border-t border-gray-800">
      <div className="flex flex-col items-center text-center space-y-8 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Контакты</h2>
        
        <p className="text-xl text-gray-300">
          Давайте разберёмся в вашей задаче
        </p>
        
        <div className="w-full flex justify-center items-center">
          <Button 
            size="lg"
            className="text-lg py-6 px-8 mt-4 bg-primary hover:bg-primary/90 mx-auto"
            onClick={() => window.open("https://t.me/artemuhanov", "_blank")}
          >
            <SendHorizontal className="mr-2" /> Написать в Telegram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
