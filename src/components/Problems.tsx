
import React from "react";
import { Check } from "lucide-react";

const problems = [
  "Руководителя дёргают по пустякам",
  "Проблем очень много, и непонятно с чего начать их решать",
  "Лиды сливаются, сделки теряются",
  "В CRM хаос или её вообще нет",
  "Менеджеры включают режим «я тебе бабки привожу, отстань от меня»",
  "Устал платить за рекламу, которая «иногда работает»"
];

const Problems = () => {
  return (
    <section id="problems" className="py-20 border-t border-gray-800">
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Возможно, пора навести порядок</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-4 p-4 bg-gray-900/40 rounded-md border border-gray-800"
            >
              <Check className="h-5 w-5 text-primary mt-1 min-w-[20px]" />
              <p className="text-lg text-gray-200">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
