///////////////////////////A1///////////////////////////
//Array
const myArray = [1, 5, 3, 56, 7, 8, 4, 32, 7, 934, 234];

//function
function findeGroessteZahl(liste) {
  let grossteZahl = liste[0];
  for (let x = 0; x < liste.length; x++) {
    if (liste[x] > grossteZahl) {
      console.log(`Neue Grosste Zahl: ${liste[x]}`);
      grossteZahl = liste[x];
    }
  }
  let newListe = [];
  newListe.push(grossteZahl);
  console.log("Die Grosste Zahl auf liste ist: " + grossteZahl);
  console.log(newListe);
  return newListe;
}

findeGroessteZahl(myArray);

///////////////////////////A2///////////////////////////
//Array
const myWort = "Wie soll ich das machen?";

function entferneVokale(wort) {
  let myWortToListe = wort.split("");
  console.log(myWortToListe);
  let vokalenListe = [];
  for (let x = 0; x < myWortToListe.length; x++) {
    if (myWortToListe[x] == "a" || myWortToListe[x] == "A") {
      vokalenListe.push(myWortToListe[x]);
    }
    if (myWortToListe[x] == "e" || myWortToListe[x] == "E") {
      vokalenListe.push(myWortToListe[x]);
    }
    if (myWortToListe[x] == "i" || myWortToListe[x] == "I") {
      vokalenListe.push(myWortToListe[x]);
    }
    if (myWortToListe[x] == "o" || myWortToListe[x] == "O") {
      vokalenListe.push(myWortToListe[x]);
    }
    if (myWortToListe[x] == "u" || myWortToListe[x] == "U") {
      vokalenListe.push(myWortToListe[x]);
    }
  }
  console.log("Ende: " + vokalenListe);
}

entferneVokale(myWort);
///////////////////////////A3///////////////////////////
let wert1 = 123;
let wert2 = 121;
let wert3 = 1234567887654321;

function isPalindrome(number) {
  reverseX = "";
  for (let y = 0; y < number.toString().split("").reverse().length; y++) {
    reverseX += `${number.toString().split("").reverse()[y]}`;
  }

  if (number === parseInt(reverseX)) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isPalindrome(wert1);
isPalindrome(wert2);
isPalindrome(wert3);

///////////////////////////A4///////////////////////////
function berechneFlaeche(laenge, breite) {
  console.log("Flaeche: " + laenge * breite);
  return laenge * breite;
}

berechneFlaeche(2, 7);
///////////////////////////A5///////////////////////////
function konvertiereZuFahrenheit(celcius) {
  let fahrenheit = 33.8;
  console.log("Fahrenheit: " + celcius * fahrenheit);
  return celcius * fahrenheit;
}

konvertiereZuFahrenheit(32);
///////////////////////////A6///////////////////////////
function zaehleZeichen(wort) {
  ergebnis = wort.split("").length;
  console.log("Zeichen: ", ergebnis);
  return ergebnis;
}
zaehleZeichen("vier");
///////////////////////////A7///////////////////////////
function kehreStringUm(wort) {
  reverseWort = wort.split("").reverse();
  ergebnisWort = "";
  for (let i = 0; i < reverseWort.length; i++) {
    ergebnisWort += reverseWort[i];
  }
  console.log("kehreStringUm: " + ergebnisWort);
  return ergebnisWort;
}
kehreStringUm("vier");
///////////////////////////A8///////////////////////////
function istGerade(zahl) {
  if (zahl % 2 == 0) {
    return console.log("Ist Gerade");
  } else {
    console.log("Ist UnGerade");
  }
}
istGerade(5);
///////////////////////////A9///////////////////////////
function berechnePotenz(basis, exponent) {
  return console.log(Math.pow(basis, exponent));
}
berechnePotenz(3, 3);
///////////////////////////A10///////////////////////////
//Array
const meinZahlListe = [234, 56, 1234, 4567, 342, 56];
function summeDesArrays(liste) {
  result = 0;
  for (let x = 0; x < liste.length; x++) {
    result += liste[x];
  }
  console.log(result);
}

summeDesArrays(meinZahlListe);
