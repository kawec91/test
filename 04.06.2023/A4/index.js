const haupstadt = [
  "Ankara",
  "Baku",
  "Astana",
  "Bischkek",
  "Taschkent",
  "Aschgabat",
];

const kairo = [];
//Conn
const connWithAha = document.getElementById("aha");
//Loop
for (let x of haupstadt) {
  connWithAha.innerHTML += `<p>${x}</p>`;
  kairo.push(x);
}

for (let i of kairo) {
  connWithAha.innerHTML += `<h3><i>${i}</i></h3>`;
}
