let minZakres = 1;
let maxZakres = 1;
let a;
let uzyteProby = [];

function newNumber() {
  a = Math.floor(Math.random() * (maxZakres - minZakres + 1)) + minZakres;
  console.log(a);
  uzyteProby = [];
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
  uzyteProby = [];
  document.getElementById("akapit1").innerHTML = "";
  document.getElementById("akapit2").innerHTML = "";
  document.getElementById("akapit3").innerHTML = "";
  document.getElementById("sprawdzButton").setAttribute("disabled", true);
}

function myFunc() {
  let proba = document.getElementById("pole1").value;
  if (isNaN(proba)) {
    document.getElementById("akapit1").innerHTML = "Wprowadź liczbę!";
    document.getElementById("pole1").value = "";
    uzyteProby = [];
  } else {
    uzyteProby.push(proba);
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
  }
  document.getElementById("akapit2").innerHTML = "Twoje próby: " + uzyteProby.join(", ");
  document.getElementById("akapit3").innerHTML = "Liczba prób: " + uzyteProby.length;
}
