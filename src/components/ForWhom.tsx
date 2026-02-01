const categories = [
  "Малый бизнес",
  "Ремонт",
  "Салоны красоты",
  "Автосервисы",
  "Недвижимость",
  "Онлайн-курсы",
  "Фрилансеры и студии",
  "Юристы",
  "Веб-студии",
  "Дизайн-студии",
  "Туризм",
  "Услуги",
  "Маркетинговые агентства",
  "SMM",
  "Психологи",
  "Тренинги",
  "Репетиторы",
  "Обучение",
  "Онлайн-школы",
];

const ForWhom = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-secondary">
          Для кого
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-emerald-50/50 to-white border border-emerald-100 rounded-xl p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <span className="text-sm md:text-base font-medium text-secondary group-hover:text-primary transition-colors">
                {category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
