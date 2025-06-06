
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const AboutSection = () => {
  const clientQuestions = [
    {
      text: "Не понимаю, чего хочу от жизни. Вроде всё есть, а внутри пусто.",
      emoji: "🤔"
    },
    {
      text: "Постоянное напряжение и тревога. Всё контролирую, но не могу расслабиться.",
      emoji: "😰"
    },
    {
      text: "Устал подстраиваться под других. Не чувствую, что живу своей жизнью.",
      emoji: "😔"
    },
    {
      text: "Застрял в прошлом. Возвращаюсь мыслями к обидам и ситуациям, которые уже не изменить.",
      emoji: "🔄"
    },
    {
      text: "Хочу понять, кто я без ролей, обязательств и ожиданий.",
      emoji: "🪞"
    },
    {
      text: "Страх отпустить. Боюсь, что если перестану держать, всё развалится.",
      emoji: "😨"
    },
    {
      text: "Хочу жить для себя, но не знаю с чего начать.",
      emoji: "🌱"
    }
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
                  className="bg-white/80 p-4 rounded-xl border border-warm-accent/20 text-left animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out"
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <p className="text-warm-text/80 text-sm md:text-base leading-relaxed flex items-start gap-3">
                    <span className="text-xl flex-shrink-0 mt-0.5">{question.emoji}</span>
                    <span>— {question.text}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Ответ с кнопкой */}
          <div className="text-center animate-on-scroll animate-pulse-subtle" style={{ animationDelay: '1.6s' }}>
            <div className="bg-warm-accent/10 p-6 md:p-8 rounded-2xl border border-warm-accent/20">
              <p className="text-lg md:text-xl text-warm-text mb-4 font-medium">
                Если узнаёшь себя в этих вопросах
              </p>
              <p className="text-base md:text-lg text-warm-text/80 mb-6">
                Без готовых ответов. Через внимание к тому, что происходит внутри.
              </p>
              <a 
                href="https://koalendar.com/e/diagnostika" 
                data-koalendar-widget
              >
                <Button 
                  className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-lg"
                  style={{
                    backgroundColor: '#4A90A4',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#3A7A94';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#4A90A4';
                  }}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Давай встретимся
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
