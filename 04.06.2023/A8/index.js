//Conn
const connWithPuh = document.getElementById("puh");
//Function
function tada(zauberstab) {
  if (zauberstab == 0) {
    connWithPuh.innerHTML += `<p>WDR liegt in Köln</p>`;
  }
  if (zauberstab > 2 && zauberstab < 4) {
    connWithPuh.innerHTML += `<p>ich bin heute gut gelaunt`;
  }
  if (zauberstab != 10) {
    connWithPuh.innerHTML += `<p>Manchmal habe ich Luft zum Kino zu gehen</p>`;
  }
}

tada(0);
tada(1);
tada(3);
tada(11);
