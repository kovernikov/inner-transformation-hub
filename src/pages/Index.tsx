
import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import WhatIDoSection from '../components/WhatIDoSection';
import HowIWorkSection from '../components/HowIWorkSection';
import ProgramsSection from '../components/ProgramsSection';
import ReviewsSection from '../components/ReviewsSection';
import CertificatesSection from '../components/CertificatesSection';
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

    // Логика для смены фона при скролле
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollY / documentHeight;
      
      // Начинаем показывать звёздный фон после 30% прокрутки
      if (scrollProgress > 0.3) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <WhatIDoSection />
      <HowIWorkSection />
      <ProgramsSection />
      <ProofSection />
      <ContactSection />
    </div>
  );
};

export default Index;
