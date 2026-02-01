import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "1",
    title: "Получаете токен",
    description: "После регистрации в Telegram-боте вы получаете уникальный токен для вашего сайта.",
    icon: "Key",
  },
  {
    number: "2",
    title: "Вставляете на сайт",
    description: "Используйте удобный скрипт из бота или прямую установку из npm для интеграции на ваш сайт",
    icon: "Code",
  },
  {
    number: "3",
    title: "Заявки в Telegram",
    description: "Когда клиент оставляет заявку, она мгновенно отправится вам в диалог с нашим Telegram ботом",
    icon: "Zap",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-secondary">
          Как это работает
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                {step.number}
              </div>

              <div className="mt-4 mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={step.icon} className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
            Подробная инструкция
            <Icon name="ExternalLink" className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
