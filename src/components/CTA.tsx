import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-secondary via-secondary/95 to-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <p className="text-white/90 text-lg mb-4">Поддержка:</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Готовы начать?
          </h2>
          
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg rounded-xl shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Подключить D2 Leads
            <Icon name="Rocket" className="ml-2 w-5 h-5" />
          </Button>

          <p className="text-white/70 text-sm mt-8">
            Чат сообщества
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
