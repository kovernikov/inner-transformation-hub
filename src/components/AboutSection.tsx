
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-text mb-6 transform transition-all duration-500 hover:scale-105">
            Я — <span className="text-warm-accent relative">
              Алексей Коверников
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-warm-accent to-warm-green transform scale-x-0 transition-transform duration-700 group-hover:scale-x-100"></div>
            </span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-medium text-warm-accent mb-8 animate-slide-up">
            <span className="inline-block transform transition-transform duration-300 hover:rotate-1">Проводник</span>{' '}
            <span className="inline-block transform transition-transform duration-300 hover:-rotate-1">внутренней</span>{' '}
            <span className="inline-block transform transition-transform duration-300 hover:rotate-1">трансформации</span>
          </h3>
          <div className="text-xl text-warm-text/70 max-w-2xl mx-auto space-y-2">
            <p className="transform transition-all duration-500 hover:text-warm-text hover:scale-105">
              Помогаю тем, кто чувствует, что живёт не своей жизнью.
            </p>
            <p className="transform transition-all duration-500 hover:text-warm-text hover:scale-105" style={{animationDelay: '0.2s'}}>
              <span className="inline-block transform transition-transform duration-300 hover:scale-110">Без теорий.</span>{' '}
              <span className="inline-block transform transition-transform duration-300 hover:scale-110">Без манипуляций.</span>{' '}
              <span className="inline-block transform transition-transform duration-300 hover:scale-110 text-warm-accent font-semibold">По-настоящему.</span>
            </p>
          </div>
        </div>

        <div className="text-center animate-on-scroll" style={{ animationDelay: '0.3s' }}>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-warm-accent hover:bg-warm-accent/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-rotate-1 group relative overflow-hidden"
          >
            <span className="relative z-10">Хочу узнать больше</span>
            <div className="absolute inset-0 bg-gradient-to-r from-warm-accent to-warm-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
