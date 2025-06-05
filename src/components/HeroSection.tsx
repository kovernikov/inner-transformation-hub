import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-transparent">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-scale-in">
            <img 
              src="https://cdn.openai.com/chat-assets/user-uploads/f7d7f514-b23f-4f8a-867b-c08730a60a4b/file-BMiLV5RRgKmoFosGquGeTE.jpg"
              alt="Алексей Коверников"
              className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full object-cover shadow-2xl border-4 border-white/80 transition-all duration-500 hover:scale-110 hover:shadow-3xl"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-warm-text mb-6 animate-fade-in leading-tight">
            Точка, после которой ты не вернёшься в старое
          </h1>

          <p className="text-xl md:text-2xl text-warm-text/80 mb-8 animate-slide-up font-medium max-w-2xl mx-auto">
            Помогаю собрать себя заново. Без жалости. С пониманием.
          </p>

          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-warm-accent hover:bg-warm-accent/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-scale-in"
          >
            Начать путь
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
