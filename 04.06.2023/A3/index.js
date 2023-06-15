const landliste = [
  "Turkei",
  "Aserbeidschan",
  "Kasachstan",
  "Kirgistan",
  "Usbekistan",
  "Turkmenistan",
];

//Conn
const conWithAusgabe = document.getElementById("ausgabe");

for (let x of landliste) {
  conWithAusgabe.innerHTML += `<p>${x}</p>`;
}
