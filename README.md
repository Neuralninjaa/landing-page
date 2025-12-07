# 🚀 Landing Page Projesi

Modern, erişilebilir ve responsive bir ürün tanıtım landing page'i.

## 🌐 Canlı Demo

🔗 [Demo Linki](https://vercel.com/neuralninjaas-projects/landing-page/G8Fph5MJrvgxsJYfqjv2Tt2rRX5s)

---

## ✨ Özellikler

### 🎨 Tema Sistemi
- ✅ Dark/Light tema desteği
- ✅ Smooth geçiş animasyonları (0.3s)
- ✅ CSS Variables tabanlı tema yönetimi
- ✅ Modern toggle switch

### 📱 Responsive Tasarım
- ✅ Mobil-öncelikli yaklaşım (Mobile-First)
- ✅ 3 Breakpoint: ≤640px, 641-1024px, ≥1025px
- ✅ Grid/Flexbox ile esnek düzen

### ♿ Erişilebilirlik
- ✅ Semantic HTML
- ✅ ARIA labels ve roles
- ✅ Klavye navigasyonu
- ✅ Focus indicators
- ✅ Ekran okuyucu uyumlu

### 🧩 Bileşenler (UI Library)
- **Button**: 5 varyasyon (Primary, Secondary, Outline, Ghost, Danger)
- **Input**: Label, placeholder, error state desteği
- **Card**: Elevated ve Outlined varyasyonları
- **Modal**: Keyboard support, backdrop close
- **Accordion**: Smooth animations

### 📄 Sayfalar/Bölümler
- **Hero**: Modern nokta deseni, floating animasyon
- **Features**: 3 sütunlu grid, hover efektleri
- **Pricing**: 3 plan, "En Popüler" vurgusu
- **FAQ**: Accordion ile SSS
- **Contact**: Form validasyonu

---

## 🛠️ Teknolojiler

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: SCSS (BEM metodolojisi)
- **Linting**: ESLint + Prettier

---

## 📦 Kurulum

### Gereksinimler
- Node.js 18+
- npm veya yarn

### Adımlar

1. **Projeyi klonla**
```bash
git clone https://github.com/Neuralninjaa/landing-page.git
cd landing-page
```

2. **Bağımlılıkları yükle**
```bash
npm install
```

3. **Geliştirme sunucusunu başlat**
```bash
npm run dev
```

4. **Production build al**
```bash
npm run build
```

5. **Preview (build önizleme)**
```bash
npm run preview
```

---

## 📂 Proje Yapısı

```
landing-page/
├── src/
│   ├── components/          # UI bileşenleri
│   │   ├── Accordion/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Input/
│   │   ├── Modal/
│   │   └── ThemeToggle/
│   ├── sections/            # Sayfa bölümleri
│   │   ├── Hero/
│   │   ├── Features/
│   │   ├── Pricing/
│   │   ├── FAQ/
│   │   └── Contact/
│   ├── styles/              # Global stiller
│   │   ├── _variables.scss
│   │   ├── _reset.scss
│   │   └── main.scss
│   ├── App.tsx
│   └── main.tsx
├── docs/
│   └── adr/                 # Architecture Decision Records
├── public/
├── CHANGELOG.md
├── README.md
└── package.json
```

---

## 🎨 Tasarım Kararları

### Renk Paleti

**Light Mode:**
- Background: `#f5f7fa` (Soft off-white)
- Surface: `#fafbfc`
- Primary: `#3b82f6` (Blue)
- Text: `#0f172a`

**Dark Mode:**
- Background: `#111827` (Dark gray)
- Surface: `#1f2937`
- Primary: `#60a5fa` (Light blue)
- Text: `#f9fafb`

### CSS Metodolojisi
- BEM (Block Element Modifier) isimlendirme
- SCSS ile modüler yapı
- CSS Variables ile tema yönetimi

---

## 📊 Performans

### Lighthouse Skorları
- Performance: /100
- Accessibility: /100
- Best Practices: /100
- SEO: /100

*(Screenshot eklenecek)*

---


### Commit Kuralları
Conventional Commits standardı kullanılıyor:
- `feat:` Yeni özellik
- `fix:` Bug düzeltme
- `docs:` Dokümantasyon
- `style:` Kod formatı
- `refactor:` Kod iyileştirme
- `test:` Test ekleme
- `chore:` Genel işler

---

## 👨‍💻 Geliştirici

**Yusuf Can Turhan**
- GitHub: [@Neuralninjaa](https://github.com/Neuralninjaa)
- LinkedIn: [www.linkedin.com/in/yusufcanturhan]

---
