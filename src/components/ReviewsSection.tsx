
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
      name: "Отзыв клиента",
      description: "История трансформации и изменения жизни...",
      videoId: "iV1MXiheUZ0"
    },
    {
      id: 2,
      name: "Отзыв клиента",
      description: "Путь к новой версии себя...",
      videoId: "dOx4BlJzFsw"
    },
    {
      id: 3,
      name: "Отзыв клиента",
      description: "Перепрошивка сознания и результаты...",
      videoId: "tKNyq7TC3Fk"
    },
    {
      id: 4,
      name: "Отзыв клиента",
      description: "Кардинальные изменения в жизни...",
      videoId: "PNfBhDod8jY"
    },
    {
      id: 5,
      name: "Отзыв клиента",
      description: "Трансформация личности и мышления...",
      videoId: "qQ1Rf37lH8M"
    }
  ];

  return (
    <section className="py-8 bg-transparent">
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
                        <iframe
                          className="w-full h-64 md:h-80"
                          src={`https://www.youtube.com/embed/${review.videoId}`}
                          title={`YouTube video player ${review.id}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
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
