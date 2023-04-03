let minZakres = 1;
let maxZakres = 1;
let a;
let usedGuesses = [];

function newNumber() {
  a = Math.floor(Math.random() * (maxZakres - minZakres + 1)) + minZakres;
  console.log(a);
  usedGuesses = [];
  document.getElementById("akapit1").innerHTML = "";
  document.getElementById("akapit2").innerHTML = "";
  document.getElementById("akapit3").innerHTML = "";
  document.getElementById("sprawdzButton").removeAttribute("disabled");
}


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
  usedGuesses = [];
  document.getElementById("akapit1").innerHTML = "";
  document.getElementById("akapit2").innerHTML = "";
  document.getElementById("akapit3").innerHTML = "";
  document.getElementById("sprawdzButton").setAttribute("disabled", true);
}

function myFunc() {
  let guess = document.getElementById("pole1").value;
  if (isNaN(guess)) {
    document.getElementById("akapit1").innerHTML = "Wprowadź liczbę!";
    document.getElementById("pole1").value = "";
    usedGuesses = [];
  } else {
    usedGuesses.push(guess);
    if (guess == a) {
      document.getElementById("akapit1").innerHTML = "Gratulacje! Zgadłeś!";
      document.getElementById("pole1").value = "";
      document.getElementById("sprawdzButton").setAttribute("disabled", true);
    } else if (guess < a) {
      document.getElementById("akapit1").innerHTML = "Za mała!";
      document.getElementById("pole1").value = "";
    } else {
      document.getElementById("akapit1").innerHTML = "Za duża!";
      document.getElementById("pole1").value = "";
    }
  }
  document.getElementById("akapit2").innerHTML = "Twoje próby: " + usedGuesses.join(", ");
  document.getElementById("akapit3").innerHTML = "Liczba prób: " + usedGuesses.length;
}
