
import React from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const cases = [
  {
    logo: "/lovable-uploads/f9903475-2e36-46af-b190-4228ef24f449.png",
    name: "Источник здоровья",
    industry: "Производство водоматов",
    points: [
      "Перевели компанию с amoCRM на Битрикс24",
      "Восстановили логику продаж после неудачного переноса — с сохранением данных",
      "Создали отдельные воронки для комплектующих, оборудования и техподдержки",
      "Настроили автозадачи, напоминания, учёт товаров в сделке",
      "Перенесли базу клиентов, устранили дубли и синхронизировали АТС",
      "Сделали систему удобной для менеджеров: изменилась структура воронок"
    ],
    result: "Продажи, комплектующие и поддержка — теперь в одной системе, без хаоса"
  },
  {
    logo: "/lovable-uploads/81315b8f-3d71-4602-a12c-d1d15c666de7.png",
    name: "Империя Косметики",
    industry: "Производство и дистрибуция косметики в среднем+ сегменте",
    points: [
      "Перенастроили CRM после неудачного внедрения подрядчиком",
      "Связали процессы 4 отделов в единую систему",
      "Реализовали 2‑стороннюю синхронизацию amoCRM ↔ 1С",
      "Внедрили автоматизацию счётов, задач, напоминаний",
      "Настроили аналитику и контроль отгрузок",
      "Руководитель перестал заниматься ручным контролем сделок",
      "Менеджеры начали работать по системе, а не по памяти"
    ],
    result: "CRM стала управленческим инструментом, а не просто «какой-то программой»"
  },
  {
    logo: "/lovable-uploads/5309ef4f-9f44-4e84-9183-6f72b3670de8.png",
    name: "ДомГирлянд",
    industry: "Архитектурное освещение",
    points: [
      "Упростили учёт склада и запуска проектов — раньше всё было в Excel",
      "Настроили amoCRM под два направления: стройка и гирлянды",
      "Интегрировали WhatsApp, Telegram, Яндекс.Диск, документы и склад",
      "Автоматизировали расчёт прибыли, налогообложение, статусы оплат",
      "Система создаёт все документы за 1 минуту, замер — за 5 минут",
      "Запустили новое направление за 5 минут — и выручили 15 млн за сезон"
    ],
    result: "Владелец сосредоточился на гирляндах, бизнес на усилителях продал"
  },
  {
    logo: "/lovable-uploads/c005ed0e-4851-41a8-bcd5-0d88e37c32e4.png",
    name: "Взаперти (Разумгеймс, Нелогика)",
    industry: "Сеть квестов (12 локаций)",
    points: [
      "Перевели компанию с Umnico на amoCRM",
      "Настроили воронки для первичных, повторных и партнёрских продаж",
      "Объединили сайт, соцсети, мессенджеры и офлайн в единую CRM",
      "Подключили автозадачи, пуши, напоминания и повторные касания",
      "Встроили аналитику Calltouch и таблицы с отчётами в реальном времени",
      "Продажи, администрирование и повторные брони — в одной системе"
    ],
    result: "Ни один лид не теряется. Все брони, upsell и отзывы — под контролем"
  },
  {
    logo: "/lovable-uploads/d6e64e8e-52b5-4ce9-ad97-509968f2bcf6.png",
    name: "GMA",
    industry: "Детейлинг",
    points: [
      "Перестроили CRM с учётом трёх направлений: услуги, обучение, товары",
      "Настроили автоматическое перемещение сделок между воронками",
      "Подключили рассылки WhatsApp через WABABA — до 10 тыс. диалогов в месяц",
      "Интегрировали МойСклад для учёта остатков без доступа менеджеров в ERP",
      "Настроили права доступа, видимость полей, управление этапами", 
      "Интегрировали сайт на Tilda, телефонию Мегафон и начали внедрение YCLIENTS"
    ],
    result: "CRM стала управляющей системой вместо набора несвязанных инструментов"
  }
];

const Cases = () => {
  return (
    <section id="cases" className="py-20 border-t border-gray-800">
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Несколько кейсов</h2>
        
        <Carousel className="w-full max-w-4xl mx-auto mt-10">
          <CarouselContent>
            {cases.map((caseItem, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1 p-1">
                <Card className="bg-gray-900/40 border-gray-800 h-full">
                  <CardContent className="p-6 flex flex-col justify-between h-full space-y-6">
                    <div className="text-center flex flex-col items-center space-y-4">
                      {caseItem.logo && (
                        <div className="h-10 flex items-center justify-center">
                          <img 
                            src={caseItem.logo} 
                            alt={`${caseItem.name} logo`} 
                            className="h-full object-contain"
                          />
                        </div>
                      )}
                      <h3 className="text-2xl font-bold text-primary mt-2">{caseItem.name}</h3>
                      <p className="text-gray-400 italic">{caseItem.industry}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <ul className="space-y-2">
                        {caseItem.points.map((point, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Check className="h-5 w-5 text-primary mt-1 min-w-[20px]" />
                            <span className="text-sm text-gray-200">{point}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="pt-4 border-t border-gray-700">
                        <p className="flex items-start space-x-2">
                          <Check className="h-5 w-5 text-green-500 mt-1 min-w-[20px]" />
                          <span className="text-green-500 font-medium">{caseItem.result}</span>
                        </p>
                      </div>
                    </div>
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
