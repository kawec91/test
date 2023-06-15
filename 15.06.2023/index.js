//Verbindung
const ver = document.getElementById("inhalt");

//Array
const myArray = [
  { titel: "Titel 1", text: "fghjkhgfdehdgjjhgfdss" },
  { titel: "Titel 2", text: "fghjkhgDSFGHfdes" },
  { titel: "Titel 3", text: "fghjdfgdfghfkhgfdes" },
  { titel: "Titel 4", text: "fghjkhgfdesjhhnbhbgfgdb" },
  { titel: "Titel 5", text: "fghjkhgfdhgmjl.kjkles" },
];

//Bausteinfunktion
function createText(text) {
  return `
    <p>${text}</p>
    `;
}

//Komponentfunction
function createTitelAndText(titel, text) {
  ver.innerHTML += `
    <div>
        <h3>${titel}</h3>
        ${createText(text)}
    </div>
    `;
}

//Schleife
for (let x = 0; x < myArray.length; x++) {
  createTitelAndText(myArray[x].titel, myArray[x].text);
}
