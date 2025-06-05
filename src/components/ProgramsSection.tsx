
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ProgramsSection = () => {
  const programs = [
    {
      title: "7 недель",
      price: "1500€",
      description: "Интенсивная программа для быстрого старта трансформации. Основы работы с подсознанием и первые глубокие изменения.",
      features: ["Еженедельные сессии", "Персональный план", "Поддержка 24/7"]
    },
    {
      title: "14 недель",
      price: "2500€",
      description: "Углубленная работа с глубинными паттернами. Полная перестройка внутренних установок и создание новой личности.",
      features: ["Глубокая диагностика", "Работа с травмами", "Новые навыки жизни"],
      popular: true
    },
    {
      title: "Перепрошивка",
      price: "4500€",
      description: "Комплексная трансформация личности. Полное обновление всех жизненных сфер и создание новой реальности.",
      features: ["VIP поддержка", "Индивидуальный подход", "Гарантия результата"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-text mb-6">
            Программы трансформации
          </h2>
          <p className="text-xl text-warm-text/70 max-w-2xl mx-auto">
            Выберите свой путь к новой жизни. Каждая программа — это глубокое погружение в себя с гарантированным результатом.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className={`relative transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-on-scroll ${
                program.popular ? 'border-warm-accent border-2 shadow-xl' : 'border-gray-200'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {program.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-warm-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Популярный выбор
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-warm-text mb-2">
                  {program.title}
                </CardTitle>
                <div className="text-4xl font-bold text-warm-accent mb-4">
                  {program.price}
                </div>
                <CardDescription className="text-warm-text/70 leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-warm-text/80">
                      <div className="w-2 h-2 bg-warm-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
