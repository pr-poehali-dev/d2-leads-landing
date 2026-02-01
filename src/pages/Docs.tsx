import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const docSections = [
  {
    title: "Начало работы",
    items: ["Регистрация", "Получение токена", "Первая интеграция"],
  },
  {
    title: "Интеграция",
    items: ["JavaScript SDK", "NPM пакет", "Прямые API запросы"],
  },
  {
    title: "Настройка",
    items: ["Конфигурация форм", "Кастомизация", "Webhook"],
  },
  {
    title: "API Reference",
    items: ["Endpoints", "Параметры", "Примеры"],
  },
];

const Docs = () => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="flex">
          <aside className="hidden lg:block w-64 bg-white border-r border-emerald-100 min-h-[calc(100vh-4rem)] sticky top-16">
            <div className="p-6">
              <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors text-sm">
                <Icon name="ArrowLeft" className="w-4 h-4" />
                Главная
              </Link>

              <nav className="space-y-6">
                {docSections.map((section, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-secondary mb-3 text-sm uppercase tracking-wider">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <button
                            onClick={() => setActiveSection(index * 10 + itemIndex)}
                            className={`text-sm transition-colors w-full text-left px-3 py-2 rounded-lg ${
                              activeSection === index * 10 + itemIndex
                                ? "bg-primary/10 text-primary font-medium"
                                : "text-muted-foreground hover:text-secondary"
                            }`}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          <div className="flex-1 bg-gradient-to-b from-white to-emerald-50/30">
            <div className="container px-4 lg:px-12 py-12 max-w-4xl">
              <div className="mb-8 lg:hidden">
                <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-4 transition-colors">
                  <Icon name="ArrowLeft" className="w-4 h-4" />
                  Назад на главную
                </Link>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
                Документация
              </h1>
              
              <p className="text-lg text-muted-foreground mb-12">
                Полное руководство по работе с D2 Leads API
              </p>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 mb-6">
                <h2 className="text-2xl font-bold mb-4 text-secondary">
                  Введение
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 mb-6">
                <h2 className="text-2xl font-bold mb-4 text-secondary">
                  Быстрый старт
                </h2>
                <div className="bg-secondary/5 rounded-lg p-4 mb-4 font-mono text-sm">
                  <code className="text-primary">
                    npm install d2-leads-sdk
                  </code>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100">
                <h2 className="text-2xl font-bold mb-4 text-secondary">
                  Примеры использования
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Интеграция с React приложением</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Использование на статических сайтах</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Настройка webhook для уведомлений</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Docs;
