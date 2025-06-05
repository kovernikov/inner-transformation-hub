

import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-transparent">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-scale-in">
            <img 
              src="https://scontent.fprg6-1.fna.fbcdn.net/v/t39.30808-1/435670969_7440574512723019_468799531629445146_n.jpg?stp=c0.437.1365.1365a_dst-jpg_s480x480_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=w3rRnCvhZBAQ7kNvwHg_mK_&_nc_oc=Admn6nwyE6_KcfAHt1-mtzVZa2cB0udKRs0A9t4ZaQhO3dviIQnejfHETz42DTDU83-AVFJCUhid8_wrnLvC2c4G&_nc_zt=24&_nc_ht=scontent.fprg6-1.fna&_nc_gid=aCksQcn9p7u_qOvI29eElQ&oh=00_AfNFhMrokVHT3AU-yw2uT0WbgLyq5aMICyjednIqo_5ZXA&oe=6847B03F"
              alt="Алексей Коверников"
              className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full object-cover shadow-2xl border-4 border-white/80 transition-all duration-500 hover:scale-110 hover:shadow-3xl"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-warm-text mb-6 animate-fade-in leading-tight">
            Точка, после которой ты не вернёшься в старое
          </h1>

          <p className="text-xl md:text-2xl text-warm-text/80 mb-8 animate-slide-up font-medium max-w-2xl mx-auto">
            Помогаю собрать себя заново. Без жалости. С пониманием.
          </p>

          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-warm-accent hover:bg-warm-accent/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-scale-in"
          >
            Начать путь
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

