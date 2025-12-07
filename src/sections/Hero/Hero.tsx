import { Button } from '../../components/Button/Button';
import './Hero.scss';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <h1 className="hero__title">
            Dijital Dünyada <span className="text-gradient">İzinizi Bırakın</span>
          </h1>
          <p className="hero__description">
            Modern, hızlı ve erişilebilir web çözümleri ile işinizi büyütün. 
            Hazır bileşen kütüphanemiz ile projelerinizi saatler içinde canlıya alın.
          </p>
          <div className="hero__actions">
            <Button variant="primary" size="lg">Hemen Başla</Button>
            <Button variant="outline" size="lg">Daha Fazla Bilgi</Button>
          </div>
        </div>
        
        {/* Görsel Alanı (Placeholder) */}
        <div className="hero__image">
          <div className="hero__image-placeholder">
            <span>Ürün Görseli / Dashboard</span>
          </div>
        </div>
      </div>
    </section>
  );
};