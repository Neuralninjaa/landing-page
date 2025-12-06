import React, { useState } from 'react';
import './styles/main.scss';

// Bileşen Importları
import { Input } from './components/Input/Input';
import { Button } from './components/Button/Button';
import { Card } from './components/Card/Card'; // Yeni eklenen bileşen

function App() {
  // --- Form Mantığı (Değişmedi) ---
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = { name: '', email: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Lütfen adınızı giriniz.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'E-posta adresi zorunludur.';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz.';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      alert(`Form Başarılı!\nAd: ${formData.name}\nEmail: ${formData.email}`);
      console.log('Gönderilen Veri:', formData);
      setFormData({ name: '', email: '' });
    }
  };

  return (
    <div className="App">
      {/* Container genişliğini biraz artırdım ki yan yana kartlar sığabilsin (responsive) */}
      <main className="container" style={{ maxWidth: '800px', margin: '50px auto', padding: '0 20px' }}>
        
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Component Test Sahnesi</h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          {/* 1. KULLANIM: Formu Card İçine Aldık (Elevated) */}
          <section className="contact-section">
            <Card variant="elevated" padding="lg">
              <h2 style={{ marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>İletişim Formu</h2>
              
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ marginBottom: '1rem' }}>
                  <Input
                    id="name"
                    name="name"
                    label="Adınız Soyadınız"
                    placeholder="Örn: Yusuf Can"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    label="E-posta Adresi"
                    placeholder="ornek@mail.com"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                </div>

                <Button variant="primary" size="md" type="submit" fullWidth>
                  Gönder
                </Button>
              </form>
            </Card>
          </section>

          {/* 2. KULLANIM: Bilgi Kartı (Outlined & Interactive) */}
          <section className="info-section">
            <Card variant="outlined" padding="lg" isInteractive={true} style={{ height: '100%' }}>
              <h3 style={{ marginBottom: '1rem', color: '#666' }}>Bileşen Özellikleri</h3>
              <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
                Bu bölüm <strong>Card</strong> bileşeninin <code>outlined</code> varyasyonunu kullanır. 
                Ayrıca <code>isInteractive</code> özelliği açık olduğu için üzerine gelince (hover) hareket eder.
              </p>
              <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                <li>Responsive Yapı</li>
                <li>Gölge Yönetimi</li>
                <li>BEM Standartları</li>
              </ul>
            </Card>
          </section>

        </div>
      </main>
    </div>
  );
}

export default App;