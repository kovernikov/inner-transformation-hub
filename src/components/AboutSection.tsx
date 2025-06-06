
import React from 'react';

const AboutSection = () => {
  const clientQuestions = [
    "Не понимаю, чего хочу от жизни. Вроде всё есть, а внутри пусто.",
    "Постоянное напряжение и тревога. Всё контролирую, но не могу расслабиться.",
    "Устал подстраиваться под других. Не чувствую, что живу своей жизнью.",
    "Застрял в прошлом. Возвращаюсь мыслями к обидам и ситуациям, которые уже не изменить.",
    "Хочу понять, кто я без ролей, обязательств и ожиданий.",
    "Страх отпустить. Боюсь, что если перестану держать, всё развалится.",
    "Хочу жить для себя, но не знаю с чего начать."
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* SEO-блок с вопросами */}
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-2xl md:text-3xl font-semibold text-warm-text mb-8 animate-pulse-subtle">
              С чем приходят ко мне
            </h2>
            <div className="space-y-4">
              {clientQuestions.map((question, index) => (
                <div 
                  key={index}
                  className="bg-white/80 p-4 rounded-xl border border-warm-accent/20 text-left animate-on-scroll animate-pulse-subtle"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-warm-text/80 text-sm md:text-base leading-relaxed">
                    — {question}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Ответ */}
          <div className="text-center animate-on-scroll animate-pulse-subtle" style={{ animationDelay: '0.8s' }}>
            <div className="bg-warm-accent/10 p-6 md:p-8 rounded-2xl border border-warm-accent/20">
              <p className="text-lg md:text-xl text-warm-text mb-4 font-medium">
                Если узнаёшь себя в этих вопросах — давай встретимся.
              </p>
              <p className="text-base md:text-lg text-warm-text/80">
                Без готовых ответов. Через внимание к тому, что происходит внутри.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
