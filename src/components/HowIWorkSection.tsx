
import React from 'react';

const HowIWorkSection = () => {
  const tools = [
    "регрессивную гипнотерапию",
    "внимание и тишину", 
    "опыт, а не теорию"
  ];

  return (
    <section className="py-20 bg-warm-green/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-warm-text mb-12">
              Как я работаю
            </h2>
          </div>

          {/* Философия */}
          <div className="mb-12 animate-on-scroll">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
              <p className="text-xl md:text-2xl text-warm-text mb-6 font-medium">
                Я не психолог, не коуч, не шаман.
              </p>
              <p className="text-lg md:text-xl text-warm-text/80 mb-4">
                Я прошёл через это сам — страх, обнуление, потерю смысла.
              </p>
              <p className="text-lg md:text-xl text-warm-accent font-semibold">
                И теперь сопровождаю других.
              </p>
            </div>
          </div>

          {/* Инструменты */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl md:text-3xl font-semibold text-warm-text mb-8">
              В работе использую:
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="bg-warm-accent/10 p-6 rounded-xl border border-warm-accent/20 hover:border-warm-accent/40 transition-all duration-300 animate-on-scroll"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <p className="text-lg font-medium text-warm-text">{tool}</p>
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
