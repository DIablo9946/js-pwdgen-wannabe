document.getElementById('my');


var nome, cognome, colorepref, password;

nome = prompt("Qual'è il Tuo nome?");

congnome = prompt("Qual'è il Tuo cognome?");

colorepref = prompt("Qual'è il Tuo colore preferito ?");

password = nome + cognome + colorepref;

document.getElementById("my").innerHTML = password;
