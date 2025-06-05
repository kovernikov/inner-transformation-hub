
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Алексей свяжется с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Плавный переход фона */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="py-20 bg-gradient-to-br from-warm-blue/30 via-warm-green/20 to-warm-accent/20">
        {/* Декоративные элементы */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-warm-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-warm-green/15 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-warm-blue/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-warm-text mb-6">
              Готовы начать трансформацию?
            </h2>
            <p className="text-xl text-warm-text/70 max-w-2xl mx-auto">
              Свяжитесь со мной для бесплатной консультации и первого шага к новой жизни.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Форма */}
            <Card className="shadow-2xl border-0 animate-on-scroll">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-warm-text text-center">
                  Написать сообщение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 text-lg border-warm-accent/30 focus:border-warm-accent"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Ваш email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 text-lg border-warm-accent/30 focus:border-warm-accent"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Расскажите о своей ситуации..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="text-lg border-warm-accent/30 focus:border-warm-accent resize-none"
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full h-12 bg-warm-accent hover:bg-warm-accent/90 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Telegram */}
            <div className="flex flex-col justify-center items-center animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <Card className="w-full shadow-2xl border-0 bg-warm-accent text-white">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      Telegram
                    </h3>
                    <p className="text-white/90 mb-6">
                      Быстрая связь для срочных вопросов и записи на консультацию
                    </p>
                    <a 
                      href="https://t.me/kovernikov_alexey"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-warm-accent px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300 transform hover:scale-105"
                    >
                      @kovernikov_alexey
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
