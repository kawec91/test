//Verbindung
const ver = document.getElementById("inhalt");

//BauFunctionen
function createImage(image, text) {
  return `<img src="${image}" alt=""><br /><label>${text}</label>`;
}
function createMange(wert) {
  return `<p>W${wert}x</p>`;
}
function createPreis(wert) {
  return `<p>${wert}€</p>`;
}

function createTableRow(klasse, image, productName, mengeWert, preisWert) {
  return `
    <tr class="${klasse}">
        <td>${createImage(image, productName)}</td>
        <td>${createMange(mengeWert)}</td>
        <td>${createPreis(preisWert)}</td>
    </tr>
    `;
}
//Komponentfunctionen
