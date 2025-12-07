import { useState, useEffect, lazy, Suspense } from 'react';
import './styles/main.scss';

// Bileşenler - Hemen yükle
import { Modal } from './components/Modal/Modal';
import { Button } from './components/Button/Button';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';

// Bölümler - Lazy load (Hero hariç)
import { Hero } from './sections/Hero/Hero';
const Features = lazy(() => import('./sections/Features/Features').then(m => ({ default: m.Features })));
const Pricing = lazy(() => import('./sections/Pricing/Pricing').then(m => ({ default: m.Pricing })));
const FAQ = lazy(() => import('./sections/FAQ/FAQ').then(m => ({ default: m.FAQ })));
const Contact = lazy(() => import('./sections/Contact/Contact').then(m => ({ default: m.Contact })));

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
      
      <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
        <Features />
      </Suspense>
      
      <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
        <Pricing />
      </Suspense>
      
      <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
        <FAQ />
      </Suspense>
      
      <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
        <Contact />
      </Suspense>

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