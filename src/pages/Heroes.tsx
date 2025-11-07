import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Heroes = () => {
  const heroes = [
    {
      name: 'Anti-Mage',
      role: 'Carry',
      attribute: 'Agility',
      description: 'Ловкий убийца магов с высокой мобильностью',
      abilities: ['Mana Break', 'Blink', 'Counterspell', 'Mana Void']
    },
    {
      name: 'Invoker',
      role: 'Nuker',
      attribute: 'Intelligence',
      description: 'Мастер магии с 10 уникальными заклинаниями',
      abilities: ['Quas', 'Wex', 'Exort', 'Invoke']
    },
    {
      name: 'Pudge',
      role: 'Disabler',
      attribute: 'Strength',
      description: 'Мясник с крюком для захвата врагов',
      abilities: ['Meat Hook', 'Rot', 'Flesh Heap', 'Dismember']
    },
    {
      name: 'Phantom Assassin',
      role: 'Carry',
      attribute: 'Agility',
      description: 'Убийца с критическими ударами',
      abilities: ['Stifling Dagger', 'Phantom Strike', 'Blur', 'Coup de Grace']
    },
    {
      name: 'Crystal Maiden',
      role: 'Support',
      attribute: 'Intelligence',
      description: 'Ледяная волшебница с контролем области',
      abilities: ['Crystal Nova', 'Frostbite', 'Arcane Aura', 'Freezing Field']
    },
    {
      name: 'Axe',
      role: 'Tank',
      attribute: 'Strength',
      description: 'Берсерк с провоцирующим криком',
      abilities: ['Berserker\'s Call', 'Battle Hunger', 'Counter Helix', 'Culling Blade']
    }
  ];

  const roleColors: Record<string, string> = {
    'Carry': 'bg-red-500/20 text-red-400',
    'Support': 'bg-green-500/20 text-green-400',
    'Nuker': 'bg-purple-500/20 text-purple-400',
    'Disabler': 'bg-yellow-500/20 text-yellow-400',
    'Tank': 'bg-blue-500/20 text-blue-400'
  };

  const attributeIcons: Record<string, string> = {
    'Strength': 'Dumbbell',
    'Agility': 'Zap',
    'Intelligence': 'Brain'
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
            <Link to="/heroes" className="text-primary">Герои</Link>
            <Link to="/items" className="hover:text-primary transition-colors">Предметы</Link>
            <Link to="/news" className="hover:text-primary transition-colors">Новости</Link>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              Герои Dota 2
            </h2>
            <p className="text-xl text-muted-foreground">
              Более 120 уникальных героев с разными способностями и ролями
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {heroes.map((hero, index) => (
              <Card 
                key={index}
                className="group hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-2xl">{hero.name}</CardTitle>
                    <Icon 
                      name={attributeIcons[hero.attribute]} 
                      size={24} 
                      className="text-primary"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Badge className={roleColors[hero.role]}>
                      {hero.role}
                    </Badge>
                    <Badge variant="outline">{hero.attribute}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {hero.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-primary">Способности:</p>
                    <div className="flex flex-wrap gap-2">
                      {hero.abilities.map((ability, idx) => (
                        <span 
                          key={idx}
                          className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                        >
                          {ability}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Это лишь несколько примеров из огромного списка героев Dota 2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroes;
