//Verbindung
const ver = document.getElementById("inhalt");

//Array
const myArray = [
  {
    table_klasse: "table-class-1",
    row_klasse: "row-class-1",
    product_image: "",
    product_name: "Iphone",
    menge: "67",
    preis: "499.99",
  },
  {
    table_klasse: "table-class-2",
    row_klasse: "row-class-2",
    product_image: "",
    product_name: "Samsung",
    menge: "27",
    preis: "399.99",
  },
  {
    table_klasse: "table-class-3",
    row_klasse: "row-class-3",
    product_image: "",
    product_name: "Motorola",
    menge: "46",
    preis: "299.99",
  },
];

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
function createTable(
  tableKlasse,
  rowKlasse,
  image,
  productName,
  mengeWert,
  preisWert
) {
  ver.innerHTML += `
    <div>
        <table class="${tableKlasse}">
            ${createTableRow(
              rowKlasse,
              image,
              productName,
              mengeWert,
              preisWert
            )}
        </table>
    </div>
    `;
}
//Schleife
for (let x = 0; x < myArray.length; x++) {
  createTable();
}
