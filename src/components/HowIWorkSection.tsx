
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
    <section className="py-20 bg-gradient-to-b from-warm-green/5 via-warm-green/10 to-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-warm-accent/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 left-20 w-32 h-32 bg-warm-blue/15 rounded-full blur-lg animate-float"></div>
      <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-warm-green/20 rounded-full blur-md animate-float" style={{animationDelay: '1.5s'}}></div>

      {/* Плавный переход к следующему блоку */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-warm-text mb-12 transform transition-all duration-500 hover:scale-105">
              Как я <span className="text-warm-accent relative inline-block">
                работаю
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-warm-accent to-warm-green transform scale-x-0 transition-transform duration-700 hover:scale-x-100"></div>
              </span>
            </h2>
          </div>

          {/* Философия */}
          <div className="mb-12 animate-on-scroll">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:scale-105 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-warm-accent/5 to-warm-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="text-xl md:text-2xl text-warm-text mb-6 font-medium relative z-10 transform transition-all duration-300 group-hover:text-warm-accent">
                Я не психолог, не коуч, не шаман.
              </p>
              <p className="text-lg md:text-xl text-warm-text/80 mb-4 relative z-10 transform transition-all duration-300 group-hover:text-warm-text group-hover:scale-105">
                Я прошёл через это сам — страх, обнуление, потерю смысла.
              </p>
              <p className="text-lg md:text-xl text-warm-accent font-semibold relative z-10 transform transition-all duration-300 group-hover:scale-105">
                И теперь сопровождаю других.
              </p>
              <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-warm-accent group-hover:w-full group-hover:left-0 transition-all duration-700"></div>
            </div>
          </div>

          {/* Инструменты */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl md:text-3xl font-semibold text-warm-text mb-8 transform transition-all duration-300 hover:text-warm-accent">
              В работе использую:
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="bg-warm-accent/10 p-8 rounded-xl border border-warm-accent/20 hover:border-warm-accent/40 transition-all duration-300 animate-on-scroll transform hover:scale-110 hover:shadow-xl group relative overflow-hidden cursor-pointer"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-warm-accent/5 to-warm-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-3xl mb-4 transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 relative z-10">
                    {tool.icon}
                  </div>
                  <p className="text-lg font-medium text-warm-text relative z-10 transform transition-all duration-300 group-hover:text-warm-accent">
                    {tool.name}
                  </p>
                  <div className="absolute bottom-0 left-0 w-full h-0 bg-warm-accent/20 group-hover:h-full transition-all duration-500 -z-10"></div>
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-warm-accent/30 group-hover:border-l-16 group-hover:border-b-16 transition-all duration-300"></div>
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
