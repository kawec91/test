//Funktions
function neuesBild(quelle) {
  return `<img src="${quelle}" style="width:350px;">`;
}

function neuerText(quelle) {
  return `<p>${quelle}</p>`;
}
function neuerTitel(quelle) {
  return `<h3>${quelle}</h3>`;
}
//Komponent
function neu(titel, text, bild) {
  //Verbindung
  const ver = document.getElementById("ausgabe");
  //Body
  ver.innerHTML += `
  <div>
    ${neuerTitel(titel)}
    <br />
    ${neuesBild(bild)}
    <br />
    ${neuerText(text)}
  </div>
  `;
}

neu(
  "titel1",
  "dfgfhfgh",
  "https://media.istockphoto.com/id/1126734400/de/foto/cruise-port-zante-basseterre-st-kitts.jpg?s=612x612&w=0&k=20&c=7eEgS3iIQ5uGs8gUJ2qKQcD_4w5ug2mxTh0oIKwHl4U="
);
neu(
  "title3",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, officiis?",
  "https://imin-caribbean.com/wp-content/uploads/2022/09/saint-kitts-and-nevis-visa-free-64636371.jpeg"
);
neu(
  "title2",
  "Lorem ipsum dolor sit amet, consectetur adipisicing.",
  "https://cdn.britannica.com/68/93968-050-CF53C008/beach-island-Nevis-Saint-Kitts-and.jpg"
);
