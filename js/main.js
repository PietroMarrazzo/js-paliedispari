// chiedere all'utente di inserire una parola, inserire un numero e scegliere tra pari o dispari
var parola = prompt('Inserisci una parola');
var scelta = prompt('Scegli tra pari o dispari');
var numero = parseInt(prompt('Inserisci un numero tra 1 e 5, loro compresi'));
// console.log(parola, scelta, numero);


var wordReverse = reversePalindroma(parola) 
console.log(wordReverse);

// funzione che restituisce la parola con lettere invertite e dice se è palindroma
function reversePalindroma(word) {
    var reverse = word.split('').reverse().join('');
    if (reverse === word) {
        return reverse + ' palindroma';
    }
    return reverse + ' non palindroma';
}




// PARI O DISPARI
if (numero < 1 || numero > 5) {
    var numero = parseInt(prompt('Inserisci un numero compreso tra 1 e 5, loro compresi'));
}

var numberPC = tiroPC(1, 5);
console.log(numberPC);

var somma = numberPC + numero;
console.log(somma);

var result = pariDispari(somma);

// console.log(result);

// if (scelta = 'pari') {
//     console.log('Hai vinto!');
// } else if (scelta = 'dispari') {
//     console.log('Hai perso :(');
// }




// FUNZIONI
// funzione pari dispari
function pariDispari(number) {
    if (number % 2 == 0) {
        return 'pari';
    } else if (number % 2 != 0) {
        return 'dispari';
    }   
}
// funzione generatore tiro computer 1-5
function tiroPC(min, max) {
    var tiroPC = Math.floor((Math.random() * max) + min);
    return tiroPC;
}

