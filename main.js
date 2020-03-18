//Chiedi all’utente il suo nome,
//poi chiedi il suo cognome,
//poi chiedi il suo colore preferito
//Infine scrivi sulla pagina nomecognomecolorepreferito19

//creo la variabile del nome
var nomeUtente;

//creo la variabile del cognome
var cognomeUtente;

//creo la variabile del colore preferito
var colorePreferito;

//Chiedo il nome all'utente e lo salvo nella variabile
nomeUtente = prompt('Inserisci il tuo nome');

//Chiedo il cognome all'utente e lo salvo nella variabile
cognomeUtente = prompt('Inserisci il tuo cognome');

//Chiedo il colore preferito  all'utente e lo salvo nella variabile
colorePreferito= prompt('Il tuo colore preferito?');

//controllo su console che le variabili assumano il valore inserito
console.log(nomeUtente, cognomeUtente, colorePreferito);

//rimando a video i risultati
document.getElementById('password').innerHTML=('La tua password è ' + nomeUtente+cognomeUtente+colorePreferito+56);
