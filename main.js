//Chiede all'utente il suo nome
var nome = prompt('Inserisci il tuo nome');
//Chiede all'utente il suo cognome
var cognome = prompt('Inserisci il tuo cognome');
//Chiede all'utente il suo colore preferito
var colore = prompt('Inserisci il tuo colore preferito');
//Unisce i dati inseriti in una variabile
var password = (nome + cognome + colore + '20')
//Inserisce la password generata in h1
document.getElementById('password').innerHTML = password;
