//Verbindung
const ver = document.getElementById("inhalt");

//Bausteinfunktion
function createText(text) {
  return `
    <p>${text}</p>
    `;
}

//Komponentfunction
function createTitelAndText(titel, text) {
  return `
    <div>
        <h3>${titel}</h3>
        ${createText(text)}
    </div>
    `;
}
