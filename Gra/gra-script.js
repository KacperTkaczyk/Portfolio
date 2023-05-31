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
  if (index === 1 && liczbaPunktow >= 10) {
    liczbaPunktow -= 10;
    szansaNa2x = 0.15;
    punkty.textContent = 'Punkty: ' + liczbaPunktow;
    kupButton[index].style.display = 'none';
    kwadrat.style.display = 'none';
    let kwadrat1 = document.createElement('div');
    kwadrat1.id = 'kwadrat1';
    kwadrat1.style.width = '200px';
    kwadrat1.style.height = '200px';
    kwadrat1.style.backgroundColor = 'blue';
    kwadrat1.style.position = 'absolute';
    kwadrat1.style.top = '50%';
    kwadrat1.style.left = '50%';
    kwadrat1.style.transform = 'translate(-50%, -50%)';
    kwadrat1.style.cursor = 'pointer';
    document.body.appendChild(kwadrat1);
    kwadrat1.addEventListener('click', function() {
      let losowaLiczba = Math.random();
    
      if (losowaLiczba < szansaNa2x) {
        liczbaPunktow += 2;
      } else {
        liczbaPunktow++;
      }
    
      punkty.textContent = 'Punkty: ' + liczbaPunktow;
    });
  } else {
    alert('Nie masz wystarczającej liczby punktów lub nieprawidłowy indeks przedmiotu!');
  }
}
