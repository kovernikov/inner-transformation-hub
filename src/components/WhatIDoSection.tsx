
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll animate-pulse-subtle">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-text mb-8 animate-pulse-subtle">
            Что я <span className="text-warm-accent relative inline-block">
              делаю
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-warm-accent to-warm-blue"></div>
            </span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Кому помогаю */}
          <div className="mb-12 animate-on-scroll animate-pulse-subtle">
            <h3 className="text-2xl md:text-3xl font-semibold text-warm-text mb-6 text-center animate-pulse-subtle">
              Я работаю с людьми, которые:
            </h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {issues.map((issue, index) => (
                <div 
                  key={index}
                  className="bg-warm-green/10 p-4 rounded-xl border-l-4 border-warm-accent animate-on-scroll animate-pulse-subtle"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-base text-warm-text">{issue}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Подход */}
          <div className="animate-on-scroll animate-pulse-subtle" style={{ animationDelay: '0.5s' }}>
            <div className="grid md:grid-cols-1 gap-6 max-w-3xl mx-auto">
              {approaches.map((approach, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-gradient-to-r from-warm-blue/5 to-warm-green/5 rounded-xl animate-on-scroll animate-pulse-subtle"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <p className="text-base text-warm-text/70 mb-2">
                    {approach.instead} —
                  </p>
                  <p className="text-lg font-medium text-warm-text">
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
