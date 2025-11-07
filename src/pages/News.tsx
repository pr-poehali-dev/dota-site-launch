import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const News = () => {
  const news = [
    {
      title: 'Patch 7.35: Крупное обновление баланса',
      date: '15 ноября 2024',
      category: 'Обновление',
      description: 'Масштабные изменения баланса героев и предметов. Переработаны механики нейтральных предметов.',
      tags: ['Баланс', 'Герои', 'Предметы'],
      icon: 'FileEdit'
    },
    {
      title: 'The International 2024: Итоги турнира',
      date: '10 ноября 2024',
      category: 'Киберспорт',
      description: 'Team Spirit одержала победу на главном турнире года с призовым фондом $40 млн.',
      tags: ['Турнир', 'TI2024', 'Чемпионы'],
      icon: 'Trophy'
    },
    {
      title: 'Новый герой: Ringmaster',
      date: '5 ноября 2024',
      category: 'Контент',
      description: 'Представлен новый герой - Ringmaster. Цирковой артист с уникальными способностями контроля.',
      tags: ['Новый герой', 'Ringmaster'],
      icon: 'User'
    },
    {
      title: 'Crownfall Act IV: Финальный акт',
      date: '1 ноября 2024',
      category: 'События',
      description: 'Завершающий акт события Crownfall. Новые квесты, награды и косметические предметы.',
      tags: ['Событие', 'Crownfall', 'Награды'],
      icon: 'Calendar'
    },
    {
      title: 'Обновление античит-системы',
      date: '28 октября 2024',
      category: 'Безопасность',
      description: 'Valve улучшила систему обнаружения читеров и смурфов. Новые меры борьбы с токсичностью.',
      tags: ['Античит', 'Безопасность'],
      icon: 'ShieldCheck'
    },
    {
      title: 'Новый режим: Turbo Plus',
      date: '20 октября 2024',
      category: 'Режим игры',
      description: 'Экспериментальный режим с ускоренным геймплеем и увеличенными ресурсами.',
      tags: ['Турбо', 'Новый режим'],
      icon: 'Zap'
    }
  ];

  const categoryColors: Record<string, string> = {
    'Обновление': 'bg-blue-500/20 text-blue-400',
    'Киберспорт': 'bg-red-500/20 text-red-400',
    'Контент': 'bg-purple-500/20 text-purple-400',
    'События': 'bg-green-500/20 text-green-400',
    'Безопасность': 'bg-yellow-500/20 text-yellow-400',
    'Режим игры': 'bg-cyan-500/20 text-cyan-400'
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Gamepad2" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold">DOTA 2 PORTAL</h1>
          </Link>
          <div className="flex gap-6">
            <Link to="/heroes" className="hover:text-primary transition-colors">Герои</Link>
            <Link to="/items" className="hover:text-primary transition-colors">Предметы</Link>
            <Link to="/news" className="text-primary">Новости</Link>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Новости Dota 2
            </h2>
            <p className="text-xl text-muted-foreground">
              Последние обновления, события и новости из мира Dota 2
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card 
                key={index}
                className="group hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <Badge className={categoryColors[item.category]}>
                      {item.category}
                    </Badge>
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon name={item.icon} size={20} className="text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2 line-clamp-2">
                    {item.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={14} />
                    <span>{item.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {item.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Следите за обновлениями, чтобы быть в курсе всех событий
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
