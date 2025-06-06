
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center animate-on-scroll animate-pulse-subtle">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-warm-accent hover:bg-warm-accent/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            aria-label="Узнать больше о методах работы Алексея Коверникова"
          >
            Хочу узнать больше
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
