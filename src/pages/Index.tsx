
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <div className={`max-w-md w-full text-center transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight">Пустой Проект</h1>
          <p className="text-muted-foreground text-lg">
            Готов к вашим идеям и творчеству
          </p>
          <div className="flex justify-center pt-4">
            <Button size="lg" className="rounded-full">
              Начать
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
