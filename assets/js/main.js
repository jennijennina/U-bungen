// Schreibe eine for-Schleife.
// ● Sie soll genau 10 mal in der Konsole “Hello World + Nummer” ausgeben.

for (let i = 1; i < 11; i++) {
  console.log(`Hello World` + i);
}

// Erstelle ein Array mit den Zahlen 0-10 mit Hilfe einer Schleife.

// Wenn wir mit Arrays arbeiten, müssen wir das Array initialisieren (let numArray = [];).
// Verwende den Befehl push() im Schleifenkörper.
// Gib numArray in der Konsole aus.
for (let i = 0; i < 11; i++) {
  console.log(i);
}
let numArray = [];
console.log(numArray);
// Schreibe eine while Schleife, die Hallo World + Nummer 10 mal anzeigt.
// Initialisiere eine Variable counter mit dem Wert 0.
// Als Bedingung schreibe: counter < 10
// Gib string Hallo World + Variable counter in der Konsole aus.
// Erhöhe counter um eins und speichere ihn als counter.
// Hast du den Unterschied zwischen for-Loops und while-Loops verstanden?
let a = 0;
while (a < 10) {
  a = a + 1;
  console.log(`Hallo World` + a);
}
for (let counter = 0; counter < 10; counter++) {
  console.log(`Hallo World` + counter);
}
for (let counter = 1; counter < 10; counter++) {
  console.log(`Hallo World` + counter);
}
// Deklariere ein Array names mit den Werten: "Freddy", "Steffen", "Finn", "Julia", "Franzi", "Christian", "Sergio".

// Dann verwende eine for Schleife, um alle Namen in der Konsole anzuzeigen.
// Hinweis: for-Schleife, Bedingung; Inkrement;
let names = [
  "Freddy",
  "Steffen",
  "Finn",
  "Julia",
  "Franzi",
  "Christian",
  "Sergio",
];

for (let d = 0; d < 7; d++) {
  console.log(`${names[d]}`);
}
// Wir wollen ein Array von Bildern erstellen und die Dateinamen von image_1.jpg bis image_100.jpg sollen ausgeben werden.
// Deklariere die Variable retArray als leeres Array.
// Schreibe eine for-Schleife.
// Nutze den push() Befehl.

let retArray = [];
for (let e = 1; e < 101; e++) {
  retArray.push(`image_${e}.jpg`);
  console.log(e);
}
console.log(retArray);
