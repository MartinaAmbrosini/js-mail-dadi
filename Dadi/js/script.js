// Gioco dei dadi: Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

const max = 6;
const min = 1;

//* Giocatore 1 lancia il dado
const playerOneValue = Math.floor(Math.random() * max) + min;
alert("il Giocatore 1 ha ottenuto " + playerOneValue);

//* Giocatore 2 lancia il dado
const playerTwoValue = Math.floor(Math.random() * max) + min;
alert("il Giocatore 2 ha ottenuto " + playerTwoValue);

//* SE Giocatore 1 ha un numero superiore di giocatore 2 vince
if (playerOneValue > playerTwoValue) {
  alert("Giocatore 1 Win");
}
//* ALTRIMENTI SE Giocatore 2 ha un numero superiore di giocatore 1 vince
else if (playerTwoValue > playerOneValue) {
  alert("Giocatore 2 Win");
}
//* ALTRIMENTI essendo uguali abbiamo un pareggio
else {
  alert("Pareggio");
}