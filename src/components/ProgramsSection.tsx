
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Calendar, Star } from 'lucide-react';

const ProgramsSection = () => {
  const programs = [
    {
      title: "Пробуждение",
      description: "7-недельная программа",
      price: "1500€",
      features: [
        "7 недель интенсивной работы",
        "Еженедельные сессии",
        "Базовые техники трансформации",
        "Поддержка в чате",
        "Персональный план"
      ],
      popular: false
    },
    {
      title: "Трансформация",
      description: "14-недельная программа",
      price: "2500€",
      features: [
        "14 недель интенсивной работы",
        "Индивидуальные сессии",
        "Продвинутые техники",
        "Круглосуточная поддержка",
        "Детальная проработка"
      ],
      popular: true
    },
    {
      title: "Перепрошивка",
      description: "25 сессий",
      price: "4500€",
      features: [
        "Комплексная перепрошивка",
        "Глубокая работа с подсознанием",
        "Авторские методики",
        "VIP поддержка 24/7",
        "Гарантия результата"
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll animate-pulse-subtle">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-text mb-6">
            Программы трансформации
          </h2>
          <p className="text-xl text-warm-text/70 max-w-3xl mx-auto">
            Выберите формат, который подходит именно вам. Каждая программа — это путь к новой версии себя.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl p-8 transition-all duration-300 hover:shadow-xl group animate-on-scroll animate-pulse-subtle ${
                program.popular ? 'ring-2 ring-warm-accent shadow-xl' : 'shadow-lg'
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
                <h3 className="text-2xl font-bold text-warm-text mb-3">
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
                    ? 'bg-warm-accent hover:bg-warm-accent/90 text-white' 
                    : 'bg-warm-text hover:bg-warm-accent text-white'
                }`}
              >
                Записаться на консультацию
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll animate-pulse-subtle">
          <div className="bg-white rounded-3xl p-6 max-w-4xl mx-auto shadow-lg">
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

        {/* Блок "Я — Алексей Коверников" */}
        <div className="text-center mt-12 animate-on-scroll animate-pulse-subtle">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-warm-text mb-6">
              Я — <span className="text-warm-accent">Алексей Коверников</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-medium text-warm-accent mb-6">
              Проводник внутренней трансформации
            </h3>
            <div className="text-xl text-warm-text/70 max-w-2xl mx-auto space-y-4">
              <p>
                Помогаю тем, кто чувствует, что живёт не своей жизнью.
              </p>
              <p>
                <span className="font-semibold">Без теорий. Без манипуляций. По-настоящему.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
