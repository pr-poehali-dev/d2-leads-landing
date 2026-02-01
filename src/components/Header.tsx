import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-emerald-100">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-secondary hover:text-primary transition-colors">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">D2</span>
            </div>
            D2 Leads
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-secondary hover:text-primary transition-colors font-medium">
              Как работает
            </a>
            <Link to="/instruction" className="text-secondary hover:text-primary transition-colors font-medium">
              Инструкция
            </Link>
            <Link to="/docs" className="text-secondary hover:text-primary transition-colors font-medium">
              Документация
            </Link>
            <a href="#pricing" className="text-secondary hover:text-primary transition-colors font-medium">
              Тарифы
            </a>
          </nav>

          <div className="hidden md:block">
            <Button className="gradient-bg text-white rounded-xl hover:shadow-lg transition-all">
              Подключить
              <Icon name="ArrowRight" className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} className="w-6 h-6 text-secondary" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-emerald-100 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a href="#how-it-works" className="text-secondary hover:text-primary transition-colors font-medium py-2">
                Как работает
              </a>
              <Link to="/instruction" className="text-secondary hover:text-primary transition-colors font-medium py-2">
                Инструкция
              </Link>
              <Link to="/docs" className="text-secondary hover:text-primary transition-colors font-medium py-2">
                Документация
              </Link>
              <a href="#pricing" className="text-secondary hover:text-primary transition-colors font-medium py-2">
                Тарифы
              </a>
              <Button className="gradient-bg text-white rounded-xl w-full mt-2">
                Подключить
                <Icon name="ArrowRight" className="ml-2 w-4 h-4" />
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
