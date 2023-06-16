//Verbindung
const ver = document.getElementById("inhalt");

//Array
const myArray = [
  {
    table_klasse: "table-class-1",
    row_klasse: "row-class-1",
    product_image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-13-pro-max-graphite-2023?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1679072989055",
    product_name: "Iphone",
    menge: "67",
    preis: "499.99",
  },
  {
    table_klasse: "table-class-2",
    row_klasse: "row-class-2",
    product_image:
      "https://images.samsung.com/is/image/samsung/p6pim/de/2202/gallery/de-galaxy-s22-ultra-s908-sm-s908bdrdeub-thumb-530798314?imwidth=720",
    product_name: "Samsung",
    menge: "27",
    preis: "399.99",
  },
  {
    table_klasse: "table-class-3",
    row_klasse: "row-class-3",
    product_image:
      "https://motorolade.vtexassets.com/arquivos/ids/158536-800-auto?width=800&height=auto&aspect=true",
    product_name: "Motorola",
    menge: "46",
    preis: "299.99",
  },
];

//BauFunctionen
function createImage(image, text) {
  return `<div class="img-wrapper"><img src="${image}" alt=""><br /><label>${text}</label><div>`;
}
function createMange(wert) {
  return `<p>${wert}x</p>`;
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
  createTable(
    myArray[x].table_klasse,
    myArray[x].row_klasse,
    myArray[x].product_image,
    myArray[x].product_name,
    myArray[x].menge,
    myArray[x].preis
  );
}
