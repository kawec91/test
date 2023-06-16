//Verbindung
const ver = document.getElementById("inhalt");

//BauFunctionen
function createImage(image) {
  return `<img src="${image}" alt="">`;
}
function createMange(wert) {
  return `<p>W${wert}x</p>`;
}
function createPreis(wert) {
  return `<p>${wert}€</p>`;
}
