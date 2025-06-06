
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const CertificatesSection = () => {
  const certificates = [
    {
      id: 7,
      src: "/lovable-uploads/12352dfd-e784-432d-a9a6-1f09f22051ef.png",
      alt: "Сертификат сертифицированного мастера-гипнотерапевта Алексея Коверникова",
      title: "Certified Master Hypnotherapist"
    },
    {
      id: 8,
      src: "/lovable-uploads/99bd742e-105f-415f-99a9-35c666532d63.png",
      alt: "Сертификат практика холистической терапии разума Алексея Коверникова",
      title: "Holistic Mind Practioner"
    },
    {
      id: 9,
      src: "/lovable-uploads/15de8426-406e-4acd-956e-63790d34ca2b.png",
      alt: "Сертификат практика холистической терапии разума Алексея Коверникова",
      title: "Holistic Mind Therapy Practitioner"
    },
    {
      id: 4,
      src: "/lovable-uploads/e62af0fa-9f72-4cbf-acb8-0ed4510c78e7.png",
      alt: "Сертификат по теории и практике психологического консультирования Алексея Коверникова",
      title: "Теория и практика консультирования"
    },
    {
      id: 5,
      src: "/lovable-uploads/1d0ffece-35d2-4bff-8c73-32f8ea183771.png",
      alt: "Сертификат по работе с клиентскими запросами в психологическом консультировании",
      title: "Работа с клиентскими запросами"
    }
  ];

  return (
    <div className="animate-on-scroll">
      <div className="max-w-6xl mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {certificates.map((cert) => (
              <CarouselItem key={cert.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/90 backdrop-blur-sm border border-warm-accent/10">
                  <div className="aspect-[3/4] overflow-hidden p-4">
                    <img 
                      src={cert.src}
                      alt={cert.alt}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-warm-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-warm-accent/90 to-transparent">
                    <h3 className="text-white font-medium text-sm drop-shadow-lg">
                      {cert.title}
                    </h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-white/80 hover:bg-white shadow-lg border-warm-accent/20 hover:border-warm-accent/40 transition-all duration-300" />
          <CarouselNext className="hidden md:flex -right-12 bg-white/80 hover:bg-white shadow-lg border-warm-accent/20 hover:border-warm-accent/40 transition-all duration-300" />
        </Carousel>
      </div>
    </div>
  );
};

export default CertificatesSection;
