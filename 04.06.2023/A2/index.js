const vorname = "Lukasz";
const nachname = "Lukawczyk";

const connWithErgebnis = document.getElementById("ergebnis");

connWithErgebnis.innerHTML +=
  "<p>Mein Namie ist " + vorname + " " + nachname + "</p>";

connWithErgebnis.innerHTML += `<p>Mein Namie ist ${vorname} ${nachname}</p>`;
