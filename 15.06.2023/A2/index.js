//Verbindung
const ver = document.getElementById("inhalt");

//Array
const myArray = [
  {
    bild: "https://images.photowall.com/products/43417/usa-flag.jpg?h=699&q=85",
    bildAlt: "Country Flag",
    text: "sfdrgfhgfhgfh",
  },
];

//Bausteinfunktion
//Erstellt IMG HTML-Element
function createImage(img, text) {
  return `
  <img src="${img}" alt="${text}">
  `;
}
//Erstellt P HTML-Element
function createText(text) {
  return `<p>${text}</p>`;
}

//Komponentfunktion
function createImageAndText(createImageImage, createImageText, createTextText) {
  ver.innerHTML += `
    <div>
        ${createImage(createImageImage, createImageText)}
        ${createText(createTextText)}
    </div>
    `;
}

for (let x = 0; x < myArray.length; x++) {
  createImageAndText(myArray[x].bild, myArray[x].bildAlt, myArray[x].text);
}
