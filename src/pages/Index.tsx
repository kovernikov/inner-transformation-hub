
import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import WhatIDoSection from '../components/WhatIDoSection';
import HowIWorkSection from '../components/HowIWorkSection';
import ProgramsSection from '../components/ProgramsSection';
import ContactSection from '../components/ContactSection';
import ProofSection from '../components/ProofSection';

const Index = () => {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    // Улучшенная логика для плавного параллакс эффекта
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(scrollY / documentHeight, 1);
      
      // Устанавливаем CSS переменную для прогресса прокрутки
      document.documentElement.style.setProperty('--scroll-progress', scrollProgress.toString());
      
      // Плавный переход фона начинается после 20% прокрутки
      if (scrollProgress > 0.2) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }

      // Дополнительный параллакс эффект для секций
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Вычисляем параллакс смещение
        if (elementTop < windowHeight && elementTop + elementHeight > 0) {
          const parallaxSpeed = 0.5;
          const yPos = -(elementTop * parallaxSpeed);
          section.style.transform = `translateY(${yPos}px)`;
        }
      });
    };

    // Используем requestAnimationFrame для более плавной анимации
    let ticking = false;
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', requestTick);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <WhatIDoSection />
      <HowIWorkSection />
      <ProgramsSection />
      <ContactSection />
      <ProofSection />
    </div>
  );
};

export default Index;
