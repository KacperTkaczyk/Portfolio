let kwadrat = document.getElementById('kwadrat');
let punkty = document.getElementById('punkty');
let sklep = document.getElementById('sklep');
let kupButton = document.getElementsByClassName('kup-button');
let liczbaPunktow = 0;
let szansaNa2x = 0;
let cena2x = 10;

kwadrat.addEventListener('click', function() {
  let losowaLiczba = Math.random();

  if (losowaLiczba < szansaNa2x) {
    liczbaPunktow += 2;
  } else {
    liczbaPunktow++;
  }

  punkty.textContent = 'Punkty: ' + liczbaPunktow;
});

function kupPrzedmiot(index) {
  if (index === 1 && liczbaPunktow >= 300) {
    liczbaPunktow -= 300;
    szansaNa2x = 0.15;
    punkty.textContent = 'Punkty: ' + liczbaPunktow;
    kupButton[index].style.display = 'none';
    kwadrat.style.backgroundColor = 'blue';
    kwadrat.removeEventListener('click', handleClick);
  } else {
    alert('Nie masz wystarczającej liczby punktów lub nieprawidłowy indeks przedmiotu!');
  }
}
