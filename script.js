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
                "selam kizlar"
        );
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
