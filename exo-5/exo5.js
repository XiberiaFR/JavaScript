// you can write js here

console.log('exo-5');

let input = "Pas de consonnes, uniquement les voyelles, pas d'espace et toutes les lettres en majuscules";
input = input.toUpperCase();
let vowels = ['A','E','I','O','Y','U'];
let resultArray = [];

for (let test of input) {
    console.log(test);
    if(vowels.indexOf(test) !== -1) {
        resultArray.push(test);
    }
}

console.log(resultArray.join(" "));