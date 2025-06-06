
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
          <div 
            onClick={() => setIsOpen(!isOpen)}
            className="group relative inline-flex items-center gap-3 text-warm-text/60 hover:text-warm-accent transition-all duration-700 text-lg cursor-pointer px-8 py-4 rounded-full hover:bg-warm-accent/5 transform hover:scale-105"
          >
            {/* Светящийся эффект при наведении */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-warm-accent/10 via-transparent to-warm-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-md"></div>
            
            {/* Пульсирующие волны */}
            <div className="absolute inset-0 rounded-full border border-warm-accent/20 scale-100 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute inset-0 rounded-full border border-warm-accent/10 scale-110 group-hover:scale-125 opacity-0 group-hover:opacity-70 transition-all duration-700"></div>
            
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
            
            {/* Мягкое свечение по краям */}
            <div className="absolute -inset-2 rounded-full bg-warm-accent/5 blur-xl opacity-0 group-hover:opacity-50 transition-all duration-700"></div>
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
