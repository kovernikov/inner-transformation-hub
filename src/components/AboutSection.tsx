
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-warm-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-text mb-6">
            Я — <span className="text-warm-accent">Алексей Коверников</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-medium text-warm-accent mb-8">
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

        <div className="text-center animate-on-scroll" style={{ animationDelay: '0.3s' }}>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-warm-accent hover:bg-warm-accent/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Хочу узнать больше
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
