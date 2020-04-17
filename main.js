//Chiede all'utente il suo nome
var nome = prompt('Inserisci il tuo nome');
//Chiede all'utente il suo cognome
var cognome = prompt('Inserisci il tuo cognome');
//Chiede all'utente il suo colore preferito
var colore = prompt('Inserisci il tuo colore preferito');
//Recupera data corrente
var data = new Date();
//Recupera anno e converte in stringa
var anno = data.getFullYear().toString();
//Recupera solo ultimi caratteri
var anno_cut = anno.substr(2, 3);
//Unisce i dati inseriti in una variabile
var password_generata = (nome + cognome + colore + anno_cut);
//Inserisce la password generata in h1
document.getElementById('password').innerHTML = password_generata;
