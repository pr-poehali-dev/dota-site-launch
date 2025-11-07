import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'DOTA 2',
      subtitle: 'Мир стратегии и командной игры',
      description: 'Погрузитесь в эпичные сражения на полях Дота 2'
    },
    {
      title: 'ГЕРОИ',
      subtitle: 'Более 120 уникальных персонажей',
      description: 'Выберите своего героя и покажите мастерство'
    },
    {
      title: 'БИТВЫ',
      subtitle: 'Соревнуйтесь с игроками со всего мира',
      description: 'Стройте стратегии и побеждайте вместе с командой'
    }
  ];

  const sections = [
    {
      title: 'Герои',
      description: 'Узнайте о способностях и характеристиках всех героев Dota 2',
      icon: 'Users',
      link: '/heroes',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Предметы',
      description: 'Полный каталог игровых предметов с описанием эффектов',
      icon: 'Package',
      link: '/items',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'Новости',
      description: 'Последние обновления, патчи и события в мире Dota 2',
      icon: 'Newspaper',
      link: '/news',
      color: 'from-orange-500/20 to-red-500/20'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Gamepad2" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold">DOTA 2 PORTAL</h1>
          </div>
          <div className="flex gap-6">
            <Link to="/heroes" className="hover:text-primary transition-colors">Герои</Link>
            <Link to="/items" className="hover:text-primary transition-colors">Предметы</Link>
            <Link to="/news" className="hover:text-primary transition-colors">Новости</Link>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              {slides[currentSlide].title}
            </h2>
            <p className="text-3xl mb-4 text-muted-foreground">
              {slides[currentSlide].subtitle}
            </p>
            <p className="text-xl text-muted-foreground mb-8">
              {slides[currentSlide].description}
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full"
              >
                <Icon name="ChevronLeft" size={24} />
              </Button>
              
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide ? 'bg-primary w-8' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full"
              >
                <Icon name="ChevronRight" size={24} />
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16">
            Исследуйте мир Dota 2
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <Link
                key={index}
                to={section.link}
                className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <div className="relative p-8">
                  <div className="mb-6 inline-block p-4 rounded-lg bg-primary/10">
                    <Icon name={section.icon} size={32} className="text-primary" />
                  </div>
                  
                  <h4 className="text-2xl font-bold mb-3">{section.title}</h4>
                  <p className="text-muted-foreground mb-4">{section.description}</p>
                  
                  <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all">
                    <span>Узнать больше</span>
                    <Icon name="ArrowRight" size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-6">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Dota 2 Portal. Игровой информационный портал</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
