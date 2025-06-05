
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
              src="https://instagram.fprg6-1.fna.fbcdn.net/v/t51.2885-19/483190743_9014333672006216_2206919393066273092_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fprg6-1.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2QFTBXOLbE3R5mPogEIXXsiT2q5Yr6cZXDb4-4m69rxlRVjq84M5CrLQ_pWwLJrsp-aBvMZhTOt_Hti52g9fYVPs&_nc_ohc=7_ZO92WAlK0Q7kNvwGiWA_J&_nc_gid=CLG6pqKFUui1MkeGzUkoLg&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfPFCn3cJ56ybUsuR6cR5xMNE7Tg5iEIjL9KAxLuulW2Iw&oe=6847A0C4&_nc_sid=7a9f4b"
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
