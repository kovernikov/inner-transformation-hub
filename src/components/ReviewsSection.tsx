
import React from 'react';
import { Play } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      quote: "Полная трансформация сознания за несколько месяцев",
      videoId: "qy0QAH4jX5w"
    },
    {
      id: 2,
      quote: "Нашёл путь к внутренней гармонии",
      videoId: "HuGyUHG39EI"
    },
    {
      id: 3,
      quote: "Кардинальные изменения в восприятии жизни",
      videoId: "zngxwUcxvD0"
    },
    {
      id: 4,
      quote: "Освобождение от старых паттернов мышления",
      videoId: "mr33MCbFTFU"
    },
    {
      id: 5,
      quote: "Глубокие внутренние изменения",
      videoId: "OR8PW8qo_Lw"
    },
    {
      id: 6,
      quote: "Новый взгляд на себя и мир",
      videoId: "Mrh7RNQKxmc"
    },
    {
      id: 7,
      quote: "Путь к пониманию истинного себя",
      videoId: "OJDMXFDUwqw"
    },
    {
      id: 8,
      quote: "Преодоление внутренних барьеров",
      videoId: "pFakUS5jbbs"
    },
    {
      id: 9,
      quote: "Обретение внутреннего спокойствия",
      videoId: "5BVLq1r9OIQ"
    }
  ];

  return (
    <div className="animate-on-scroll">
      <div className="max-w-5xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="pl-4 md:basis-1/2">
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${review.videoId}`}
                      title={`Отзыв клиента`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-warm-text/70 italic leading-relaxed text-sm">
                          "{review.quote}"
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-warm-accent hover:text-warm-accent/80 transition-colors duration-300 cursor-pointer group/btn">
                      <Play className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium">Смотреть полностью</span>
                    </div>
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

export default ReviewsSection;
