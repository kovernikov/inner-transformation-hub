
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ReviewsSection from './ReviewsSection';
import CertificatesSection from './CertificatesSection';

const ProofSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-8 bg-warm-beige">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="group inline-flex items-center gap-2 text-warm-text/60 hover:text-warm-accent transition-colors duration-300 text-lg cursor-pointer bg-transparent border-none"
          >
            <span>Для ума, которому нужно подтверждение</span>
            {isOpen ? (
              <ChevronUp className="w-5 h-5 transition-transform duration-300" />
            ) : (
              <ChevronDown className="w-5 h-5 transition-transform duration-300" />
            )}
          </button>
        </div>
        
        {isOpen && (
          <div className="pt-8 transition-all duration-300">
            <ReviewsSection />
            <CertificatesSection />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProofSection;
