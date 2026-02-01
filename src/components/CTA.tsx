import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CTA = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-emerald-400 via-primary to-teal-500 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium">
              <Icon name="Zap" className="w-4 h-4" />
              Подключение за 5 минут
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Готовы начать получать заявки в Telegram?
          </h2>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам бизнесов, которые уже используют D2 Leads
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-10 py-7 text-lg rounded-xl shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold"
            >
              <Icon name="Rocket" className="mr-2 w-5 h-5" />
              Начать бесплатно
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-7 text-lg rounded-xl transition-all duration-300"
            >
              <Icon name="MessageCircle" className="mr-2 w-5 h-5" />
              Чат сообщества
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" className="w-5 h-5" />
              <span>Бесплатный тариф</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" className="w-5 h-5" />
              <span>Без кредитной карты</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Icon name="CheckCircle2" className="w-5 h-5" />
              <span>Настройка за 5 минут</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;