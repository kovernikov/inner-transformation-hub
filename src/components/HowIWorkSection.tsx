
import React from 'react';

const HowIWorkSection = () => {
  const tools = [
    {
      name: "регрессивную гипнотерапию",
      icon: "🧠"
    },
    {
      name: "внимание и тишину",
      icon: "🤫"
    },
    {
      name: "опыт, а не теорию",
      icon: "💫"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-warm-text mb-12 animate-pulse-subtle">
              Как <span className="text-warm-accent relative inline-block">
                работаю
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-warm-accent to-warm-green"></div>
              </span>
            </h2>
          </div>

          {/* Философия */}
          <div className="mb-12 animate-on-scroll">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg animate-pulse-subtle">
              <p className="text-xl md:text-2xl text-warm-text mb-6 font-medium">
                Помощь без наставничества.
              </p>
              <p className="text-lg md:text-xl text-warm-text/80 mb-4">
                Поддержка без давления.
              </p>
              <p className="text-lg md:text-xl text-warm-accent font-semibold">
                Путь без шаблонов — только внутренняя честность и внимание.
              </p>
            </div>
          </div>

          {/* Инструменты */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl md:text-3xl font-semibold text-warm-text mb-8 animate-pulse-subtle">
              В работе использую:
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="bg-warm-accent/10 p-8 rounded-xl border border-warm-accent/20 animate-on-scroll animate-pulse-subtle"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="text-3xl mb-4">
                    {tool.icon}
                  </div>
                  <p className="text-lg font-medium text-warm-text">
                    {tool.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIWorkSection;
