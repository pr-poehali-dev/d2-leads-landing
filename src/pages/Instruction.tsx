import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

type InstructionType = "ai" | "developer" | null;

const Instruction = () => {
  const [selectedType, setSelectedType] = useState<InstructionType>(null);

  if (selectedType === "ai") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-24 bg-gradient-to-b from-white to-emerald-50/30">
          <div className="container px-4 mx-auto max-w-4xl">
            <button
              onClick={() => setSelectedType(null)}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
            >
              <Icon name="ArrowLeft" className="w-4 h-4" />
              Назад к выбору
            </button>

            <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <Icon name="Lightbulb" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-secondary mb-2">Инструкция для ИИ</h3>
                  <p className="text-muted-foreground text-sm">
                    Используйте готовый промпт для быстрой интеграции D2 Leads на сайт, созданный с помощью нейросетей
                  </p>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
              Интеграция с помощью ИИ
            </h1>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground leading-relaxed">
                Если вы создаёте сайт с помощью ChatGPT, Claude, Юры или других ИИ-ассистентов, 
                просто скопируйте промпт ниже и отправьте его вместе с кодом вашего сайта. 
                ИИ автоматически добавит форму и настроит отправку заявок в Telegram.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-8 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-secondary">Готовый промпт</h2>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      "Добавь на мой сайт форму для сбора заявок с интеграцией D2 Leads. Форма должна содержать поля: имя, телефон, email (опционально). При отправке формы данные должны отправляться POST-запросом на https://api.d2leads.ru/v1/submit с токеном YOUR_TOKEN_HERE в заголовке Authorization. После успешной отправки показывай уведомление 'Спасибо! Мы свяжемся с вами в ближайшее время'. Сделай форму адаптивной и стильной, соответствующей дизайну сайта."
                    );
                  }}
                >
                  <Icon name="Copy" className="w-4 h-4 mr-2" />
                  Копировать
                </Button>
              </div>
              
              <div className="bg-secondary/5 rounded-lg p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                <p className="text-secondary whitespace-pre-wrap">
                  Добавь на мой сайт форму для сбора заявок с интеграцией D2 Leads. 
                  
Форма должна содержать поля: имя, телефон, email (опционально). 

При отправке формы данные должны отправляться POST-запросом на https://api.d2leads.ru/v1/submit с токеном YOUR_TOKEN_HERE в заголовке Authorization. 

После успешной отправки показывай уведомление "Спасибо! Мы свяжемся с вами в ближайшее время". 

