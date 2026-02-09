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

const imgEl = document.querySelector("#img1");
const imgEl2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const nameEl1 = document.querySelector("#name1");
const nameEl2 = document.querySelector("#name2");
const tutucular = document.querySelectorAll('.tutucu');
const resultEl = document.querySelector('.sonuc');

const pool = [...chars];

function random() {
        if (pool.length < 2){
                tutucular.forEach(tutucu => {
                        tutucu.style.display = 'none';

                });
                 return null;
        }
        const index1 = Math.floor(Math.random() * pool.length);
        const char1 = pool.splice(index1, 1)[0];

        const index2 = Math.floor(Math.random() * pool.length);
        const char2 = pool.splice(index2, 1)[0];

        return { char1, char2 };
}

