
import React from 'react';

const CertificatesSection = () => {
  const certificates = [
    {
      src: "https://cdn.openai.com/chat-assets/user-uploads/f7d7f514-b23f-4f8a-867b-c08730a60a4b/file-WNV8WSicb5SZtWWH9CvqxV.jpg",
      alt: "Сертификат по гипнотерапии"
    },
    {
      src: "https://cdn.openai.com/chat-assets/user-uploads/f7d7f514-b23f-4f8a-867b-c08730a60a4b/file-MiXzqjC9jPriPBeKhn46h8.png",
      alt: "Сертификат по психологии"
    },
    {
      src: "https://cdn.openai.com/chat-assets/user-uploads/f7d7f514-b23f-4f8a-867b-c08730a60a4b/file-P9vou19cqY5KucNEoDqqCk.jpg",
      alt: "Дополнительная квалификация"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-text mb-6">
            Сертификаты и квалификация
          </h2>
          <p className="text-xl text-warm-text/70 max-w-2xl mx-auto">
            Подтвержденная экспертность в области психологии и гипнотерапии.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="animate-on-scroll transform transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src={cert.src}
                  alt={cert.alt}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
