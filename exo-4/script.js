// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];
secretMessage.pop();
secretMessage.push('to','program');

let index = secretMessage.indexOf('easily');
secretMessage.splice(index, 1, 'right');

console.log(secretMessage);

secretMessage.shift();
secretMessage.unshift('Programming');
index = secretMessage.indexOf('get', 'right', 'the', 'first', 'time');
secretMessage.splice(index, 5, 'know');





console.log(secretMessage.join(' '));

