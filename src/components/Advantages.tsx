import Icon from "@/components/ui/icon";

const advantages = [
  {
    title: "Дешевле любой CRM",
    description: "Бесплатный тариф навсегда + доступные платные планы.",
    icon: "DollarSign",
  },
  {
    title: "Защита от дубликатов",
    description: "Если человек случайно несколько раз отправил такую же заявку, придёт только одна.",
    icon: "Shield",
  },
  {
    title: "Скорость",
    description: "Заявка приходит в Telegram за секунды — не нужно проверять почту или CRM.",
    icon: "Zap",
  },
  {
    title: "Для всех",
    description: "Если делаешь сайт с помощью ИИ — готовые промпты. Если с разработчиком — удобная документация.",
    icon: "Users",
  },
  {
    title: "Заявки не теряются",
    description: "Если лимит закончился — они ждут сброса и отправляются автоматически.",
    icon: "CheckCircle2",
  },
];

const Advantages = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-secondary">
          Наши преимущества
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-emerald-100 hover:border-primary animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon name={advantage.icon} className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">{advantage.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
