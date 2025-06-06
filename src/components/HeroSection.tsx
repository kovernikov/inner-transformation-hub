
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const helps = [
    "выйти из эмоциональной боли, стыда и внутреннего напряжения",
    "перестать жить чужими сценариями", 
    "вернуть себе опору и внутреннюю ясность"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-transparent">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-pulse-subtle">
          <div className="mb-8 animate-scale-in">
            <img 
              src="/lovable-uploads/80b0808d-bb31-4e54-aea7-b694b49ebe1b.png"
              alt="Алексей Коверников — проводник внутренней трансформации и специалист по гипнотерапии"
              className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full object-cover shadow-2xl border-4 border-white/80 transition-all duration-500 hover:scale-110 hover:shadow-3xl"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              style={{ 
                imageRendering: 'crisp-edges',
                contentVisibility: 'auto'
              }}
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-warm-text mb-6 animate-fade-in leading-tight">
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-warm-accent/10 blur-md rounded-lg shadow-warm-accent/20 shadow-2xl"></span>
              <span className="relative drop-shadow-sm">Точка, после которой ты не вернёшься в старое</span>
            </span>
          </h1>

          <div className="mb-8 animate-slide-up">
            <h2 className="text-2xl md:text-3xl font-semibold text-warm-text mb-6">
              Помогаю:
            </h2>
            
            <div className="space-y-4 max-w-2xl mx-auto mb-6">
              {helps.map((help, index) => (
                <div 
                  key={index}
                  className="bg-warm-green/10 p-4 rounded-xl border-l-4 border-warm-accent animate-on-scroll animate-pulse-subtle text-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-lg text-warm-text">{help}</p>
                </div>
              ))}
            </div>

            <p className="text-xl md:text-2xl text-warm-text/80 font-medium">
              📍 Без манипуляций. Через внимание, гипнотерапию и прямой разговор.
            </p>
          </div>

          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-warm-accent hover:bg-warm-accent/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-scale-in"
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
