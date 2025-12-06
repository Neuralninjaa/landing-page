# Changelog

Bu proje için yapılan tüm değişiklikler bu dosyada belgelenecektir.

## [Unreleased]
### Eklendi
- **Landing Page Bölümleri:** Sayfa yapısı modüler hale getirildi ve `src/sections` altına taşındı.
  - `Hero`: Ana karşılama ekranı.
  - `Features`: Özellikler ızgarası (Grid).
  - `Pricing`: Fiyatlandırma kartları ve paket seçenekleri.
  - `FAQ`: Sıkça Sorulan Sorular bölümü (Accordion entegrasyonu).
  - `Contact`: İletişim formu bölümü.
- **Footer:** Sayfa altı bilgileri ve yasal uyarı modal tetikleyicisi içeren footer alanı eklendi.
- Modal: Kullanıcı etkileşimi ve uyarılar için Modal (Dialog) bileşeni eklendi.
  - `isOpen`, `onClose`, `title`, `footer` propları.
  - Klavye erişilebilirliği: `Esc` tuşu ile kapatma özelliği.
  - Backdrop (arka plan) tıklaması ile kapatma.
  - Fade-in ve Scale-up CSS animasyonları.
- Accordion: Sıkça Sorulan Sorular (SSS) ve daraltılabilir içerikler için Accordion bileşeni eklendi.
  - `items` prop: Başlık ve içerik verisi yönetimi için.
  - `aria-expanded` ve `aria-controls` ile tam erişilebilirlik desteği.
  - Açılma/Kapanma animasyonu için ikon rotasyonu ve stil yönetimi.
- Card: İçerik kapsayıcı olarak kullanılmak üzere Card bileşeni eklendi.
  - `variant` prop: 'elevated' (varsayılan) ve 'outlined'.
  - `padding` prop: İç boşluk kontrolü.
  - `isInteractive` prop: Hover animasyonları için.
- Input Bileşeni: Label, placeholder ve hata mesajı (error state) desteği içeren yeniden kullanılabilir Input bileşeni oluşturuldu.
- TypeScript konfigürasyon hatalarını gidermek için `@types/node` paketi eklendi.
- Button bileşeni (Primary, Secondary, Outline, Ghost, Danger varyasyonları) eklendi.
- SCSS klasör yapısı ve reset dosyaları oluşturuldu.
- ESLint ve Prettier konfigürasyonları eklendi.
- Proje kurulumu (Vite + React + TS) yapıldı.

### Değiştirildi
- **App.tsx:** "Component Test Sahnesi" yapısından çıkarılarak, oluşturulan tüm bölümlerin (`Hero`, `Features`, `Pricing`, `FAQ`, `Contact`) birleştirildiği ana sayfa yapısına dönüştürüldü.
- App: Demo ekranı (`App.tsx`) güncellendi. 
  - "Detaylı Bilgi" ve "Sözleşme" senaryosu için Modal entegrasyonu yapıldı.
  - Mevcut iletişim formu `Card` bileşeni ile sarmalandı.
  - `useState` tanımları kapsam (scope) hatalarını önlemek için üst seviyeye taşındı.