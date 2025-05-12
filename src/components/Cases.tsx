
import React from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const cases = [
  {
    logo: "GMA",
    description: "Внедрение amoCRM и настройка бизнес-процессов, увеличение конверсии лидов на 35%"
  },
  {
    logo: "Империя Косметики",
    description: "Построение отдела активных продаж, +28% к выручке за 3 месяца"
  },
  {
    logo: "Дом гирлянд",
    description: "Интеграция МойСклад с сайтом, автоматизация учета товаров, снижение издержек на 22%"
  }
];

const Cases = () => {
  return (
    <section id="cases" className="py-20 border-t border-gray-800">
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Референс-лист</h2>
        
        <Carousel className="w-full max-w-4xl mx-auto mt-10">
          <CarouselContent>
            {cases.map((caseItem, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <Card className="bg-gray-900/40 border-gray-800 h-full">
                  <CardContent className="p-6 flex flex-col justify-between h-full">
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold text-primary">{caseItem.logo}</h3>
                    </div>
                    <p className="text-gray-300">{caseItem.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="relative static mr-2" />
            <CarouselNext className="relative static ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Cases;
