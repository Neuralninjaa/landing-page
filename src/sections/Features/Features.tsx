import { Card } from '../../components/Card/Card';
import './Features.scss';

export const Features = () => {
  const featureList = [
    {
      title: 'Modern Teknoloji',
      description: 'React, TypeScript ve SCSS ile geliştirilmiş, güncel ve sürdürülebilir kod tabanı.',
      icon: '🚀'
    },
    {
      title: 'Tam Erişilebilirlik',
      description: 'WAI-ARIA standartlarına uygun, klavye ve ekran okuyucularla tam uyumlu bileşenler.',
      icon: '♿'
    },
    {
      title: 'Responsive Tasarım',
      description: 'Mobil öncelikli (Mobile-First) yaklaşım ile her cihazda kusursuz görünüm.',
      icon: '📱'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="features__header">
          <h2 className="features__title">Neden Bizi Seçmelisiniz?</h2>
          <p className="features__subtitle">
            Projelerinizi bir üst seviyeye taşıyacak özellikler
          </p>
        </div>

        <div className="features__grid">
          {featureList.map((feature, index) => (
            <Card 
              key={index} 
              variant="outlined" 
              padding="lg" 
              isInteractive={true}
              style={{ height: '100%' }} // Kartların boyu eşit olsun
            >
              <div className="features__icon">{feature.icon}</div>
              <h3 className="features__item-title">{feature.title}</h3>
              <p className="features__item-desc">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
