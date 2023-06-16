//Verbindung
const ver = document.getElementById("inhalt");
//Bausteinfunktionen
function createInput(type, id) {
  return `
    <div>
        <input type="${type}" id="${id}">
    </div>
    `;
}
function createText(text) {
  return `
    <div>
        ${text}
    </div>
    `;
}
function createButton(myFunc, text) {
  return `
  <button onclick="${myFunc}">${text}</button>
    `;
}
//Komponentfunctionen
function onSave() {
  //verbindung
  let beruf = document.getElementById("1");
  let augenfarbe = document.getElementById("2");
  let geburtsdatum = document.getElementById("3");
  let alter = document.getElementById("4");
  alert("Dein Profildaten wurden aktualisiert");
  beruf.value = "";
  augenfarbe.value = 0;
  geburtsdatum.value = "";
  alter.value = "";
}
function createProfil(
  klasse,
  titel,
  createTextText1,
  createInputID1,
  createTextText2,
  createInputID2,
  createTextText3,
  createInputID3,
  createTextText4,
  createInputID4,
  btnFunc,
  btnText
) {
  ver.innerHTML += `
    <div class="${klasse}">
        <h3 class="myTitel">${titel}</h3>
        ${createText(createTextText1)}${createInput("text", createInputID1)}
        ${createText(createTextText2)}${createInput("color", createInputID2)}
        ${createText(createTextText3)}${createInput("date", createInputID3)}
        ${createText(createTextText4)}${createInput("number", createInputID4)}
        <div style="text-algin:right;" class="profilBtn">
            ${createButton(btnFunc, btnText)}
        </div>
    </div>
    `;
}

createProfil(
  "myClass",
  "Deine Profildaten: ",
  "Beruf: ",
  1,
  "Augenfarbe: ",
  2,
  "Geburtsdatum: ",
  3,
  "Alter: ",
  4,
  "onSave()",
  "Speichern"
);
