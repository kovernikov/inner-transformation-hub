
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Calendar, Star } from 'lucide-react';

const ProgramsSection = () => {
  const programs = [
    {
      title: "Перепрошивка за 14 недель",
      description: "Глубокая трансформация личности через авторскую методику",
      price: "от 150 000 ₽",
      features: [
        "14 недель интенсивной работы",
        "Индивидуальные сессии гипнотерапии",
        "Персональная программа развития",
        "Круглосуточная поддержка",
        "Гарантия результата"
      ],
      popular: true
    },
    {
      title: "Индивидуальная терапия",
      description: "Решение конкретных проблем и запросов",
      price: "от 8 000 ₽ за сессию",
      features: [
        "Персональный подход",
        "Гибкий график встреч",
        "Различные методики",
        "Быстрые результаты",
        "Конфиденциальность"
      ],
      popular: false
    },
    {
      title: "Групповые программы",
      description: "Работа в малых группах для максимального эффекта",
      price: "от 25 000 ₽",
      features: [
        "До 8 человек в группе",
        "Еженедельные встречи",
        "Поддержка участников",
        "Обмен опытом",
        "Доступная цена"
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-32 bg-gradient-to-b from-warm-beige via-white to-warm-green/20 overflow-hidden">
      {/* Плавный переход сверху */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-warm-beige/90 to-transparent z-10"></div>
      
      {/* Декоративные элементы для глубины */}
      <div className="absolute top-20 right-16 w-40 h-40 bg-warm-accent/8 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 left-20 w-32 h-32 bg-warm-blue/15 rounded-full blur-2xl animate-float"></div>
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-warm-green/20 rounded-full blur-xl animate-float" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-warm-accent/10 rounded-full blur-lg animate-float" style={{animationDelay: '2.5s'}}></div>

      {/* Улучшенный плавный переход снизу */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-warm-green/10 to-warm-beige/60 z-10"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-text mb-6">
            Программы работы
          </h2>
          <p className="text-xl text-warm-text/70 max-w-3xl mx-auto">
            Выберите формат, который подходит именно вам. Каждая программа — это путь к новой версии себя.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <div 
              key={index}
              className={`relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-white group animate-on-scroll ${
                program.popular ? 'ring-2 ring-warm-accent shadow-2xl transform scale-105' : 'shadow-xl'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {program.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-warm-accent text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Популярное
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-warm-text mb-3 group-hover:text-warm-accent transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="text-warm-text/70 mb-6">
                  {program.description}
                </p>
                <div className="text-3xl font-bold text-warm-accent">
                  {program.price}
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {program.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-warm-text/80">
                    <CheckCircle className="w-5 h-5 text-warm-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={scrollToContact}
                className={`w-full py-4 text-lg font-semibold rounded-2xl transition-all duration-300 ${
                  program.popular 
                    ? 'bg-warm-accent hover:bg-warm-accent/90 text-white shadow-lg hover:shadow-xl transform hover:scale-105' 
                    : 'bg-warm-text hover:bg-warm-text/90 text-white hover:bg-warm-accent hover:shadow-lg'
                }`}
              >
                Записаться на консультацию
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-warm-accent" />
                <div>
                  <div className="text-2xl font-bold text-warm-text">500+</div>
                  <div className="text-warm-text/70">довольных клиентов</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-8 h-8 text-warm-accent" />
                <div>
                  <div className="text-2xl font-bold text-warm-text">5+</div>
                  <div className="text-warm-text/70">лет практики</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-8 h-8 text-warm-accent" />
                <div>
                  <div className="text-2xl font-bold text-warm-text">4.9</div>
                  <div className="text-warm-text/70">средняя оценка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
