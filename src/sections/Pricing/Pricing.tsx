import React from 'react';
import { Card } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';
import './Pricing.scss';

export const Pricing = () => {
  const plans = [
    {
      title: 'Başlangıç',
      price: '₺0',
      period: '/ay',
      features: ['1 Proje Hakkı', 'Temel Bileşenler', 'Topluluk Desteği'],
      buttonVariant: 'outline',
      cardVariant: 'outlined',
      isPopular: false
    },
    {
      title: 'Profesyonel',
      price: '₺199',
      period: '/ay',
      features: ['Sınırsız Proje', 'Tüm UI Kütüphanesi', '7/24 Öncelikli Destek', 'Gelişmiş Analitik'],
      buttonVariant: 'primary',
      cardVariant: 'elevated', // Bu kart daha belirgin olacak
      isPopular: true
    },
    {
      title: 'Kurumsal',
      price: '₺499',
      period: '/ay',
      features: ['Özel Sunucu', 'SLA Garantisi', 'Ekip Yönetimi', 'Size Özel Geliştirme'],
      buttonVariant: 'outline',
      cardVariant: 'outlined',
      isPopular: false
    }
  ];

  return (
    <section className="pricing">
      <div className="container">
        <div className="pricing__header">
          <h2 className="pricing__title">Esnek Fiyatlandırma</h2>
          <p className="pricing__subtitle">
            İster tek başınıza, ister ekibinizle. İhtiyacınıza uygun planı seçin.
          </p>
        </div>

        <div className="pricing__grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing__wrapper ${plan.isPopular ? 'pricing__wrapper--popular' : ''}`}>
              <Card 
                variant={plan.cardVariant as 'outlined' | 'elevated'} 
                padding="lg"
                style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                {plan.isPopular && <span className="pricing__tag">En Popüler</span>}
                
                <h3 className="pricing__plan-title">{plan.title}</h3>
                <div className="pricing__cost">
                  <span className="pricing__amount">{plan.price}</span>
                  <span className="pricing__period">{plan.period}</span>
                </div>

                <ul className="pricing__features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="pricing__feature-item">
                      <span className="check-icon">✓</span> {feature}
                    </li>
                  ))}
                </ul>

                {/* Butonu en alta itmek için margin-top: auto kullanacağız */}
                <div style={{ marginTop: 'auto' }}>
                  <Button variant={plan.buttonVariant as any} fullWidth>
                    Planı Seç
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};