let minRange = 0;
let maxRange = 0;
let a;
let usedGuesses = [];

function newNumber() {
  a = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
  console.log(a);
  usedGuesses = [];
  document.getElementById("akapit1").innerHTML = "";
  document.getElementById("akapit2").innerHTML = "";
  document.getElementById("akapit3").innerHTML = "";
  document.getElementById("checkButton").removeAttribute("disabled");
}


function chooseRange(range) {
  if (range === 1) {
    minRange = 1;
    maxRange = 10;
  } else if (range === 2) {
    minRange = 1;
    maxRange = 20;
  } else if (range === 3) {
    minRange = 1;
    maxRange = 100;
  }
  usedGuesses = [];
  document.getElementById("akapit1").innerHTML = "";
  document.getElementById("akapit2").innerHTML = "";
  document.getElementById("akapit3").innerHTML = "";
  document.getElementById("checkButton").setAttribute("disabled", true);
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
      document.getElementById("checkButton").setAttribute("disabled", true);
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
