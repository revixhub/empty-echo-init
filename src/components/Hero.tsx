
import React from "react";
import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 md:py-28 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter animate-fade-in">
          Артём Уханов
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mt-4">
          Интегратор CRM/ERP и консультант по активным продажам
        </p>
        <p className="text-2xl md:text-3xl font-bold text-gray-100 mt-6 border-l-4 border-primary pl-4">
          «Убираю бардак в отделе продаж, а вы заниматесь стратегическими задачами»
        </p>
        <p className="text-lg text-gray-300 mt-6 max-w-2xl">
          Помогаю достичь годовых целей по выручке через выстраивание процессов продаж и добавление независимого канала лидогенерации.
        </p>
        <div className="mt-8">
          <Button 
            size="lg"
            className="text-lg py-6 px-8 bg-primary hover:bg-primary/90"
            onClick={() => window.open("https://t.me/artemuhanov", "_blank")}
          >
            <SendHorizontal className="mr-2" /> Написать в Telegram
          </Button>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="relative w-72 h-80 sm:w-80 sm:h-96">
          <img
            src="/lovable-uploads/482fa92a-deaa-4bac-bbed-d090ede10030.png"
            alt="Артём Уханов"
            className="w-full h-full object-cover object-center rounded-md"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1219] to-transparent opacity-20 rounded-md"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
