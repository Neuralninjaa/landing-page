import React, { useState } from 'react';
import { Card } from '../../components/Card/Card';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import './Contact.scss';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({ name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) setErrors(prev => ({ ...prev, [name]: '' }));
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
      alert(`Mesajınız alındı!\nAd: ${formData.name}\nEmail: ${formData.email}`);
      setFormData({ name: '', email: '' });
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="contact__wrapper">
          <Card variant="elevated" padding="lg">
            <div className="contact__header">
              <h2 className="contact__title">İletişime Geçin</h2>
              <p className="contact__text">Projeniz için bir teklif almak ister misiniz?</p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="contact__form-group">
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

              <div className="contact__form-group">
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

              <Button variant="primary" fullWidth type="submit">Gönder</Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};