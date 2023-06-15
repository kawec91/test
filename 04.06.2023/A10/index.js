//Functions
function hinzu() {
  //Conn
  const conWithEingabefeld = document.getElementById("eingabefeld");
  const conWithAuflisten = document.getElementById("auflisten");

  x = conWithEingabefeld.value;
  conWithAuflisten.innerHTML += `<p>${x}</p>`;
  conWithEingabefeld.value = "";
}
