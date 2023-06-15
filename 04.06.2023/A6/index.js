//Conn
const connWithMitarbeiter = document.getElementById("mitarbeiter");

const personal = [
  {
    Vorname: "Lukasz",
    Nachname: "Lukawczyk",
    //m or w
    Geschlecht: "m",
    //true or false
    Senior: false,
    //IT, Verkauf, Einkauf oder Leitung
    Abteilung: "IT",
    //10-99
    Nummer: 10,
  },
  {
    Vorname: "Adrianna",
    Nachname: "Lukawczyk",
    //m or w
    Geschlecht: "w",
    //true or false
    Senior: false,
    //IT, Verkauf, Einkauf oder Leitung
    Abteilung: "Verkauf",
    //10-99
    Nummer: 11,
  },
  {
    Vorname: "Patrick",
    Nachname: "Fischer",
    //m or w
    Geschlecht: "m",
    //true or false
    Senior: false,
    //IT, Verkauf, Einkauf oder Leitung
    Abteilung: "Leitung",
    //10-99
    Nummer: 12,
  },
  {
    Vorname: "Yvonne",
    Nachname: "Olszewska",
    //m or w
    Geschlecht: "w",
    //true or false
    Senior: false,
    //IT, Verkauf, Einkauf oder Leitung
    Abteilung: "Einkauf",
    //10-99
    Nummer: 13,
  },
  {
    Vorname: "Max",
    Nachname: "Mustermann",
    //m or w
    Geschlecht: "m",
    //true or false
    Senior: false,
    //IT, Verkauf, Einkauf oder Leitung
    Abteilung: "Verkauf",
    //10-99
    Nummer: 14,
  },
  {
    Vorname: "Julia",
    Nachname: "Webber",
    //m or w
    Geschlecht: "w",
    //true or false
    Senior: false,
    //IT, Verkauf, Einkauf oder Leitung
    Abteilung: "Leitung",
    //10-99
    Nummer: 15,
  },
];

if (connWithMitarbeiter) {
  for (let i = 0; i < personal.length; i++) {
    connWithMitarbeiter.innerHTML += `<p>${personal[i].Vorname}</p>`;
    connWithMitarbeiter.innerHTML += `<p>${personal[i].Nachname}</p>`;
    connWithMitarbeiter.innerHTML += `<p>${personal[i].Geschlecht}</p>`;
    connWithMitarbeiter.innerHTML += `<p>${personal[i].Senior}</p>`;
    connWithMitarbeiter.innerHTML += `<p>${personal[i].Abteilung}</p>`;
    connWithMitarbeiter.innerHTML += `<p>${personal[i].Nummer}</p>`;
  }
}
