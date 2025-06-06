
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Eye, Compass } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const helps = [
    {
      text: "выйти из эмоциональной боли, стыда и внутреннего напряжения",
      icon: Heart
    },
    {
      text: "перестать жить чужими сценариями",
      icon: Eye
    },
    {
      text: "вернуть себе опору и внутреннюю ясность",
      icon: Compass
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Текстурный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-beige via-warm-blue to-warm-green opacity-60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(232,244,248,0.3)_0%,transparent_50%)] bg-[radial-gradient(circle_at_70%_80%,rgba(232,245,232,0.2)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Фото */}
          <div className="mb-10 animate-scale-in">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-warm-accent/20 blur-2xl rounded-full scale-110"></div>
              <img 
                src="/lovable-uploads/80b0808d-bb31-4e54-aea7-b694b49ebe1b.png"
                alt="Алексей Коверников — проводник внутренней трансформации и специалист по гипнотерапии"
                className="relative w-44 h-44 md:w-56 md:h-56 mx-auto rounded-full object-cover shadow-2xl border-3 border-white/90 transition-all duration-700 hover:scale-105 hover:shadow-3xl"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>

          {/* Заголовок */}
          <div className="mb-12 animate-fade-in space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-warm-text leading-[1.2] tracking-tight">
              <span className="block mb-2 text-2xl md:text-3xl lg:text-4xl font-medium text-warm-text/80">
                Точка, после которой
              </span>
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-warm-accent/10 blur-lg rounded-xl"></span>
                <span className="relative bg-gradient-to-r from-warm-text to-warm-accent bg-clip-text text-transparent">
                  ты не вернёшься в старое
                </span>
              </span>
            </h1>
          </div>

          {/* Основной контент */}
          <div className="mb-12 animate-slide-up">
            <h2 className="text-xl md:text-2xl font-semibold text-warm-text mb-10 tracking-wide">
              Помогаю:
            </h2>
            
            {/* Путь из 3 пунктов */}
            <div className="max-w-4xl mx-auto mb-10">
              <div className="relative">
                {/* Соединительная линия */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-warm-accent/30 via-warm-accent/60 to-warm-accent/30 transform -translate-y-1/2"></div>
                
                <div className="grid md:grid-cols-3 gap-8 md:gap-4">
                  {helps.map((help, index) => {
                    const IconComponent = help.icon;
                    return (
                      <div 
                        key={index}
                        className="relative group animate-on-scroll"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        {/* Карточка */}
                        <div className="relative bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-warm-accent/20 transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-white/90">
                          
                          {/* Номер шага */}
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <div className="w-8 h-8 bg-warm-accent text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                              {index + 1}
                            </div>
                          </div>
                          
                          {/* Иконка */}
                          <div className="mb-4 flex justify-center">
                            <div className="w-12 h-12 bg-warm-accent/10 rounded-full flex items-center justify-center group-hover:bg-warm-accent/20 transition-colors">
                              <IconComponent className="w-6 h-6 text-warm-accent" />
                            </div>
                          </div>
                          
                          {/* Текст */}
                          <p className="text-base md:text-lg text-warm-text leading-relaxed font-medium">
                            {help.text}
                          </p>
                        </div>
                        
                        {/* Стрелка между элементами */}
                        {index < helps.length - 1 && (
                          <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                            <ArrowRight className="w-4 h-4 text-warm-accent/60" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Пояснение */}
            <div className="bg-warm-green/5 backdrop-blur-sm p-6 rounded-2xl border border-warm-green/20 max-w-3xl mx-auto mb-10">
              <p className="text-lg md:text-xl text-warm-text/90 font-medium leading-relaxed">
                📍 Без манипуляций. Через внимание, гипнотерапию и прямой разговор.
              </p>
            </div>
          </div>

          {/* Кнопка */}
          <div className="animate-scale-in">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="group relative bg-warm-accent/90 hover:bg-warm-accent text-white px-10 py-4 text-lg font-medium rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 border-warm-accent/20 hover:border-warm-accent/40"
              aria-label="Связаться с Алексеем Коверниковым для начала трансформации"
            >
              <span className="relative z-10 flex items-center gap-3">
                Начать путь
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              
              {/* Мягкое свечение */}
              <div className="absolute inset-0 bg-warm-accent rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
