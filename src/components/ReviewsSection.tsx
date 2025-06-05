
import React from 'react';

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-warm-green/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-text mb-6">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-warm-text/70 max-w-2xl mx-auto">
            Истории людей, которые решились изменить свою жизнь и достигли невозможного.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="animate-on-scroll">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
              <video 
                className="w-full h-64 md:h-80 object-cover"
                controls
                poster="/api/placeholder/600/400"
              >
                <source src="video1.mp4" type="video/mp4" />
                Ваш браузер не поддерживает видео.
              </video>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-warm-text mb-2">
                  Мария, 34 года
                </h3>
                <p className="text-warm-text/70">
                  "Программа 14 недель полностью изменила мою жизнь..."
                </p>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
              <video 
                className="w-full h-64 md:h-80 object-cover"
                controls
                poster="/api/placeholder/600/400"
              >
                <source src="video2.mp4" type="video/mp4" />
                Ваш браузер не поддерживает видео.
              </video>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-warm-text mb-2">
                  Дмитрий, 41 год
                </h3>
                <p className="text-warm-text/70">
                  "Перепрошивка — это не просто терапия, это новая жизнь..."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
