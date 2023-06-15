//Function
function neu(titel, text, bild) {
  //verbindung
  const ver = document.getElementById("inhalt");
  //body
  ver.innerHTML += `<div><h4>${titel}</h4><img src="${bild}" style="width:200px;"><p>${text}</p></div>`;
}

neu(
  "title1",
  "Lorem ipsum dolor sit amet.",
  "https://media.istockphoto.com/id/1126734400/de/foto/cruise-port-zante-basseterre-st-kitts.jpg?s=612x612&w=0&k=20&c=7eEgS3iIQ5uGs8gUJ2qKQcD_4w5ug2mxTh0oIKwHl4U="
);
neu(
  "title2",
  "Lorem ipsum dolor sit amet, consectetur adipisicing.",
  "https://cdn.britannica.com/68/93968-050-CF53C008/beach-island-Nevis-Saint-Kitts-and.jpg"
);
neu(
  "title3",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, officiis?",
  "https://imin-caribbean.com/wp-content/uploads/2022/09/saint-kitts-and-nevis-visa-free-64636371.jpeg"
);
