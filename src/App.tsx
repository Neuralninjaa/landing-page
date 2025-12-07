import { useState, useEffect } from 'react';
import './styles/main.scss';

// Bileşenler
import { Modal } from './components/Modal/Modal';
import { Button } from './components/Button/Button';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';

// Bölümler
import { Hero } from './sections/Hero/Hero';
import { Features } from './sections/Features/Features';
import { Pricing } from './sections/Pricing/Pricing';
import { FAQ } from './sections/FAQ/FAQ';
import { Contact } from './sections/Contact/Contact';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Tema değişikliğini HTML'e uygula
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Tema toggle fonksiyonu
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      {/* Tema Toggle Butonu - Sağ üst köşede sabit */}
      <div style={{
        position: 'fixed',
        top: '1.5rem',
        right: '1.5rem',
        zIndex: 1000
      }}>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </div>

      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <Contact />

      {/* Footer */}
      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        borderTop: '1px solid var(--border-color)',
        transition: 'all 0.3s ease'
      }}>
        <p>&copy; 2025 Landing Page Projesi. Tüm hakları saklıdır.</p>
        <div style={{ marginTop: '1rem' }}>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsModalOpen(true)}
          >
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