/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
 Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
 il prezzo del biglietto è definito in base ai km (0.21 € al km)
 va applicato uno sconto del 20% per i minorenni
 va applicato uno sconto del 40% per gli over 65.
 L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).*/



// con un prompt chiedere all'user di inserire il numero di chilometri
const nKm = prompt('Inserisci il numero di chilometri'); 
// con un prompt chiedere all'user di inserire l'età
const age = prompt("Inserisci l'età");
//il prezzo del biglietto è uguale al numero di chilometri per 0.21
const priceTicket = (nKm * 0.21);
//inizializzare la variabile per lo sconto
let discount;
let finalPrice;

// condizione vera se l'età è minore di 18, se nkm e age non sono vuoti e se nkm e age sono numeri
if(!isNaN(nKm) && !isNaN(age)){
    if(age < 18){
        // sconto 20%
        discount = (priceTicket * 20) / 100;
        // calcolare il prezzo finale sottraendo lo sconto al prezio iniziale del ticket
        finalPrice = priceTicket - discount;
    }
    // over 65 sconto del 40%
    else if (age >= 65){
        discount = priceTicket * 40 / 100;
        finalPrice = priceTicket - discount;
    }
    // per età comprese tra 18 e 65 anni non c'è lo sconto
    else{
        discount = 0;
        finalPrice = priceTicket - discount;
    }
    // dati non validi perché tutte le condizioni non sono vere
    // visualizzare a schermo il risultato 
    document.getElementById('user').innerHTML = 
    `
    <h1>The ticket price is: ${finalPrice}$</h1>
    `;

}
else{
    document.getElementById('user').innerHTML = 
    `
    <h1>Enter the data again.</h1>
    `;
}