
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Eye } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
            className="group relative inline-flex items-center gap-3 text-warm-text/60 hover:text-warm-accent transition-all duration-700 text-lg cursor-pointer bg-transparent border-2 border-warm-accent/20 hover:border-warm-accent/80 px-10 py-5 rounded-full hover:bg-warm-accent/10 hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1"
          >
            {/* Многослойный анимированный фон */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-warm-accent/20 via-warm-green/15 to-warm-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-warm-accent/10 to-warm-green/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            {/* Пульсирующие кольца */}
            <div className="absolute inset-0 rounded-full border-2 border-warm-accent/30 animate-ping group-hover:animate-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 rounded-full border border-warm-accent/20 scale-110 animate-pulse group-hover:animate-none opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            <Eye className="w-7 h-7 transition-all duration-500 group-hover:scale-150 group-hover:text-warm-accent group-hover:rotate-12 relative z-10 drop-shadow-lg" />
            <span className="relative z-10 font-medium group-hover:font-bold transition-all duration-500 group-hover:tracking-wide">
              Для ума, которому нужно подтверждение
            </span>
            {isOpen ? (
              <ChevronUp className="w-7 h-7 transition-all duration-500 group-hover:scale-150 group-hover:-translate-y-1 relative z-10 drop-shadow-lg" />
            ) : (
              <ChevronDown className="w-7 h-7 transition-all duration-500 group-hover:scale-150 group-hover:translate-y-1 relative z-10 drop-shadow-lg" />
            )}
            
            {/* Светящийся эффект */}
            <div className="absolute inset-0 rounded-full bg-warm-accent/30 blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-700 scale-150"></div>
            <div className="absolute inset-0 rounded-full bg-warm-green/20 blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500 scale-125"></div>
          </button>
          
          <div className="mt-6 text-sm text-warm-text/50 transition-all duration-500 hover:text-warm-text/70">
            <span className="inline-flex items-center gap-3">
              <span className={`w-3 h-3 rounded-full transition-all duration-500 ${isOpen ? 'bg-warm-green/80 animate-pulse' : 'bg-warm-accent/60 animate-pulse'}`}></span>
              <span className="font-medium transition-all duration-300">
                {isOpen ? 'Скрыть подтверждения' : 'Показать отзывы и сертификаты'}
              </span>
              <span className={`w-3 h-3 rounded-full transition-all duration-500 ${isOpen ? 'bg-warm-green/80 animate-pulse' : 'bg-warm-accent/60 animate-pulse'}`}></span>
            </span>
          </div>
        </div>
        
        <div className={`transition-all duration-700 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[5000px] opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform -translate-y-4'
        }`}>
          <div className="pt-8">
            <div className={`transition-all duration-500 ${isOpen ? 'animate-fade-in' : ''}`}>
              <Tabs defaultValue="reviews" className="w-full">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-warm-text/5 backdrop-blur-sm border border-warm-accent/20">
                  <TabsTrigger 
                    value="reviews" 
                    className="data-[state=active]:bg-warm-accent/20 data-[state=active]:text-warm-accent transition-all duration-300"
                  >
                    Отзывы
                  </TabsTrigger>
                  <TabsTrigger 
                    value="certificates"
                    className="data-[state=active]:bg-warm-accent/20 data-[state=active]:text-warm-accent transition-all duration-300"
                  >
                    Сертификаты
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="reviews" className="animate-fade-in">
                  <ReviewsSection />
                </TabsContent>
                
                <TabsContent value="certificates" className="animate-fade-in">
                  <CertificatesSection />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
