//Connections
const connWithWow = document.getElementById("wow");

//Functions
function herDamit(uberschrift, info) {
  return `<h4>${uberschrift}</h4><hr><p>${info}</p>`;
}

function gibAus(uberschrift, info) {
  connWithWow.innerHTML += `<div style="background-color: gray; color: navy; padding: 10px; margin-bottom: 2px;"> 
  ${herDamit(uberschrift, info)} 
  </div>`;
}

gibAus("Kanada", "Ist ein großes Land in Nordamerika");
gibAus("Brasilien", "Das ist das Land des Kaffees");
gibAus("Australien", "Hier leben Kangaroos und Koalabären");
