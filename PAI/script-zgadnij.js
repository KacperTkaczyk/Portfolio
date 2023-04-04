// Zmienne początkowe
let minZakres = 1;
let maxZakres = 10;
let a;
let uzyteProby = [];
let liczbaProb = 0; // dodana zmienna, aby śledzić liczbę prób

// Funkcja losująca nową liczbę
function newNumber() {
a = Math.floor(Math.random() * (maxZakres - minZakres + 1)) + minZakres;
console.log(a);
uzyteProby = [];
liczbaProb = 0; // resetuje liczbę prób
document.getElementById("akapit1").innerHTML = "";
document.getElementById("akapit2").innerHTML = "";
document.getElementById("akapit3").innerHTML = "";
document.getElementById("sprawdzButton").removeAttribute("disabled");
}

// Funkcja zmieniająca zakres liczb
function wybierzZakres(zakres) {
if (zakres === 1) {
minZakres = 1;
maxZakres = 10;
} else if (zakres === 2) {
minZakres = 1;
maxZakres = 20;
} else if (zakres === 3) {
minZakres = 1;
maxZakres = 100;
}
uzyteProby = [];
liczbaProb = 0; // resetuje liczbę prób
document.getElementById("akapit1").innerHTML = "";
document.getElementById("akapit2").innerHTML = "";
document.getElementById("akapit3").innerHTML = "";
document.getElementById("sprawdzButton").setAttribute("disabled", true);
}

// Funkcja przycisku Sprawdź
function myFunc() {
let proba = document.getElementById("pole1").value;
if (isNaN(proba)) {
document.getElementById("akapit1").innerHTML = "Wprowadź liczbę!";
document.getElementById("pole1").value = "";
uzyteProby = [];
liczbaProb = 0; // resetuje liczbę prób
} else {
uzyteProby.push(proba);
liczbaProb++; // zwiększa liczbę prób
if (proba == a) {
document.getElementById("akapit1").innerHTML = "Gratulacje! Zgadłeś!";
document.getElementById("pole1").value = "";
document.getElementById("sprawdzButton").setAttribute("disabled", true);
} else if (proba < a) {
document.getElementById("akapit1").innerHTML = "Za mała!";
document.getElementById("pole1").value = "";
} else {
document.getElementById("akapit1").innerHTML = "Za duża!";
document.getElementById("pole1").value = "";
}
if (liczbaProb == 5) { // maksymalna liczba prób 5
document.getElementById("akapit1").innerHTML = "Nie udało się zgadnąć w 5 próbach. Koniec gry!";
document.getElementById("sprawdzButton").setAttribute("disabled", true);
}
}
document.getElementById("akapit2").innerHTML = "Twoje próby: " + uzyteProby.join(", ");
document.getElementById("akapit3").innerHTML = "Liczba prób: " + liczbaProb;
}
