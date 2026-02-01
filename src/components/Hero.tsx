import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-emerald-50/30 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
          D2 Leads
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-secondary max-w-3xl mx-auto font-medium">
          Заявки с сайта сразу в Telegram
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Без своего бота, без бэкенда, без CRM<br />
          Подключение занимает менее 5 минут
        </p>

        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-16">
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover-scale">
            <div className="bg-primary/10 rounded-xl p-3">
              <Icon name="FileText" className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <div className="text-sm text-muted-foreground">Форма на сайте</div>
            </div>
          </div>

          <Icon name="ArrowRight" className="w-6 h-6 text-primary rotate-90 sm:rotate-0" />

          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover-scale">
            <div className="bg-primary/10 rounded-xl p-3">
              <Icon name="Send" className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <div className="text-sm text-muted-foreground">Сообщение в Telegram</div>
            </div>
          </div>

          <Icon name="ArrowRight" className="w-6 h-6 text-primary rotate-90 sm:rotate-0" />

          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover-scale">
            <div className="bg-primary/10 rounded-xl p-3">
              <Icon name="UserPlus" className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <div className="text-sm text-muted-foreground">Новый лид</div>
            </div>
          </div>
        </div>

        <Button size="lg" className="gradient-bg text-white px-8 py-6 text-lg rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          Подключить
          <Icon name="ArrowRight" className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
