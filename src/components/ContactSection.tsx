import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Send, Calendar, Bookmark } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/send.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString(),
      });

      const result = await response.text();

      if (result.includes('OK')) {
        toast({
          title: "Сообщение отправлено!",
          description: "Алексей свяжется с вами в ближайшее время.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: "Ошибка",
          description: "Не удалось отправить сообщение. Попробуйте позже.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Сервер недоступен. Проверьте соединение.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll animate-pulse-subtle">
          <h2 className="text-4xl md:text-5xl font-bold text-warm-text mb-6" style={{
            textShadow: '0 0 20px rgba(74, 144, 164, 0.3), 0 0 40px rgba(74, 144, 164, 0.1)'
          }}>
            Готовы начать трансформацию?
          </h2>
          <p className="text-xl text-warm-text/70 max-w-2xl mx-auto">
            Свяжитесь со мной для бесплатной консультации и первого шага к новой жизни.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Форма */}
          <Card className="shadow-2xl border-0 bg-white/40 backdrop-blur-sm animate-on-scroll animate-pulse-subtle">
            <CardHeader className="relative">
              <div className="absolute top-4 right-4">
                <Bookmark className="w-6 h-6 text-warm-accent/60" />
              </div>
              <CardTitle className="text-2xl font-bold text-warm-text text-center flex items-center justify-center gap-2">
                <Send className="w-6 h-6 text-warm-accent" />
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
                    className="h-12 text-lg border-warm-accent/30 focus:border-warm-accent bg-white/60"
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
                    className="h-12 text-lg border-warm-accent/30 focus:border-warm-accent bg-white/60"
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
                    className="text-lg border-warm-accent/30 focus:border-warm-accent resize-none bg-white/60"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full h-12 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  style={{
                    backgroundColor: '#4A90A4',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#3A7A94';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#4A90A4';
                  }}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Запись на встречу */}
          <div className="space-y-6 animate-on-scroll animate-pulse-subtle" style={{ animationDelay: '0.3s' }}>
            <Card className="shadow-2xl border-0 bg-warm-green/60 backdrop-blur-sm text-warm-text">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-warm-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-10 h-10 text-warm-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Запись на встречу
                  </h3>
                  <p className="text-warm-text/80 mb-6">
                    Выберите удобное время для <span className="text-warm-accent hover:underline transition-all duration-300 cursor-default">личной консультации</span>
                  </p>
                  <a 
                    href="https://koalendar.com/e/diagnostika" 
                    data-koalendar-widget
                    className="inline-flex items-center text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105"
                    style={{
                      backgroundColor: '#4A90A4',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#3A7A94';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#4A90A4';
                    }}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Запланировать встречу
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Донат Stripe — под правой карточкой */}
<div className="md:col-start-2 flex justify-center md:justify-end">
  <a
    href="https://buy.stripe.com/28EcN4gNTgRG3F33lCf7i01"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105"
    style={{ backgroundColor: '#4A90A4' }}
    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#3A7A94'; }}
    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#4A90A4'; }}
  >
    <Heart className="w-5 h-5 mr-2" />
    Поддержать проект
  </a>
</div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
