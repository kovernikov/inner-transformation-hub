
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Градиентный фон с плавным переходом */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-beige via-warm-blue/30 to-warm-green/30"></div>
      
      {/* Анимированные элементы */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-warm-accent/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-warm-accent/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-warm-accent/15 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Градиент для плавного перехода к следующему блоку */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-warm-beige/80 z-20"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Фото Алексея */}
          <div className="mb-8 animate-scale-in">
            <img 
              src="https://cdn.openai.com/chat-assets/user-uploads/f7d7f514-b23f-4f8a-867b-c08730a60a4b/file-BMiLV5RRgKmoFosGquGeTE.jpg"
              alt="Алексей Коверников"
              className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full object-cover shadow-2xl border-4 border-white/50 transition-all duration-500 hover:scale-110 hover:shadow-3xl"
            />
          </div>

          {/* Заголовок */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-warm-text mb-6 animate-fade-in leading-tight">
            Точка, после которой ты не вернёшься в старое
          </h1>

          {/* Подзаголовок */}
          <p className="text-xl md:text-2xl text-warm-text/80 mb-8 animate-slide-up font-medium max-w-2xl mx-auto">
            Помогаю собрать себя заново. Без жалости. С пониманием.
          </p>

          {/* Кнопка */}
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
