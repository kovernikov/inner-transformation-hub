
import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ProgramsSection from '../components/ProgramsSection';
import ReviewsSection from '../components/ReviewsSection';
import CertificatesSection from '../components/CertificatesSection';
import ContactSection from '../components/ContactSection';

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

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProgramsSection />
      <ReviewsSection />
      <CertificatesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
