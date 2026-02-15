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
        "Amca", "Aurora", "Aya", "Babag", "Zenci Finn", "Cemile", "Caroline",
        "Rebekah", "Dahlia", "Damon", "Davina", "Diego", "Elena", "Esther",
        "Finn", "Freya", "Josh", "Hayley", "Jackson", "Kol", "Lucien", "Marcel",
        "Mason", "Mikael", "Bonnie", "Niklauss", "Sırret Kadın", "Sage",
        "Alaric Saltzman", "Stephan", "Tristan", "Tyler"
];

const chars = [];
for (let i = 1; i <= 32; i++) {
        chars.push({
                img: i + ".mp4",
                name: names[i - 1]
        });
}


let imgEl = document.querySelector("#img1");
let imgEl2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");
let nameEl1 = document.querySelector("#name1");
let nameEl2 = document.querySelector("#name2");
let tutucular = document.querySelectorAll('.tutucu');
let resultEl = document.querySelector('.sonuc');
let resultsoz = document.querySelector('#result');
let tutucu1 = document.getElementById('tutucu1');
let tutucu2 = document.getElementById('tutucu2');

let yazi = document.querySelector("#yazi");
let char1, char2;
let pool = [...chars];
let pool2 = [];
let pool3 = [];
let pool4 = [];
let pool5 = [];
let winner;


function random() {
        
        

        const index1 = Math.floor(Math.random() * pool.length);
        char1 = pool.splice(index1, 1)[0];
        

        const index2 = Math.floor(Math.random() * pool.length);
        char2 = pool.splice(index2, 1)[0];
        
        
       
        imgEl.src = char1.img;
        nameEl1.textContent = char1.name;
        imgEl2.src = char2.img;
        nameEl2.textContent = char2.name;

    
}
tutucu1.addEventListener('click', () => {

        if (pool.length > 0) {
                
                random();
        }

        else if (pool2.length > 0 && pool.length === 0  ) {
                secTour();
                pool3.push(char1);
                random2();
        }

        else if (pool3.length > 0 && pool.length === 0 && pool2.length === 0) {
                thirdTour();
                pool4.push(char1);
                random3();
        }

        else if (pool4.length > 0 && pool.length === 0 && pool2.length === 0 && pool3.length === 0) {
                fourthTour();
                pool5.push(char1);
                random4();
        }
        else if (pool5.length > 0 && pool4.length === 0 && pool.length === 0 && pool2.length === 0 && pool3.length === 0) {
                fifthTour();
                resultEl = char1;
               
        }
});


tutucu2.addEventListener('click', () => {

        if (pool.length > 0) {
                pool2.push(char2);
                random();
        }

        else if (pool2.length > 0 && pool.length === 0  ) {
                secTour();
                pool3.push(char2);
                random2();
        }

        else if (pool3.length > 0  && pool.length === 0 && pool2.length === 0) {
                thirdTour();
                pool4.push(char2);
                random3();
        }

        else if (pool4.length > 0 && pool.length === 0 && pool2.length === 0 && pool3.length === 0) {
                fourthTour();
                pool5.push(char2);
                random4();
        }
        else if (pool5.length > 0 && pool4.length === 0 && pool.length === 0 && pool2.length === 0 && pool3.length === 0){
                fifthTour();
                winner.textContent  = char2.name;
                winner.src = char2.img;
                
        }
});




function random2() {
        

        const index55 = Math.floor(Math.random() * pool2.length);
        char1 = pool2.splice(index55, 1)[0];
        

        const index3 = Math.floor(Math.random() * pool2.length);
        char2 = pool2.splice(index3, 1)[0];

        imgEl.src = char1.img;
        nameEl1.textContent = char1.name;
        imgEl2.src = char2.img;
        nameEl2.textContent = char2.name;

}

function random3() {
        

        const index8 = Math.floor(Math.random() * pool3.length);
        char1 = pool3.splice(index8, 1)[0];

        const index9 = Math.floor(Math.random() * pool3.length);
        char2 = pool3.splice(index9, 1)[0];

        imgEl.src = char1.img;
        nameEl1.textContent = char1.name;
        imgEl2.src = char2.img;
        nameEl2.textContent = char2.name;
}
function random4() {

        if (pool4.length < 2) return;
        const index12 = Math.floor(Math.random() * pool4.length);
        char1 = pool4.splice(index12, 1)[0];

        const index11 = Math.floor(Math.random() * pool4.length);
        char2 = pool4.splice(index11, 1)[0];

        imgEl.src = char1.img;
        nameEl1.textContent = char1.name;
        imgEl2.src = char2.img;
        nameEl2.textContent = char2.name;
}

 
function secTour() {
        if (pool.length < 2) {
                tutucular.forEach((tutucu) => {
                        tutucu.style.display = 'none';
                });
                const next = document.querySelector('.next');
                if (next && yazi) {
                        next.style.display = 'block';
                        yazi.style.display = 'none';
                        next.classList.add('show');
                        
                        setTimeout(() => {
                                next.classList.remove('show');
                                tutucular.forEach((tutucu) => {
                                        tutucu.style.display = 'flex';
                                       
                                });
                                yazi.style.display = 'block';
                            
                        }, 1500);
                }
                secTour = function () { };

}
}
function thirdTour() {
      
        if (pool2.length < 2) {
                const next = document.querySelector('.next');
               next.innerText = next.innerText.replace(
                        /Second\s*Tour/gi,
                        "Third Tour"
                );
                tutucular.forEach((tutucu) => {
                        tutucu.style.display = 'none';
                });
                
                if (next && yazi) {
                        next.style.display = 'block';
                        yazi.style.display = 'none';
                        next.classList.add('show');

                        setTimeout(() => {
                                next.classList.remove('show');
                                tutucular.forEach((tutucu) => {
                                        tutucu.style.display = 'flex';

                                });
                                yazi.style.display = 'block';

                        }, 1500);
                }
                thirdTour = function () { };

        }
}
function fourthTour() {

        if (pool3.length < 2) {
                const next = document.querySelector('.next');
                next.innerText = next.innerText.replace(
                        /Second\s*Tour/gi,
                        "Fourth Tour"
                );
                tutucular.forEach((tutucu) => {
                        tutucu.style.display = 'none';
                });

                if (next && yazi) {
                        next.style.display = 'block';
                        yazi.style.display = 'none';
                        next.classList.add('show');

                        setTimeout(() => {
                                next.classList.remove('show');
                                tutucular.forEach((tutucu) => {
                                        tutucu.style.display = 'flex';

                                });
                                yazi.style.display = 'block';

                        }, 1500);
                }
                fourthTour = function () { };

        }
}
function fifthTour() {

        if (pool4.length < 2) {
                const next = document.querySelector('.next');
                next.innerText = next.innerText.replace(
                        /Second\s*Tour/gi,
                        "Fifth Tour"
                );
                tutucular.forEach((tutucu) => {
                        tutucu.style.display = 'none';
                });

                if (next && yazi) {
                        next.style.display = 'block';
                        yazi.style.display = 'none';
                        next.classList.add('show');

                        setTimeout(() => {
                                next.classList.remove('show');
                                tutucular.forEach((tutucu) => {
                                        tutucu.style.display = 'flex';

                                });
                                yazi.style.display = 'block';

                        }, 1500);
                }
                fifthTour = function () { };

        }
}
random();
