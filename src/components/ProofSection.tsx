
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
            className="group inline-flex items-center gap-3 text-warm-text/60 hover:text-warm-accent transition-all duration-300 text-lg cursor-pointer bg-transparent border-none hover:bg-warm-accent/10 px-6 py-3 rounded-full"
          >
            <Eye className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            <span className="hover:underline transition-all duration-300">
              Для ума, которому нужно подтверждение
            </span>
            {isOpen ? (
              <ChevronUp className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            ) : (
              <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            )}
          </button>
          <div className="mt-2 text-sm text-warm-text/40">
            {isOpen ? 'Скрыть подтверждения' : 'Показать отзывы и сертификаты'}
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
