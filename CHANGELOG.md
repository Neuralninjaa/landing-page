# Changelog

Bu proje için yapılan tüm değişiklikler bu dosyada belgelenecektir.

## [Unreleased]
### Eklendi
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
App: Demo ekranı (`App.tsx`) güncellendi. Mevcut iletişim formu `Card` bileşeni ile sarmalandı ve bileşen varyasyonlarını test etmek için 'Bilgi Kartı' bölümü eklendi.
- App.tsx: İçerik, "Button Component Test" sayfasından "Hoş Geldiniz / İletişim" form yapısına güncellendi.