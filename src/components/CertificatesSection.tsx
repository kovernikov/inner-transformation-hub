
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
      alt: "Сертифицированный мастер-гипнотерапевт",
      title: "Certified Master Hypnotherapist"
    },
    {
      id: 8,
      src: "/lovable-uploads/99bd742e-105f-415f-99a9-35c666532d63.png",
      alt: "Холистик майнд практик",
      title: "Holistic Mind Practioner"
    },
    {
      id: 9,
      src: "/lovable-uploads/15de8426-406e-4acd-956e-63790d34ca2b.png",
      alt: "Холистик майнд терапия",
      title: "Holistic Mind Therapy Practitioner"
    },
    {
      id: 4,
      src: "/lovable-uploads/e62af0fa-9f72-4cbf-acb8-0ed4510c78e7.png",
      alt: "Сертификат по теории и практике консультирования",
      title: "Теория и практика консультирования"
    },
    {
      id: 5,
      src: "/lovable-uploads/1d0ffece-35d2-4bff-8c73-32f8ea183771.png",
      alt: "Сертификат по работе с клиентскими запросами",
      title: "Работа с клиентскими запросами"
    },
    {
      id: 6,
      src: "/lovable-uploads/878b33fb-9306-4890-a7a6-124aa00df335.png",
      alt: "Университетский сертификат по консультированию",
      title: "Университетская квалификация"
    }
  ];

  return (
    <section className="py-8 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-text mb-6">
            Сертификаты и квалификация
          </h2>
          <p className="text-xl text-warm-text/70 max-w-2xl mx-auto">
            Подтвержденная экспертность в области психологии и гипнотерапии.
          </p>
        </div>

        <div className="max-w-6xl mx-auto animate-on-scroll">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {certificates.map((cert, index) => (
                <CarouselItem key={cert.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <div className="relative overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group h-full bg-transparent">
                      <div className="relative overflow-hidden">
                        <img 
                          src={cert.src}
                          alt={cert.alt}
                          className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-white font-semibold text-lg drop-shadow-lg">
                            {cert.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-16 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300" />
            <CarouselNext className="hidden md:flex -right-16 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
