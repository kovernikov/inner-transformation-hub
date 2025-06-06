
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-warm-beige via-warm-blue to-warm-green">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <div className="mb-12 animate-scale-in">
            <img 
              src="/lovable-uploads/80b0808d-bb31-4e54-aea7-b694b49ebe1b.png"
              alt="Алексей Коверников — проводник внутренней трансформации и специалист по гипнотерапии"
              className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full object-cover shadow-2xl border-4 border-white/80 transition-all duration-500 hover:scale-105 hover:shadow-3xl"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-warm-text mb-8 animate-fade-in leading-tight font-sans">
            Помогаю понять, чего ты хочешь на самом деле
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl text-warm-text/90 font-medium mb-12 animate-slide-up leading-relaxed max-w-3xl mx-auto">
            Снаружи всё вроде нормально,<br />
            а внутри — усталость, тревога, пустота.<br />
            Чувство, что ты живёшь не свою жизнь.<br /><br />
            Мы встретимся, чтобы это изменить.
          </h2>

          <p className="text-lg md:text-xl text-warm-text/80 mb-12 animate-slide-up leading-relaxed max-w-2xl mx-auto">
            📍 Без манипуляций. Через внимание, гипнотерапию и прямой разговор.
          </p>

          <Button 
            onClick={scrollToContact}
            className="bg-warm-accent/90 hover:bg-warm-accent text-white px-12 py-6 text-xl font-medium rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-scale-in border-none backdrop-blur-sm"
            aria-label="Связаться с Алексеем Коверниковым для начала трансформации"
          >
            Начать путь
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
