
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-text mb-12">
            Что я делаю
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Кому помогаю */}
          <div className="mb-16 animate-on-scroll">
            <h3 className="text-2xl md:text-3xl font-semibold text-warm-text mb-8 text-center">
              Я работаю с людьми, которые:
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {issues.map((issue, index) => (
                <div 
                  key={index}
                  className="bg-warm-green/10 p-6 rounded-xl border-l-4 border-warm-accent animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-lg text-warm-text">{issue}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Подход */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.5s' }}>
            <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
              {approaches.map((approach, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-warm-blue/5 rounded-xl animate-on-scroll"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <p className="text-lg text-warm-text/70 mb-2">{approach.instead} —</p>
                  <p className="text-xl font-medium text-warm-text">{approach.give}</p>
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
