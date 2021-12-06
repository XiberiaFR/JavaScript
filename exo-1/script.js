// you can write js here
const kelvin = prompt("Quelle est la température en Kelvin aujourd'hui ?");

// on initialise la constante celsius avec une valeur
const celsius = kelvin - 273;

// on initialise la constante fahrenheit avec une valeur
let fahrenheit = celsius * (9/5) + 32;

// on génère le plus grand entier inférieur ou égal
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);