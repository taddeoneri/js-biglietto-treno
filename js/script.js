/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
 Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
 il prezzo del biglietto è definito in base ai km (0.21 € al km)
 va applicato uno sconto del 20% per i minorenni
 va applicato uno sconto del 40% per gli over 65.
 L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).*/

const nKm = prompt('Inserisci il numero di chilometri');  // con un prompt chiedere all'user di inserire il numero di chilometri
const age = prompt("Inserisci l'età");                    // con un prompt chiedere all'user di inserire l'età
const priceTicket = (nKm * 0.21);   //il prezzo del biglietto è uguale al numero di chilometri per 0.21
let discount;     //inizializzare la variabile per lo sconto
if(age < 18 && nKm && age && !isNaN(nKm) && !isNaN(age)){    // condizione vera se l'età è minore di 18, se nkm e age non sono vuoti e se nkm e age sono numeri
    discount = (priceTicket * 20) / 100;            // sconto 20%
    let finalPrice = priceTicket - discount;        // calcolare il prezzo finale sottraendo lo sconto al prezio iniziale del ticket
    document.getElementById('user').innerHTML = 
    `                                                       
    <h1>The ticket price is: ${finalPrice}$</h1>
    `;                      // visualizzare a schermo il risultato 
}
else if (age >= 65 && nKm && age && !isNaN(nKm) && !isNaN(age)){               // over 65 sconto del 40%
    discount = priceTicket * 40 / 100;
    let finalPrice = priceTicket - discount;
    document.getElementById('user').innerHTML = 
    `
    <h1>The ticket price is: ${finalPrice}$</h1>
    `;
}
else if(nKm && age && !isNaN(nKm) && !isNaN(age)){      // per età comprese tra 18 e 65 anni non c'è lo sconto
    discount = 0;
    const finalPrice = priceTicket - discount;
    document.getElementById('user').innerHTML = 
    `
    <h1>The ticket price is: ${finalPrice}$</h1>
    `;
}
else{               // dati non validi perché tutte le condizioni non sono vere
    document.getElementById('user').innerHTML = 
    `
    <h1>Enter the data again.</h1>
    `;
}
