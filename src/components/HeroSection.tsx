
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Видео-фон */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69fabf10fb2b17027d2a6d0c5e8bc2f12&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        
        {/* Оверлей для создания эффекта заката */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-400/20 via-purple-500/30 to-indigo-900/50"></div>
        
        {/* Дополнительный оверлей для текста */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Анимированные облака */}
      <div className="absolute inset-0 z-10">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
      </div>

      {/* Мерцающие звёзды */}
      <div className="absolute inset-0 z-10">
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
        <div className="star star-5"></div>
      </div>

      {/* Градиент для плавного перехода к следующему блоку */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-warm-beige/80 z-20"></div>

      <div className="relative z-30 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Фото Алексея */}
          <div className="mb-8 animate-scale-in">
            <img 
              src="https://cdn.openai.com/chat-assets/user-uploads/f7d7f514-b23f-4f8a-867b-c08730a60a4b/file-BMiLV5RRgKmoFosGquGeTE.jpg"
              alt="Алексей Коверников"
              className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full object-cover shadow-2xl border-4 border-white/80 transition-all duration-500 hover:scale-110 hover:shadow-3xl backdrop-blur-sm"
            />
          </div>

          {/* Заголовок */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight text-shadow-strong">
            Точка, после которой ты не вернёшься в старое
          </h1>

          {/* Подзаголовок */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up font-medium max-w-2xl mx-auto text-shadow">
            Помогаю собрать себя заново. Без жалости. С пониманием.
          </p>

          {/* Кнопка */}
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-scale-in backdrop-blur-md border border-white/30"
          >
            Начать путь
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
