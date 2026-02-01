import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const plans = [
  {
    name: "Бесплатный",
    price: "0",
    period: "/мес",
    leads: "20 заявок/мес",
    popular: false,
  },
  {
    name: "Базовый",
    price: "290",
    period: "/мес",
    leads: "500 заявок/мес",
    popular: true,
  },
  {
    name: "Профессиональный",
    price: "1390",
    period: "/мес",
    leads: "5000 заявок/мес",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-emerald-50/30 to-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-secondary">
          Тарифы
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-scale-in ${
                plan.popular ? "ring-2 ring-primary" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                  Популярный
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-4 text-secondary">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-secondary">{plan.price}</span>
                  <span className="text-xl text-muted-foreground">₽{plan.period}</span>
                </div>
              </div>

              <div className="mb-6 text-center">
                <div className="inline-block bg-primary/10 rounded-xl px-4 py-2">
                  <span className="text-primary font-medium">{plan.leads}</span>
                </div>
              </div>

              <Button
                className={`w-full rounded-xl transition-all duration-300 ${
                  plan.popular
                    ? "gradient-bg text-white hover:shadow-xl"
                    : "bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white"
                }`}
                size="lg"
              >
                Выбрать тариф
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
