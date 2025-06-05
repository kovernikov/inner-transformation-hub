
import React from 'react';
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
      name: "Мария, 34 года",
      description: "Программа 14 недель полностью изменила мою жизнь...",
      videoSrc: "video1.mp4",
      poster: "/api/placeholder/600/400"
    },
    {
      id: 2,
      name: "Дмитрий, 41 год",
      description: "Перепрошивка — это не просто терапия, это новая жизнь...",
      videoSrc: "video2.mp4",
      poster: "/api/placeholder/600/400"
    },
    {
      id: 3,
      name: "Анна, 28 лет",
      description: "Благодаря работе с Алексеем я наконец-то поняла себя...",
      videoSrc: "video3.mp4",
      poster: "/api/placeholder/600/400"
    },
    {
      id: 4,
      name: "Сергей, 45 лет",
      description: "После сессий я стал совершенно другим человеком...",
      videoSrc: "video4.mp4",
      poster: "/api/placeholder/600/400"
    }
  ];

  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-text mb-6">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-warm-text/70 max-w-2xl mx-auto">
            Истории людей, которые решились изменить свою жизнь и достигли невозможного.
          </p>
        </div>

        <div className="max-w-5xl mx-auto animate-on-scroll">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem key={review.id} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="h-full">
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl group h-full">
                      <div className="relative overflow-hidden">
                        <video 
                          className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                          controls
                          poster={review.poster}
                        >
                          <source src={review.videoSrc} type="video/mp4" />
                          Ваш браузер не поддерживает видео.
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-warm-text mb-3 group-hover:text-warm-accent transition-colors duration-300">
                          {review.name}
                        </h3>
                        <p className="text-warm-text/70 leading-relaxed">
                          {review.description}
                        </p>
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

export default ReviewsSection;
