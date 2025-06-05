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
    },
    {
      id: 6,
      name: "Отзыв клиента",
      description: "Новый взгляд на жизнь...",
      videoId: "01351eHikIU"
    },
    {
      id: 7,
      name: "Отзыв клиента",
      description: "Внутренние изменения и рост...",
      videoId: "YiS2cpkapYI"
    },
    {
      id: 8,
      name: "Отзыв клиента",
      description: "Работа над собой и результаты...",
      videoId: "7FIa1FbGOFM"
    },
    {
      id: 9,
      name: "Отзыв клиента",
      description: "Преодоление внутренних барьеров...",
      videoId: "qy0QAH4jX5w"
    },
    {
      id: 10,
      name: "Отзыв клиента",
      description: "Путь к пониманию себя...",
      videoId: "HuGyUHG39EI"
    },
    {
      id: 11,
      name: "Отзыв клиента",
      description: "Глубокие внутренние изменения...",
      videoId: "zngxwUcxvD0"
    },
    {
      id: 12,
      name: "Отзыв клиента",
      description: "Новое качество жизни...",
      videoId: "mr33MCbFTFU"
    },
    {
      id: 13,
      name: "Отзыв клиента",
      description: "Освобождение от старых паттернов...",
      videoId: "OR8PW8qo_Lw"
    },
    {
      id: 14,
      name: "Отзыв клиента",
      description: "Кардинальная перестройка мышления...",
      videoId: "Mrh7RNQKxmc"
    },
    {
      id: 15,
      name: "Отзыв клиента",
      description: "Открытие новых возможностей...",
      videoId: "OJDMXFDUwqw"
    },
    {
      id: 16,
      name: "Отзыв клиента",
      description: "Глубокая трансформация личности...",
      videoId: "pFakUS5jbbs"
    },
    {
      id: 17,
      name: "Отзыв клиента",
      description: "Изменение отношения к жизни...",
      videoId: "Yq4_GEV_-YQ"
    },
    {
      id: 18,
      name: "Отзыв клиента",
      description: "Полная перезагрузка сознания...",
      videoId: "5BVLq1r9OIQ"
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
                    <div className="relative bg-white/90 backdrop-blur-sm shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl group h-full">
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
