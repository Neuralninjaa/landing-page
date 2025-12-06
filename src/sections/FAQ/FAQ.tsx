import { Accordion } from '../../components/Accordion/Accordion';
import './FAQ.scss';

export const FAQ = () => {
  const faqItems = [
    {
      id: 1,
      title: 'Proje hangi teknolojileri kullanıyor?',
      content: 'Bu proje React, TypeScript ve SCSS kullanılarak geliştirilmiştir. Build aracı olarak Vite tercih edilmiştir.'
    },
    {
      id: 2,
      title: 'Bileşenler erişilebilir mi?',
      content: 'Evet, tüm bileşenler WAI-ARIA standartlarına uygun olarak geliştirilmekte ve klavye navigasyonunu desteklemektedir.'
    },
    {
      id: 3,
      title: 'Responsive tasarım var mı?',
      content: 'Kesinlikle. Mobil-öncelikli (mobile-first) yaklaşım benimsenmiştir ve 3 farklı breakpoint desteği mevcuttur.'
    },
    {
      id: 4,
      title: 'Lisans durumu nedir?',
      content: 'Bu proje açık kaynaklıdır ve MIT lisansı ile dağıtılmaktadır. Ticari projelerinizde rahatlıkla kullanabilirsiniz.'
    }
  ];

  return (
    <section className="faq">
      <div className="container">
        <div className="faq__header">
          <h2 className="faq__title">Sıkça Sorulan Sorular</h2>
          <p className="faq__subtitle">Aklınıza takılan soruların cevapları burada.</p>
        </div>
        
        <div className="faq__content">
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
};