Сделай форму адаптивной и стильной, соответствующей дизайну сайта.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-8">
              <h3 className="text-xl font-bold mb-4 text-secondary flex items-center gap-2">
                <Icon name="ListOrdered" className="w-5 h-5 text-primary" />
                Пошаговая инструкция
              </h3>
              
              <ol className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <span>Получите токен в Telegram-боте @d2leads_bot</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <span>Замените YOUR_TOKEN_HERE в промпте на ваш реальный токен</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <span>Скопируйте промпт и отправьте его вашему ИИ-ассистенту вместе с кодом сайта</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <span>ИИ добавит форму на сайт и настроит отправку заявок</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                  <span>Готово! Теперь все заявки будут приходить вам в Telegram</span>
                </li>
              </ol>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  if (selectedType === "developer") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-24 bg-gradient-to-b from-white to-emerald-50/30">
          <div className="container px-4 mx-auto max-w-4xl">
            <button
              onClick={() => setSelectedType(null)}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
            >
              <Icon name="ArrowLeft" className="w-4 h-4" />
              Назад к выбору
            </button>

            <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <Icon name="Code2" className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-secondary mb-2">Инструкция для разработчиков</h3>
                  <p className="text-muted-foreground text-sm">
                    Техническая документация для программной интеграции D2 Leads API
                  </p>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
              Интеграция для разработчиков
            </h1>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground leading-relaxed">
                Вы можете интегрировать D2 Leads двумя способами: через официальный SDK 
                или напрямую через REST API. Выберите подходящий вариант в зависимости 
                от вашего стека технологий.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Package" className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary">NPM пакет</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Готовый SDK для быстрой интеграции в JavaScript/TypeScript проекты
                </p>
                <div className="bg-secondary/5 rounded-lg p-3 font-mono text-xs mb-4">
                  npm install d2-leads-sdk
                </div>
                <Link to="/docs">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    Документация SDK
                    <Icon name="ExternalLink" className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Webhook" className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary">REST API</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Прямые HTTP-запросы для интеграции на любом языке программирования
                </p>
                <div className="bg-secondary/5 rounded-lg p-3 font-mono text-xs mb-4">
                  POST api.d2leads.ru/v1/submit
                </div>
                <Link to="/docs">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    API Reference
                    <Icon name="ExternalLink" className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-8">
              <h3 className="text-xl font-bold mb-4 text-secondary">Быстрый старт</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-secondary">1. Получите токен</h4>
                  <p className="text-muted-foreground text-sm">
                    Зарегистрируйтесь в Telegram-боте @d2leads_bot и получите уникальный токен для вашего сайта
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-secondary">2. Установите SDK (опционально)</h4>
                  <div className="bg-secondary/5 rounded-lg p-4 font-mono text-sm mb-2">
                    npm install d2-leads-sdk
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Или используйте прямые API запросы, если SDK не подходит для вашего стека
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-secondary">3. Интегрируйте в проект</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Создайте форму и отправляйте данные на наш endpoint:
                  </p>
                  <div className="bg-secondary/5 rounded-lg p-4 font-mono text-xs overflow-x-auto">
                    <code className="text-secondary whitespace-pre-wrap">
{`fetch('https://api.d2leads.ru/v1/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN'
  },
  body: JSON.stringify({
    name: 'Иван Иванов',
    phone: '+79991234567',
    email: 'ivan@example.com'
  })
});`}
                    </code>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-4">
                  <p className="text-sm text-secondary">
                    <Icon name="BookOpen" className="w-4 h-4 inline mr-2" />
                    Полная документация с примерами для разных языков и фреймворков доступна в разделе{" "}
                    <Link to="/docs" className="text-primary hover:underline font-medium">
                      Документация
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-24 bg-gradient-to-b from-white to-emerald-50/30">
        <div className="container px-4 mx-auto max-w-5xl">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
            <Icon name="ArrowLeft" className="w-4 h-4" />
            Назад на главную
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary text-center">
            Инструкция по подключению
          </h1>

          <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            D2 Leads подойдет для любого типа разработки — от сайтов на конструкторах и ИИ до сложных веб-приложений. 
            Выберите подходящий вариант инструкции:
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedType("ai")}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-emerald-100 hover:border-primary group text-left"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Bot" className="w-8 h-8 text-primary" />
              </div>
              
              <h2 className="text-2xl font-bold mb-4 text-secondary group-hover:text-primary transition-colors">
                Для использования с ИИ
              </h2>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Создаёте сайт с помощью ChatGPT, Claude, Юры или других ИИ-ассистентов? 
                Используйте готовый промпт для моментальной интеграции формы заявок.
              </p>

              <div className="flex items-center gap-2 text-primary font-medium">
                <span>Открыть инструкцию</span>
                <Icon name="ArrowRight" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
              
              <div className="mt-6 pt-6 border-t border-emerald-100">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Icon name="CheckCircle2" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Копируете промпт → Вставляете в чат с ИИ → Готово</span>
                </div>
              </div>
            </button>

            <button
              onClick={() => setSelectedType("developer")}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-emerald-100 hover:border-primary group text-left"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Code2" className="w-8 h-8 text-primary" />
              </div>
              
              <h2 className="text-2xl font-bold mb-4 text-secondary group-hover:text-primary transition-colors">
                Для разработчиков
              </h2>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Пишете код самостоятельно? Подключите D2 Leads через NPM-пакет или прямые 
                REST API запросы. Полная документация и примеры кода.
              </p>

              <div className="flex items-center gap-2 text-primary font-medium">
                <span>Открыть инструкцию</span>
                <Icon name="ArrowRight" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
              
              <div className="mt-6 pt-6 border-t border-emerald-100">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Icon name="CheckCircle2" className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>SDK для JS/TS или REST API для любого языка</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Instruction;
