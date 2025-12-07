# ADR-001: Dark/Light Tema Sistemi

**Tarih**: 2025-12-07  
**Durum**: Kabul Edildi  
**Bağlam**: Landing Page Projesi - Tema Toggle Özelliği

---

## Karar

CSS Variables tabanlı bir tema sistemi uygulanmasına karar verildi.

---

## Bağlam

Kullanıcı deneyimini iyileştirmek ve modern web standartlarına uymak için dark/light tema desteği eklenmesi gerekiyordu.

---

## Değerlendirilen Alternatifler

### 1. CSS-in-JS (Styled Components)
- ❌ Ekstra paket dependency
- ❌ Runtime overhead
- ✅ Component-scoped styles

### 2. Tailwind Dark Mode
- ❌ Harici UI kütüphanesi yasak (PDF gereksinimi)
- ✅ Hızlı geliştirme

### 3. CSS Variables (Seçilen)
- ✅ Native browser support
- ✅ Performanslı (no runtime cost)
- ✅ Kolay bakım
- ✅ SCSS ile uyumlu

---

## Karar

**CSS Variables** ile tema yönetimi seçildi.

### Uygulama:
```scss
:root {
  --bg-primary: #f5f7fa;
  --text-primary: #0f172a;
  --primary-color: #3b82f6;
}

[data-theme='dark'] {
  --bg-primary: #111827;
  --text-primary: #f9fafb;
  --primary-color: #60a5fa;
}
```

### Tema Yönetimi:
- React state ile `data-theme` attribute kontrolü
- Session-based (localStorage yasak PDF'e göre)
- Smooth transitions (0.3s)

---

## Sonuçlar

### Pozitif:
- ✅ Native, performanslı
- ✅ Tüm bileşenler otomatik uyumlu
- ✅ Kolay genişletilebilir
- ✅ SEO dostu (SSR uyumlu)

### Negatif:
- ⚠️ IE11 desteği yok (modern browsers only)
- ⚠️ Tema tercihi persist edilmiyor (localStorage yasak)

---

## Notlar

Gelecekte localStorage desteği eklenirse, tema tercihi kalıcı hale getirilebilir.