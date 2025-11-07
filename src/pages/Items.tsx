import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Items = () => {
  const items = [
    {
      name: 'Black King Bar',
      category: 'Armor',
      cost: 4050,
      description: 'Дает иммунитет к магии на короткое время',
      stats: ['+24 Силы', '+10 Урона'],
      active: 'Avatar - иммунитет к заклинаниям на 6 секунд',
      icon: 'Shield'
    },
    {
      name: 'Daedalus',
      category: 'Weapon',
      cost: 5150,
      description: 'Увеличивает критический урон',
      stats: ['+88 Урона'],
      active: 'Critical Strike - 30% шанс нанести 235% урона',
      icon: 'Sword'
    },
    {
      name: 'Bloodstone',
      category: 'Artifact',
      cost: 4700,
      description: 'Восстанавливает ману и здоровье',
      stats: ['+18 Интеллекта', '+425 Маны', '+8.5 Рег. маны'],
      active: 'Bloodpact - увеличивает регенерацию',
      icon: 'Heart'
    },
    {
      name: 'Boots of Travel',
      category: 'Boots',
      cost: 2500,
      description: 'Телепортация к союзникам и строениям',
      stats: ['+115 Скорости передвижения'],
      active: 'Teleport - телепорт к цели',
      icon: 'Move'
    },
    {
      name: 'Aghanims Scepter',
      category: 'Artifact',
      cost: 4200,
      description: 'Улучшает ультимативную способность',
      stats: ['+10 ко всем атрибутам', '+175 Здоровья', '+175 Маны'],
      active: 'Улучшает Ultimate способность героя',
      icon: 'Wand2'
    },
    {
      name: 'Butterfly',
      category: 'Artifact',
      cost: 5125,
      description: 'Увеличивает уклонение и скорость атаки',
      stats: ['+35 Ловкости', '+35% Уклонения', '+35 Скорости атаки'],
      active: 'Flutter - увеличивает скорость передвижения',
      icon: 'Sparkles'
    }
  ];

  const categoryColors: Record<string, string> = {
    'Armor': 'bg-blue-500/20 text-blue-400',
    'Weapon': 'bg-red-500/20 text-red-400',
    'Artifact': 'bg-purple-500/20 text-purple-400',
    'Boots': 'bg-green-500/20 text-green-400'
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
            <Link to="/items" className="text-primary">Предметы</Link>
            <Link to="/news" className="hover:text-primary transition-colors">Новости</Link>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Игровые предметы
            </h2>
            <p className="text-xl text-muted-foreground">
              Каталог мощных артефактов и экипировки для вашего героя
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <Card 
                key={index}
                className="group hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <CardTitle className="text-2xl mb-2">{item.name}</CardTitle>
                      <div className="flex gap-2 mb-2">
                        <Badge className={categoryColors[item.category]}>
                          {item.category}
                        </Badge>
                        <Badge variant="outline" className="text-yellow-500">
                          <Icon name="Coins" size={14} className="mr-1" />
                          {item.cost}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon name={item.icon} size={28} className="text-primary" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {item.description}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">Характеристики:</p>
                      <div className="flex flex-wrap gap-2">
                        {item.stats.map((stat, idx) => (
                          <span 
                            key={idx}
                            className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                          >
                            {stat}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">Активная способность:</p>
                      <p className="text-sm text-muted-foreground">{item.active}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              В игре доступны сотни предметов с уникальными эффектами
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
