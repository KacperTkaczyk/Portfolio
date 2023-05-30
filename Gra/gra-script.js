let kwadrat = document.getElementById('kwadrat');
let punkty = document.getElementById('punkty');
let sklep = document.getElementById('sklep');
let kupButton = document.getElementsByClassName('kup-button');
let liczbaPunktow = 0;
let szansaNa2x = 0; 
let cena2x = 100;
let Niebieski = 300;

kwadrat.addEventListener('click', function() {
  let losowaLiczba = Math.random();

  if (losowaLiczba < szansaNa2x) {
    liczbaPunktow += 2;
  } else {
    liczbaPunktow++;
  }

  punkty.textContent = 'Punkty: ' + liczbaPunktow;
});

function kupPrzedmiot(0) {
  if (liczbaPunktow >= cena2x) {
    liczbaPunktow -= cena2x;
    szansaNa2x = 0.15;
    punkty.textContent = 'Punkty: ' + liczbaPunktow;
    kupButton[index].style.display = 'none'; 
  } else {
    alert('Nie masz wystarczającej liczby punktów!');
  }
}
function kupPrzedmiot(1) {
  if (liczbaPunktow >= Niebieski ) {
    liczbaPunktow -= Niebieski;
    document.getElementById('kwadrat1');
    kupButton[index].style.display = 'none'; 
  } else {
    alert('Nie masz wystarczającej liczby punktów!');
  }
}
