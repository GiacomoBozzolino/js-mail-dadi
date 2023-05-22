"use strict";
let button = document.getElementById('lancio')




//variabile legata all'attivazione del bottone
button.addEventListener("click", function() {
    let player = Math.floor( Math.random() * 6 ) +1;
    console.log(player)
    let pc= Math.floor( Math.random() * 6 ) +1;
    console.log(pc)
    // condizioni per la vittoria del gioco
    if ( player > pc){
        console.log( 'Hai vinto!')
        document.getElementById('risultato').innerHTML=`Hai fatto ${player}, il tuo avversario ha fatto ${pc}. Hai vinto!`
    } else if ( player < pc){
        console.log ('Hai perso!')
        document.getElementById('risultato').innerHTML=`Hai fatto ${player}, il tuo avversario ha fatto ${pc}. Hai perso!`
    } else {
        console.log ('Pareggio!')
        document.getElementById('risultato').innerHTML=`Tu e il tuo avversario avete fatto ${player}. Pareggio!`
    }
  });