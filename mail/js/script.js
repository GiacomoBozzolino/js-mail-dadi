let email = ['gandalf@gmail.com', 'frodo@gmail.com', 'sam@gmail.com', 'aragorn@gmail.com', 'legolas@gmail.com', 'gimli@gmail.com', 'merry@gmail.com', 'pipino@gmail.com', 'boromir@gmail.com'];



let search = prompt ("Inserisci l'indirzzo email che vuoi cercare");

for (let i=0; i<email.length; i++){
    if (email[1]=== search){
        console.log ('Email trovata!');
    } else{ 
        console.log ('Email non trovata!');
    }

    
}
