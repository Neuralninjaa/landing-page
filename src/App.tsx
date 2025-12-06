import { useState } from 'react';
import './styles/main.scss';

// Bileşenler
import { Modal } from './components/Modal/Modal';
import { Button } from './components/Button/Button';

// Bölümler
import { Hero } from './sections/Hero/Hero';
import { Features } from './sections/Features/Features';
import { Pricing } from './sections/Pricing/Pricing';
import { FAQ } from './sections/FAQ/FAQ';         // <-- Yeni
import { Contact } from './sections/Contact/Contact'; // <-- Yeni

function App() {
  // Modal state'i sadece Footer'daki sözleşme linki için gerekli olabilir,
  // şimdilik basitlik adına burada tutabiliriz veya Footer bileşeni yapınca oraya taşırız.
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <Contact />

      {/* Basit Footer */}
      <footer style={{ padding: '2rem', textAlign: 'center', background: '#1f2937', color: 'white' }}>
        <p>&copy; 2025 Landing Page Projesi. Tüm hakları saklıdır.</p>
        <div style={{ marginTop: '1rem' }}>
          <Button variant="ghost" size="sm" onClick={() => setIsModalOpen(true)} style={{ color: '#9ca3af' }}>
            Gizlilik ve Şartlar
          </Button>
        </div>
      </footer>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Yasal Uyarı"
      >
        <p>Bu proje eğitim amaçlı geliştirilmiştir. Hiçbir ticari değeri yoktur.</p>
      </Modal>
    </div>
  );
}

export default App;