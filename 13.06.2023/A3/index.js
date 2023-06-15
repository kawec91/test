//Array
const marke = [
  "Nike",
  "Footlocker",
  "Adidas",
  "Deichmann",
  "Fila",
  "Kswiss",
  "Rebock",
];

//Functions
function fragment(quelle) {
  return `<p><u>${quelle}</u></p>`;
}

function auflisten(liste) {
  //verbinung
  const ver = document.getElementById("resultat");
  //Loop
  for (let x = 0; x < liste.length; x++) {
    ver.innerHTML += `<p>Element No.${x + 1}: ${liste[x]}</p>`;
  }
}

auflisten(marke);
