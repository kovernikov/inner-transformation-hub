
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
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-warm-blue/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-warm-green/10 to-transparent rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-text mb-12 transform transition-all duration-500 hover:scale-105">
            Что я <span className="text-warm-accent relative inline-block">
              делаю
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-warm-accent to-warm-blue transform scale-x-0 transition-transform duration-700 hover:scale-x-100"></div>
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Кому помогаю */}
          <div className="mb-16 animate-on-scroll">
            <h3 className="text-2xl md:text-3xl font-semibold text-warm-text mb-8 text-center transform transition-all duration-300 hover:text-warm-accent">
              Я работаю с людьми, которые:
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {issues.map((issue, index) => (
                <div 
                  key={index}
                  className="bg-warm-green/10 p-6 rounded-xl border-l-4 border-warm-accent animate-on-scroll transform transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-warm-green/20 group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-lg text-warm-text group-hover:text-warm-text/90 transition-colors duration-300">{issue}</p>
                  <div className="w-0 h-0.5 bg-warm-accent group-hover:w-full transition-all duration-500 mt-2"></div>
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
                  className="text-center p-8 bg-gradient-to-r from-warm-blue/5 to-warm-green/5 rounded-xl animate-on-scroll transform transition-all duration-500 hover:shadow-xl hover:scale-105 hover:from-warm-blue/10 hover:to-warm-green/10 group relative overflow-hidden"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-warm-accent/5 to-warm-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <p className="text-lg text-warm-text/70 mb-3 relative z-10 transform transition-all duration-300 group-hover:text-warm-text group-hover:scale-105">
                    {approach.instead} —
                  </p>
                  <p className="text-xl font-medium text-warm-text relative z-10 transform transition-all duration-300 group-hover:text-warm-accent group-hover:scale-105">
                    {approach.give}
                  </p>
                  <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-warm-accent group-hover:w-full group-hover:left-0 transition-all duration-500"></div>
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
