
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Eye } from 'lucide-react';
import ReviewsSection from './ReviewsSection';
import CertificatesSection from './CertificatesSection';

const ProofSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-8 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="group relative inline-flex items-center gap-3 text-warm-text/60 hover:text-warm-accent transition-all duration-500 text-lg cursor-pointer bg-transparent border-2 border-warm-accent/20 hover:border-warm-accent/60 px-8 py-4 rounded-full hover:bg-warm-accent/5 hover:shadow-lg transform hover:scale-105"
          >
            {/* Анимированный фон */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-warm-accent/10 to-warm-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Пульсирующий круг */}
            <div className="absolute inset-0 rounded-full border-2 border-warm-accent/30 animate-ping group-hover:animate-none opacity-0 group-hover:opacity-100"></div>
            
            <Eye className="w-6 h-6 transition-all duration-300 group-hover:scale-125 group-hover:text-warm-accent relative z-10" />
            <span className="relative z-10 font-medium group-hover:font-semibold transition-all duration-300">
              Для ума, которому нужно подтверждение
            </span>
            {isOpen ? (
              <ChevronUp className="w-6 h-6 transition-all duration-300 group-hover:scale-125 relative z-10" />
            ) : (
              <ChevronDown className="w-6 h-6 transition-all duration-300 group-hover:scale-125 relative z-10" />
            )}
            
            {/* Светящийся эффект */}
            <div className="absolute inset-0 rounded-full bg-warm-accent/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
          </button>
          
          <div className="mt-4 text-sm text-warm-text/50 group-hover:text-warm-text/70 transition-colors duration-300">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-warm-accent/60 rounded-full animate-pulse"></span>
              {isOpen ? 'Скрыть подтверждения' : 'Показать отзывы и сертификаты'}
              <span className="w-2 h-2 bg-warm-accent/60 rounded-full animate-pulse"></span>
            </span>
          </div>
        </div>
        
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-8">
            <ReviewsSection />
            <CertificatesSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
