
import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 border-t border-gray-800">
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Обо мне</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="space-y-6">
            <div className="flex items-center">
              <h3 className="text-xl font-bold">СЕО RevixHUB</h3>
              <Button 
                variant="link" 
                className="text-primary ml-2"
                onClick={() => window.open("https://revixhub.ru/", "_blank")}
              >
                <ExternalLink className="h-4 w-4 ml-1" />
              </Button>
            </div>
            
            <div className="flex items-center">
              <p className="text-lg">Более 100 внедрений CRM/ERP с 2017 года</p>
              <Button 
                variant="link" 
                className="text-primary ml-2 whitespace-nowrap"
                onClick={() => window.open("https://vait.teamly.ru/space/931bb747-891d-4f0b-bf2d-22d376042904/database/d9d43350-45aa-46a1-bdbc-d443b6671917", "_blank")}
              >
                Смотреть кейсы <ExternalLink className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-300">
              Работаю с малым и средним бизнесом, от 30 млн оборота, отдел продаж от 2 человек.
            </p>
            <p className="text-gray-300">
              Понимаю, какая жизнь у руководителей. Не лью воду. Даю результат.
            </p>
            <p className="text-gray-300">
              Стиль: деловой, прямой, немного циничный. Без «с заботой о вашем бизнесе». Только по делу.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
