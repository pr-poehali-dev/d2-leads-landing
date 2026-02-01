import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Instruction = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-24 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="container px-4 mx-auto max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
            <Icon name="ArrowLeft" className="w-4 h-4" />
            Назад на главную
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-secondary">
            Инструкция по подключению
          </h1>

          <p className="text-lg text-muted-foreground mb-12">
            Выберите подходящий вариант инструкции в зависимости от того, как вы создаете свой сайт:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-emerald-100 hover:border-primary group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Bot" className="w-7 h-7 text-primary" />
              </div>
              
              <h2 className="text-2xl font-bold mb-4 text-secondary">Для использования с ИИ</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Готовые промпты и простые инструкции для интеграции D2 Leads на сайты, созданные с помощью нейросетей.
              </p>
              
              <Button className="w-full gradient-bg text-white rounded-xl">
                Открыть инструкцию
                <Icon name="ArrowRight" className="ml-2 w-4 h-4" />
              </Button>
              
              <div className="mt-6 pt-6 border-t border-emerald-100">
                <p className="text-sm text-muted-foreground italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-emerald-100 hover:border-primary group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Code2" className="w-7 h-7 text-primary" />
              </div>
              
              <h2 className="text-2xl font-bold mb-4 text-secondary">Для разработчиков</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Техническая документация с примерами кода для программной интеграции D2 Leads в ваш проект.
              </p>
              
              <Button className="w-full gradient-bg text-white rounded-xl">
                Открыть инструкцию
                <Icon name="ArrowRight" className="ml-2 w-4 h-4" />
              </Button>
              
              <div className="mt-6 pt-6 border-t border-emerald-100">
                <p className="text-sm text-muted-foreground italic">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Instruction;
