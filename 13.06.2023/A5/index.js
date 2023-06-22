//Array
const formularDaten = [
  { labelText: "fgdd1", anzeigeText: "ghmgm1", infoText: "ffnkljdsf1" },
  { labelText: "jh,f2", anzeigeText: "sbhjhmg2", infoText: "dfsghj2" },
  { labelText: "mhgfv3", anzeigeText: "gfdsa3", infoText: "kijuhygt3" },
];

//Funktion
function klick(was, text) {
  return `<button onclick=${was}>${text}</button>`;
}

function eingabe(das, was, info) {
  return `
  <div>
    <label>${das}</label>
    <input type = "text" onchange="${was}" placeholder= "${info}">
  </div>
  `;
}
function neuerSatz(das, was1, was2, text, info) {
  //Verbindung
  const ver = document.getElementById("leitung");
  ver.innerHTML += `
  <div>
  ${eingabe(das, was1, info)} 
  ${klick(was2, text)}
  </div>
  <br />`;
}

function geklickt() {
  console.log("der Button wurde geklickt");
}

function getippt() {
  console.log("es wurde gerade getippt");
}

//loop
for (let x = 0; x < formularDaten.length; x++) {
  neuerSatz(
    formularDaten[x].labelText,
    "getippt()",
    "geklickt()",
    formularDaten[x].anzeigeText,
    formularDaten[x].infoText
  );
}
