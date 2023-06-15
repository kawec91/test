//JSON-Obiekt
let datensatz = {
  marke: "Audi",
  model: "A4",
  typ: "Diesel",
  gangschaltung: 8,
  ps: 260,
  neu: false,
  extras: ["Airbag", "Radio", "Klima"],
  speziell: { farbe: "Rot", suv: true },
};
//Funktion
function dasAuto(jsonObiekt) {
  //verbindung
  const ver = document.getElementById("kommt-noch");
  //   //function body
  //   ver.innerHTML += `<p>${jsonObiekt.marke}</p>`;
  //   ver.innerHTML += `<p>${jsonObiekt.model}</p>`;
  //   ver.innerHTML += `<p>${jsonObiekt.typ}</p>`;
  //   ver.innerHTML += `<p>${jsonObiekt.gangschaltung}</p>`;
  //   ver.innerHTML += `<p>${jsonObiekt.ps}</p>`;
  //   ver.innerHTML += `<p>${jsonObiekt.neu}</p>`;
  //   ver.innerHTML += `<p>${jsonObiekt.extras}</p>`;
  //   ver.innerHTML += `<p>${jsonObiekt.speziell.farbe}</p>`;
  //   ver.innerHTML += `<p>${jsonObiekt.speziell.suv}</p>`;
  for (let key in jsonObiekt) {
    //When key value is an JSON Object
    if (jsonObiekt[key] == "[object Object]") {
      //Show every key value of Object in HTML
      for (let key2 in jsonObiekt[key]) {
        ver.innerHTML += `<p>${jsonObiekt[key][key2]}</p>`;
      }
      //Others
    } else {
      //Show key value in HTML
      ver.innerHTML += `<p>${jsonObiekt[key]}</p>`;
    }
  }
  //New value of Datensatz
  datensatz = `<b><u><i>So, das wars</i></u></b>`;
  //Show in HTML
  ver.innerHTML += `${datensatz}`;
}

dasAuto(datensatz);
