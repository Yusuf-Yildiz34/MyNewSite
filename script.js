const bir = document.getElementById('bir');
const iki = document.getElementById('iki');
const uc = document.querySelector('.uc');
const dort = document.querySelector('.dort');
const logo = document.getElementById("logo");

        if (logo) {
        logo.addEventListener("click", () => {
                window.open("index.html", "_blank");
        });
        }

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
        "Kieran O'Connella", "Aurora De Martel", "Aya", "Elijah Mikaelson", "Zenci Finn", "Camille O'Connella", "Caroline",
        "Rebekah Mikaelson", "Dahlia", "Damon", "Davina", "Diego", "Elena", "Esther",
        "Finn Mikaelson", "Freya Mikaelson", "Josh", "Hayley", "Jackson", "Kol", "Lucien Castle", "Marcel Gerard",
        "Mason Lockwood", "Mikael Mikaelson", "Bonnie", "Klaus Mikaelson", "Katherine Pierce", "Sage",
        "Alaric Saltzman", "Stephan Salvotore", "Tristan De Martel", "Tyler Lockwood"
];

const chars = [];
for (let i = 1; i <= 32; i++) {
        chars.push({
                img: i + ".mp4",
                name: names[i - 1]
        });
}

let imgEl1 = document.querySelector("#img1");
let imgEl2 = document.querySelector("#img2");
let nameEl1 = document.querySelector("#name1");
let nameEl2 = document.querySelector("#name2");
let tutucu1 = document.getElementById("tutucu1");
let tutucu2 = document.getElementById("tutucu2");
let tutucular = document.querySelectorAll(".tutucu");
let yazi = document.querySelector("#yazi");
let next = document.querySelector(".next");

let pool = [...chars];
let nextRound = [];
let currentIndex = 0;
let leftChar, rightChar;

shuffle(pool);
starter();

function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
        }
}

function starter() {

        if (pool.length === 1) {
                showWinner(pool[0]);
                return;
        }

        if (currentIndex >= pool.length) {

                pool = [...nextRound];
                nextRound = [];
                currentIndex = 0;

                if (pool.length === 1) {
                        showWinner(pool[0]);
                        return;
                }

                shuffle(pool);
                checkRound();
        }

        leftChar = pool[currentIndex];
        rightChar = pool[currentIndex + 1];

        if (!rightChar) return; // ekstra güvenlik

        imgEl1.src = leftChar.img;
        nameEl1.textContent = leftChar.name;

        imgEl2.src = rightChar.img;
        nameEl2.textContent = rightChar.name;
}


tutucu1.addEventListener("click", () => {
        nextRound.push(leftChar);
        currentIndex += 2;
        starter();
});

tutucu2.addEventListener("click", () => {
        nextRound.push(rightChar);
        currentIndex += 2;
        starter();
});

function checkRound() {

        if (pool.length === 16) changeTour("İkinci Tur");
        else if (pool.length === 8) changeTour("Çeyrek Final");
        else if (pool.length === 4) changeTour("Yarı Final");
        else if (pool.length === 2) changeTour("Final");
}

function changeTour(text) {

        next.innerText = text;

        tutucular.forEach(t => t.style.display = "none");
        yazi.style.display = "none";
        next.style.display = "block";
        next.classList.add("show");

        setTimeout(() => {
                next.classList.remove("show");
                tutucular.forEach(t => t.style.display = "flex");
                yazi.style.display = "block";
        }, 1500);
}
let sonuc = document.querySelector(".sonuc");
let img3 = document.getElementById("img3");
let result = document.getElementById("result");

function showWinner(winner) {

        tutucular.forEach(t => t.style.display = "none");
        yazi.style.display = "none";

        sonuc.classList.add("show");

        img3.src = winner.img;   
        img3.load();            
        img3.play().catch(() => { }); 
        result.innerText = "WINNER: " + winner.name;
        next.style.display = "none";
}