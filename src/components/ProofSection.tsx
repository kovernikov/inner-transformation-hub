
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import ReviewsSection from './ReviewsSection';
import CertificatesSection from './CertificatesSection';

const ProofSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-8 bg-transparent relative z-10">
      <div className="container mx-auto px-4">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="text-center">
            <CollapsibleTrigger className="group inline-flex items-center gap-2 text-warm-text/60 hover:text-warm-accent transition-colors duration-300 text-lg cursor-pointer">
              <span>Для ума, которому нужно подтверждение</span>
              {isOpen ? (
                <ChevronUp className="w-5 h-5 transition-transform duration-300" />
              ) : (
                <ChevronDown className="w-5 h-5 transition-transform duration-300" />
              )}
            </CollapsibleTrigger>
          </div>
          
          <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="pt-8">
              <ReviewsSection />
              <CertificatesSection />
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
};

export default ProofSection;
