// src/App.tsx
import React, { useState } from 'react';
import './styles/main.scss'; // Global stilleriniz (varsa)

// Bileşenleri doğru yoldan çağırdığımıza emin olun
import { Input } from './components/Input/Input';
import { Button } from './components/Button/Button';

function App() {
  // --- Form Mantığı (State'ler) ---
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: ''
  });

  // Input değiştikçe çalışacak fonksiyon
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Kullanıcı yazarken ilgili hatayı temizle
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Gönder butonuna basılınca çalışacak fonksiyon
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Sayfanın yenilenmesini engelle
    
    const newErrors = { name: '', email: '' };
    let isValid = true;

    // 1. İsim kontrolü
    if (!formData.name.trim()) {
      newErrors.name = 'Lütfen adınızı giriniz.';
      isValid = false;
    }

    // 2. Email kontrolü (Regex ile format kontrolü)
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
      // Başarılı durum
      alert(`Form Başarılı!\nAd: ${formData.name}\nEmail: ${formData.email}`);
      console.log('Gönderilen Veri:', formData);
      
      // Formu sıfırla
      setFormData({ name: '', email: '' });
    }
  };

  return (
    <div className="App">
      <main className="container" style={{ maxWidth: '400px', margin: '50px auto', padding: '0 20px' }}>
        
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Hoş Geldiniz</h1>

        {/* --- İletişim Formu --- */}
        <section className="contact-form">
          <h2 style={{ marginBottom: '1.5rem' }}>İletişim</h2>
          
          <form onSubmit={handleSubmit} noValidate>
            
            {/* Ad Soyad Input */}
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

            {/* Email Input */}
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

            {/* Submit Butonu */}
            <Button 
              variant="primary" 
              size="md" 
              type="submit"
            >
              Gönder
            </Button>
            
          </form>
        </section>

      </main>
    </div>
  );
}

export default App;