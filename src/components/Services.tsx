
import React from "react";
import { Database, Users, PieChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <Database className="h-8 w-8" />,
    title: "Внедрение CRM/ERP - amoCRM, Битрикс24, МойСклад",
    description: "Подберем/доработаем систему под ваши задачи и интегрируем в бизнес-процессы."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Построение отдела активных продаж",
    description: "Создаем стабильный канал привлечения клиентов без платной рекламы."
  },
  {
    icon: <PieChart className="h-8 w-8" />,
    title: "Консалтинг по продажам и процессам",
    description: "Аудит и оптимизация существующих бизнес-процессов для увеличения продаж."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 border-t border-gray-800">
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Услуги</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-900/40 border-gray-800">
              <CardHeader>
                <div className="text-primary mb-3">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <p className="text-xl mt-10 p-6 border-l-4 border-primary bg-gray-900/40 rounded-r-md">
          «Если вы ждёте чуда — закройте страницу в правом верхнем углу. А если хотите результат — напишите»
        </p>
      </div>
    </section>
  );
};

export default Services;
