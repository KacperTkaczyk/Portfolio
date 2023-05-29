let kwadrat = document.getElementById('kwadrat');
let punkty = document.getElementById('punkty');
let sklep = document.getElementById('sklep');
let kupButton = document.getElementsByClassName('kup-button');
let liczbaPunktow = 0;
let szansaNa2x = 0.15; // 15% szansa na zdobycie 2x punktów
let cena2x = 100; // cena za "szansę na 2x punkty"
let zdrapka = document.getElementById('zdrapka');
let zdrapkaTekst = document.getElementById('zdrapka-tekst');
let cenaZdrapki = 50; // cena zdrapki
let zdrapkaZdrapana = false; // flaga, czy zdrapka została zdrapana

kwadrat.addEventListener('click', function() {
  if (szansaNa2x > 0) {
    let losowaLiczba = Math.random(); // losowanie liczby od 0 do 1

    if (losowaLiczba < szansaNa2x) {
      liczbaPunktow += 2;
    } else {
      liczbaPunktow++;
    }

    punkty.textContent = 'Punkty: ' + liczbaPunktow;
  }
});

function kupPrzedmiot(index) {
  if (liczbaPunktow >= cena2x) {
    liczbaPunktow -= cena2x;
    szansaNa2x += 0.15; // zwiększenie szansy na 2x punkty o 15%
    punkty.textContent = 'Punkty: ' + liczbaPunktow;
    kupButton[index].style.display = 'none'; // ukrycie kupionego przycisku
  } else {
    alert('Nie masz wystarczającej liczby punktów!');
  }
}

function pokazZdrapke() {
  if (liczbaPunktow >= cenaZdrapki && !zdrapkaZdrapana) {
    liczbaPunktow -= cenaZdrapki;
    punkty.textContent = 'Punkty: ' + liczbaPunktow;
    zdrapka.style.display = 'block'; // Pokazanie zdrapki

    zdrapka.addEventListener('click', zdrapZdrapke);
  } else if (zdrapkaZdrapana) {
    alert('Zdrapka została już odkryta!');
  } else {
    alert('Nie masz wystarczającej liczby punktów!');
  }
}

function zdrapZdrapke() {
  if (!zdrapkaZdrapana) {
    zdrapka.classList.add('uncovered');
    zdrapkaTekst.textContent = 'Wygrałeś 10 punktów!';
    zdrapkaZdrapana = true;
  }
}
