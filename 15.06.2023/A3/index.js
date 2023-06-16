//Verbindung
const ver = document.getElementById("inhalt");
//Array
const myArray = [
  {
    klasse: "klasse-1",
    bild: "https://www.visitfinland.com/dam/jcr:3c8b7599-ddf7-47f6-913e-bb48fcd52a51/Koli_winter_people_scenery%20-%20Jussi%20Helttunen.jpg",
    text: "adsfghjklkjhgrfsdfg",
  },
  {
    klasse: "klasse-2",
    bild: "https://bradfordjacobs.com/wp-content/uploads/2022/05/Finland.png",
    text: "rertertertdfgbfadsfghjklkjhgrfsdfg",
  },
  {
    klasse: "klasse-3",
    bild: "https://www.visitfinland.com/dam/jcr:10100117-5154-4a6d-afb7-56502939f9e3/___Finland_Aurora_dome_Jeris_Antti_Pietik%C3%A4inen.12422788202013340987.jpg",
    text: "adshikjrefsdadsfghjklkjhgrfsdfg",
  },
  {
    klasse: "klasse-4",
    bild: "https://www.visitfinland.com/dam/jcr:72b0d4b7-a3f9-439f-a555-c5ccc9b480d2/Finland_Porvoo_NikoLaurila6_.jpg",
    text: "sadwawdafrgddrtadsfghjklkjhgrfsdfg",
  },
  {
    klasse: "klasse-5",
    bild: "https://i.natgeofe.com/n/81cf55d9-8f0d-4bd7-a69f-9dd17186ed87/helsinki-finland_16x9.jpg",
    text: "adsfghjklkjhgrdsfsdfgfdgfdghgjfkhfsdfg",
  },
  {
    klasse: "klasse-6",
    bild: "https://a.cdn-hotels.com/gdcs/production24/d195/7db24ae3-dfb9-47f2-bdfc-c9b0ff7d3b85.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    text: "tkiuhykuujgyuadsfghjklkjhgrfsdfg",
  },
];
//Bausteinfunktionen
function createImage(image) {
  return `<img src="${image}" alt="">`;
}
function createText(text) {
  return `<p>${text}</p>`;
}

//Komponenetfunction
function createImageAndText(klasse, image, text) {
  ver.innerHTML += `
    <div class="${klasse}">
        ${createImage(image)}
        ${createText(text)}
    </div>
    `;
}

//Schleife
for (let x = 0; x < myArray.length; x++) {
  createImageAndText(myArray[x].klasse, myArray[x].bild, myArray[x].text);
}
