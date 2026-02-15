BestPick (Mevcut Versiyon)

Bu proje, iki karakteri karşılaştırarak eleme usulü ilerleyen bir turnuva sistemidir. Kullanıcı her turda iki karakter arasından birini seçer ve seçilen karakter bir sonraki tura geçer. Sistem tamamen Vanilla JavaScript ile yazılmıştır ve herhangi bir framework kullanılmamıştır.

Çalışma Mantığı

Sistem çoklu havuz (pool) yapısı kullanmaktadır:

pool → İlk tur karakterleri
pool2 → 1. tur kazananları
pool3 → 2. tur kazananları
pool4 → 3. tur kazananları
pool5 → 4. tur kazananları

Akış şu şekilde ilerler:

random() fonksiyonu mevcut havuzdan iki rastgele karakter seçer.
Kullanıcı bir karaktere tıklar.
Seçilen karakter bir sonraki havuza aktarılır.
Mevcut havuz boşaldığında tur geçiş fonksiyonu tetiklenir.
Sistem bir üst havuz üzerinden devam eder.
Son turda kazanan belirlenir.

Kullanılan Fonksiyonlar

random() → İlk tur seçimleri
random2() → pool2 seçimleri
random3() → pool3 seçimleri
random4() → pool4 seçimleri

secTour() → 2. tur geçiş animasyonu
thirdTour() → 3. tur geçiş animasyonu
fourthTour() → 4. tur geçiş animasyonu
fifthTour() → Final tur geçiş animasyonu

Tur geçişlerinde:

Seçim alanları gizlenir
.next yazısı gösterilir
1.5 saniyelik animasyon uygulanır
Ardından bir sonraki tur başlatılır
LocalStorage Kullanımı
localStorage şu amaçlarla kullanılmaktadır:

Seçilen kategori bilgisini saklamak (kilic, ADC, kurtlar)
Turnuva sayfasında başlığı dinamik olarak değiştirmek
Bilinen Problemler
Bu sürüm çalışmakla birlikte mimari olarak bazı sorunlar içerir:
Aynı butona iki kez addEventListener tanımlanmıştir.
winner değişkeni tanımlanmadan kullanılmaya çalışılmıştir (ilerde duzeltilecek ama son tarih guncellemesi icin durum budur).

resultEl = char1 gibi DOM referansını bozan atamalar mevcut.
Bazı DOM elementleri null kontrolü yapılmadan kullanılıyor.
5 ayrı havuz kullanılması kodu gereksiz büyütüyor.
Koşul zincirleri fazla karmaşık.
Random fonksiyonlarında yeterli uzunluk kontrolü yok.
Teknik Özellikler
Vanilla JavaScript
DOM manipülasyonu
localStorage kullanımı
Rastgele eşleştirme algoritması
Çok turlu eleme sistemi
Genel Değerlendirme

Sistem temel olarak çalışmaktadır ancak mimari refactor gerektirmektedir. Daha sade bir yapı için tek aktif havuz + tek sonraki havuz mantığı önerilir. Mevcut versiyon öğrenme ve geliştirme aşamasındaki bir turnuva sistemi olarak değerlendirilebilir.

Bu proje eğitim ve geliştirme amaçlı oluşturulmuştur.