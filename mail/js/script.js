"use strict";

let email_adress = ['gandalf@gmail.com', 'frodo@gmail.com', 'sam@gmail.com', 'aragorn@gmail.com', 'legolas@gmail.com', 'gimli@gmail.com', 'merry@gmail.com', 'pipino@gmail.com', 'boromir@gmail.com'];

// console.log (email_adress)

let email = prompt ("Inserisci l'indirzzo email che vuoi cercare");
let flag = false;

for (let i=0; i<email_adress.length; i++){  

    if (email_adress[i] === email) {
    //    console.log('email trovata')  
       flag = true;
    } 
}

if (flag === true) {
    console.log ('email trovata');
    document.getElementById("avviso").innerHTML = "Email trovata!";
} else {
    console.log ('email non trovata');
    document.getElementById("avviso").innerHTML = "Email non trovata!";
}