import { Gamepad2, Users, Gift } from 'lucide-react';

const GameCard = () => {
  const features = [
    { icon: <Gamepad2 className="w-8 h-8" />, title: '100% Money Back', color: 'bg-pink-500' },
    { icon: <Gamepad2 className="w-8 h-8" />, title: 'Unlimited Gamming', color: 'bg-orange-500' },
    { icon: <Users className="w-8 h-8" />, title: '+20,000 Downlodes', color: 'bg-yellow-500' },
    { icon: <Gift className="w-8 h-8" />, title: 'Many Surprises!', color: 'bg-blue-500' }
  ];

  return (
    <div className="w-full max-w-[660px] h-auto md:h-[240px] rounded-[32px] bg-[rgba(28,23,73,1)] backdrop-blur-lg p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-4">
          <div className={`${feature.color} p-3 rounded-xl bg-opacity-20`}>
            {feature.icon}
          </div>
          <span className="text-white text-base md:text-lg font-medium">{feature.title}</span>
        </div>
      ))}
    </div>
  );
};

export default GameCard;