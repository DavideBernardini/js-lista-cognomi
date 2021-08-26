// creo l'array
var cognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

// chiedo all'utente di inserire il cognome, facendo sì che la prima lettera sia maiuscola a prescindere
var cognomeUtente = prompt("Inserisci il tuo cognome");

cognomeUtente = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1)

// aggiungo il cognome inserito nell'array
cognomi.push(cognomeUtente);

// metto i cognomi nell'array in ordine alfabetico e li stampo nella console
cognomi.sort();

console.log(cognomi);

// determino la posizione del cognome inserito nella lista partendo da 1 e lo comunico all'utente
var listPosition = parseInt(cognomi.indexOf(cognomeUtente) + " della lista") + 1;

alert("Sei nella posizione numero " + listPosition + " della lista.")