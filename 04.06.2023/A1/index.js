let wert1 = 23;
let wert2 = 8;
let wert3 = 0;

function addieren(a, b) {
  wert3 = a + b;
  return wert3;
}

function substrahieren(a, b) {
  wert3 = a - b;
  return wert3;
}

//Conn
const connWithResultat = document.getElementById("resultat");
//Add to HTML
connWithResultat.innerHTML += `${addieren(wert1, wert2)} <br />`;
//Show in console value of wert3
console.log(wert3);
//Add to HTML
connWithResultat.innerHTML += `${substrahieren(wert1, wert2)} <br />`;
//Show in console value of wert3
console.log(wert3);
