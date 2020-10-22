// chiedere all'utente di inserire una parola, inserire un numero e 
// scegliere tra pari o dispari
var parola = prompt('Inserisci una parola');
var scelta = prompt('Scegli tra pari o dispari');
var numero = prompt('Inserisci un numero');
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
