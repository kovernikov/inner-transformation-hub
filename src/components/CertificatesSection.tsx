
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
      id: 1,
      src: "https://cdn.openai.com/chat-assets/user-uploads/f7d7f514-b23f-4f8a-867b-c08730a60a4b/file-WNV8WSicb5SZtWWH9CvqxV.jpg",
      alt: "Сертификат по гипнотерапии",
      title: "Гипнотерапия"
    },
    {
      id: 2,
      src: "https://cdn.openai.com/chat-assets/user-uploads/f7d7f514-b23f-4f8a-867b-c08730a60a4b/file-MiXzqjC9jPriPBeKhn46h8.png",
      alt: "Сертификат по психологии",
      title: "Психология"
    },
    {
      id: 3,
      src: "https://cdn.openai.com/chat-assets/user-uploads/f7d7f514-b23f-4f8a-867b-c08730a60a4b/file-P9vou19cqY5KucNEoDqqCk.jpg",
      alt: "Дополнительная квалификация",
      title: "Дополнительная квалификация"
    },
    {
      id: 4,
      src: "/api/placeholder/400/600",
      alt: "Сертификат 4",
      title: "Сертификат 4"
    },
    {
      id: 5,
      src: "/api/placeholder/400/600",
      alt: "Сертификат 5",
      title: "Сертификат 5"
    },
    {
      id: 6,
      src: "/api/placeholder/400/600",
      alt: "Сертификат 6",
      title: "Сертификат 6"
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-warm-green/5 to-warm-beige/30 overflow-hidden">
      {/* Плавный переход сверху */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/80 to-transparent z-10"></div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-32 right-20 w-32 h-32 bg-warm-accent/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-40 left-16 w-28 h-28 bg-warm-blue/10 rounded-full blur-xl animate-float" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-warm-green/15 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>

      {/* Плавный переход снизу */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-warm-beige/50 z-10"></div>

      <div className="container mx-auto px-4 relative z-20">
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
                  <div 
                    className="h-full"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group h-full">
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
