const bir = document.getElementById('bir');
const iki = document.getElementById('iki');
const uc = document.querySelector('.uc');
const dort = document.querySelector('.dort');

if (iki) {
        iki.addEventListener('click', () => {
                localStorage.setItem("testType", "kilic");
                window.open("originals.html", "_blank");
        });
}

if (uc) {
        uc.addEventListener('click', () => {
                localStorage.setItem("testType", "ADC");
                window.open("originals.html", "_blank");
        });
}

if (dort) {
        dort.addEventListener('click', () => {
                localStorage.setItem("testType", "kurtlar");
                window.open("originals.html", "_blank");
        });
}

const testType = localStorage.getItem("testType");
let ilktxtEl = document.querySelector('.ilktxt');

if (ilktxtEl && testType === "kurtlar") {
        ilktxtEl.innerText = ilktxtEl.innerText.replace(
                /originals\s*characters/gi,
                "Kurtlar Vadisi"
        );
        localStorage.removeItem("testType");
}

if (ilktxtEl && testType === "ADC") {
        ilktxtEl.innerText = ilktxtEl.innerText.replace(
                /originals\s*characters/gi,
                "ADC"
        );
        localStorage.removeItem("testType");
}

if (ilktxtEl && testType === "kilic") {
        ilktxtEl.innerText = ilktxtEl.innerText.replace(
                /originals\s*characters/gi,
                "KILIC"
        );
        localStorage.removeItem("testType");
}

const gcont = document.querySelectorAll('.gcont');
if (gcont) {
        gcont.forEach((element) => {
                element.addEventListener('click', () => {
                        window.open('originals.html', '_blank');
                });
        });
           
}
const start = document.getElementById('start');
const control = document.querySelector('.control');

if (start && control) {
        start.addEventListener('click', () => {
                control.style.display = 'none';
                const main = document.querySelector('.main');
                if (main) {
                        main.style.display = 'block';
                }
        });

}

if (iki) {
        iki.addEventListener('click', () => {
                window.open('originals.html', '_blank');
        });

}
const input = document.getElementById("search");
const property = document.getElementById("property");

input.addEventListener("input", () => {
        property.textContent = input.value;
});
const names = [
        "Amca", "Aurora", "Aya", "Babag", "Zenci Finn", "Cemile", "Caroline",
        "Rebekah", "Dahlia", "Damon", "Davina", "Diego", "Elena", "Esther",
        "Finn", "Freya", "Josh", "Hayley", "Jackson", "Kol", "Lucien", "Marcel",
        "Mason", "Mikael", "Bonnie", "Niklauss", "Sırret Kadın", "Sage",
        "Alaric Saltzman", "Stephan", "Tristan", "Tyler"
];

const chars = [];
for (let i = 1; i <= 32; i++) {
        chars.push({
                img: i + ".jpg",
                name: names[i - 1]
        });
}

// HTML Elementlerini Seç
const imgEl = document.querySelector("#img1");
const imgEl2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const nameEl1 = document.querySelector("#name1");
const nameEl2 = document.querySelector("#name2");
const tutucular = document.querySelectorAll('.tutucu');
const resultEl = document.querySelector('.sonuc');
const resultsoz = document.querySelector('#result');
const tutucu1 = document.getElementById('tutucu1');
const tutucu2 = document.getElementById('tutucu2');

// Değişkenler
let char1, char2;
const pool = [...chars];

// Rastgele Karakter Getirme Fonksiyonu
function random() {
        // Eğer havuzda kimse kalmadıysa işlem yapma (Hata önleyici)
        if (pool.length === 0) return;

        // 1. Karakteri seç ve havuzdan sil
        const index1 = Math.floor(Math.random() * pool.length);
        char1 = pool.splice(index1, 1)[0];

        // 2. Karakteri seç ve havuzdan sil
        const index2 = Math.floor(Math.random() * pool.length);
        char2 = pool.splice(index2, 1)[0];

        // Ekrana Yazdır
        imgEl.src = char1.img;
        nameEl1.textContent = char1.name;
        imgEl2.src = char2.img;
        nameEl2.textContent = char2.name;

        // Eğer havuz bittiyse (son 2 kişi ekrandaysa) final fonksiyonunu hazırla
        if (pool.length === 0) {
                last();
        }
}

// Son Aşama Fonksiyonu (Final Seçimi)
function last() {
        // Not: Buradaki listener'lar sadece son turda devreye girip sonucu belirler.

        tutucu1.addEventListener('click', () => {
                // Sol taraf kazandı
                resultsoz.textContent = nameEl1.textContent + " Kazandı!";
                img3.src = imgEl.src;
                oyunuBitir();
        });

        tutucu2.addEventListener('click', () => {
                // Sağ taraf kazandı
                resultsoz.textContent = nameEl2.textContent + " Kazandı!";
                img3.src = imgEl2.src;
                oyunuBitir();
        });
}

// Oyunu bitirip ekranı temizleyen yardımcı fonksiyon
function oyunuBitir() {
        tutucular.forEach(tutucu => {
                tutucu.style.display = 'none'; // Seçenekleri gizle
        });
        resultEl.style.display = 'block'; // Sonucu göster
}

// Oyunu Başlat
random();

// Tıklama Olayları (Genel Döngü İçin)
tutucular.forEach(tutucu => {
        tutucu.addEventListener('click', () => {
                // Eğer havuzda hala eleman varsa yeni tur getir
                if (pool.length > 0) {
                        random();
                }
                // Eğer havuz boşsa (pool 0), yukarıdaki 'last' fonksiyonundaki click çalışacak
                // ve oyunu bitirecektir.
        });
});
