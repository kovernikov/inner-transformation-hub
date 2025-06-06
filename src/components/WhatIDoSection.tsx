import React from 'react';

const WhatIDoSection = () => {
  const issues = [
    "застряли в отношениях и не могут выбраться",
    "живут чужими ожиданиями", 
    "устали от чувства вины, страха, одиночества",
    "хотят вернуть силу, но не знают, с чего начать"
  ];

  const approaches = [
    {
      instead: "Вместо готовых ответов",
      give: "я даю пространство, где можно услышать себя"
    },
    {
      instead: "Вместо мотивации",
      give: "честный взгляд вглубь"
    },
    {
      instead: "Вместо рецептов",
      give: "твоё настоящее решение"
    }
  ];

  return (
    <section className="py-8" style={{
      background: 'linear-gradient(135deg, #F5F2E8 0%, #E8F4F8 50%, #E8F5E8 100%)'
    }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 animate-on-scroll animate-pulse-subtle">
          <h2 className="text-3xl md:text-4xl font-bold text-warm-text mb-6 animate-pulse-subtle">
            Что я <span className="text-warm-accent relative inline-block">
              делаю
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-warm-accent to-warm-blue"></div>
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Кому помогаю */}
          <div className="mb-8 animate-on-scroll animate-pulse-subtle">
            <h3 className="text-xl md:text-2xl font-semibold text-warm-text mb-4 text-center animate-pulse-subtle">
              Я работаю с людьми, которые:
            </h3>
            <div className="grid md:grid-cols-2 gap-3 max-w-3xl mx-auto">
              {issues.map((issue, index) => (
                <div 
                  key={index}
                  className="bg-warm-green/10 p-3 rounded-xl border-l-4 border-warm-accent animate-on-scroll animate-pulse-subtle"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-sm text-warm-text">{issue}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Подход */}
          <div className="animate-on-scroll animate-pulse-subtle" style={{ animationDelay: '0.5s' }}>
            <div className="grid md:grid-cols-1 gap-4 max-w-2xl mx-auto">
              {approaches.map((approach, index) => (
                <div 
                  key={index}
                  className="text-center p-4 bg-gradient-to-r from-warm-blue/5 to-warm-green/5 rounded-xl animate-on-scroll animate-pulse-subtle"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <p className="text-sm text-warm-text/70 mb-1">
                    {approach.instead} —
                  </p>
                  <p className="text-base font-medium text-warm-text">
                    {approach.give}
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

export default WhatIDoSection;
