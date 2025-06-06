import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Eye } from 'lucide-react';
import ReviewsSection from './ReviewsSection';
import CertificatesSection from './CertificatesSection';

const ProofSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-8" style={{
      background: 'linear-gradient(135deg, #F5F2E8 0%, #E8F4F8 50%, #E8F5E8 100%)'
    }}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div 
            onClick={() => setIsOpen(!isOpen)}
            className="group relative inline-flex items-center gap-3 text-warm-text/60 hover:text-warm-accent transition-all duration-700 text-lg cursor-pointer px-8 py-4 transform hover:scale-105 focus:outline-none"
          >
            {/* Иконка глаза с анимацией */}
            <Eye className="w-6 h-6 transition-all duration-500 group-hover:scale-125 group-hover:text-warm-accent group-hover:rotate-6 relative z-10 drop-shadow-lg" />
            
            {/* Текст с подчёркиванием */}
            <span className="relative z-10 font-medium group-hover:font-semibold transition-all duration-500 group-hover:tracking-wide">
              Для ума, которому нужно подтверждение
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-warm-accent group-hover:w-full transition-all duration-500"></span>
            </span>
            
            {/* Стрелка */}
            {isOpen ? (
              <ChevronUp className="w-6 h-6 transition-all duration-500 group-hover:scale-125 group-hover:-translate-y-1 relative z-10 drop-shadow-lg" />
            ) : (
              <ChevronDown className="w-6 h-6 transition-all duration-500 group-hover:scale-125 group-hover:translate-y-1 relative z-10 drop-shadow-lg" />
            )}
          </div>
          
          <div className="mt-4 text-sm text-warm-text/50 transition-all duration-500 hover:text-warm-text/70">
            <span className="inline-flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full transition-all duration-500 ${isOpen ? 'bg-warm-green/80 animate-pulse' : 'bg-warm-accent/60'}`}></span>
              <span className="font-medium transition-all duration-300">
                {isOpen ? 'Скрыть подтверждения' : 'Показать отзывы и сертификаты'}
              </span>
              <span className={`w-2 h-2 rounded-full transition-all duration-500 ${isOpen ? 'bg-warm-green/80 animate-pulse' : 'bg-warm-accent/60'}`}></span>
            </span>
          </div>
        </div>
        
        <div className={`transition-all duration-700 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[5000px] opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform -translate-y-4'
        }`}>
          <div className="pt-8 space-y-12">
            {/* Отзывы */}
            <div className={`transition-all duration-500 ${isOpen ? 'animate-fade-in' : ''}`}>
              <h2 className="text-2xl font-bold text-warm-text text-center mb-8">
                Отзывы клиентов
              </h2>
              <ReviewsSection />
            </div>
            
            {/* Сертификаты */}
            <div className={`transition-all duration-500 ${isOpen ? 'animate-fade-in' : ''}`}>
              <h2 className="text-2xl font-bold text-warm-text text-center mb-8">
                Сертификаты и образование
              </h2>
              <CertificatesSection />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
