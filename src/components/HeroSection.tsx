
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
      background: 'linear-gradient(135deg, #F5F2E8 0%, #E8F4F8 50%, #E8F5E8 100%)'
    }}>
      {/* Добавляем текстуру через псевдоэлемент */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-on-scroll animate-pulse-subtle">
          <div className="mb-12 animate-scale-in">
            <img 
              src="/lovable-uploads/80b0808d-bb31-4e54-aea7-b694b49ebe1b.png"
              alt="Алексей Коверников — проводник внутренней трансформации и специалист по гипнотерапии"
              className="w-56 h-56 md:w-72 md:h-72 mx-auto rounded-full object-cover shadow-2xl border-4 border-white/80 transition-all duration-500 hover:scale-105 hover:shadow-3xl"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(74, 144, 164, 0.3))'
              }}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-warm-text mb-8 animate-fade-in leading-tight font-sans"
              style={{
                textShadow: '0 0 20px rgba(74, 144, 164, 0.4), 0 0 40px rgba(74, 144, 164, 0.3), 0 0 60px rgba(74, 144, 164, 0.2)',
                filter: 'drop-shadow(0 0 10px rgba(74, 144, 164, 0.5))'
              }}>
            Помогаю понять, чего ты хочешь на самом деле
          </h1>

          <h2 className="text-lg md:text-xl lg:text-2xl text-warm-text/90 font-medium mb-12 animate-slide-up leading-relaxed max-w-3xl mx-auto">
            Чувствуешь, что живёшь не своей жизнью?<br />
            Постоянное напряжение, контроль, тревога?<br />
            Не понимаешь, чего хочешь — но знаешь точно, что больше так не хочешь.<br />
            Мы встретимся, чтобы это изменить.
          </h2>

          <p className="text-lg md:text-xl text-warm-text/80 mb-12 animate-slide-up leading-relaxed max-w-2xl mx-auto">
            Без манипуляций. Через внимание, гипнотерапию и прямой разговор.
          </p>

          <Button 
            onClick={scrollToContact}
            className="text-white px-16 py-8 text-xl font-medium rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:translate-y-[-2px] animate-scale-in border-none backdrop-blur-sm"
            style={{
              backgroundColor: '#4A90A4',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#3A7A94';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#4A90A4';
            }}
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
