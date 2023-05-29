let kwadrat = document.getElementById('kwadrat');
let punkty = document.getElementById('punkty');
let sklep = document.getElementById('sklep');
let kupButton = document.getElementsByClassName('kup-button');
let liczbaPunktow = 0;
let szansaNa2x = 0; // początkowo szansa na zdobycie 2x punktów wynosi 0
let cena2x = 100; // cena za "szansę na 2x punkty"

kwadrat.addEventListener('click', function() {
  let losowaLiczba = Math.random(); // losowanie liczby od 0 do 1

  if (losowaLiczba < szansaNa2x) {
    liczbaPunktow += 2;
  } else {
    liczbaPunktow++;
  }

  punkty.textContent = 'Punkty: ' + liczbaPunktow;
});

function kupPrzedmiot(index) {
  if (liczbaPunktow >= cena2x) {
    liczbaPunktow -= cena2x;
    szansaNa2x = 0.15; // ustawienie szansy na 2x punkty na 15%
    punkty.textContent = 'Punkty: ' + liczbaPunktow;
    kupButton[index].style.display = 'none'; // ukrycie kupionego przycisku
  } else {
    alert('Nie masz wystarczającej liczby punktów!');
  }
}
