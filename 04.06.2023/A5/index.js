const person = {
  vorname: "Max",
  nachname: "Mustermann",
  Geschlecht: "m",
  Verheiratet: true,
  Kinder: ["Mareike", "Michael"],
  Ehepartner: { Geschlecht: "w", Name: "Barbara" },
};

//conn
const connWithJson = document.getElementById("json");
connWithJson.innerHTML += `Name ${person.vorname} <br />`;
connWithJson.innerHTML += `Nachname ${person.nachname} <br />`;
connWithJson.innerHTML += `Geschlecht ${person.Geschlecht} <br />`;
connWithJson.innerHTML += `Verheiratet ${person.Verheiratet} <br />`;
for (x of person.Kinder) {
  connWithJson.innerHTML += `Kind ${x} <br />`;
}
connWithJson.innerHTML += `Ehepartner Name: ${person.Ehepartner.Name}, Geschlecht ${person.Ehepartner.Geschlecht} <br />`;
