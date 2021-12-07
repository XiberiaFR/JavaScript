// you can write js here
console.log('exo-3');

let userInput = prompt('rock, paper or scissors ?').toLowerCase()

function getUserChoice(userInput) {

    if ((userInput === 'rock') || (userInput === 'paper') || (userInput === 'scissors') || (userInput === 'bomb')) {
        return userInput;     }
        else (
            console.log("La valeur inscrite n'est pas conforme")
        )
}

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if(number === 0) {
        computerChoice = 'rock';
    }
    else if (number === 1) {
        computerChoice = 'paper';
    }
    else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
        return 'Won';
    }
    else if (userChoice === computerChoice) {
        result = 'Tied';
    }
    
    else if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
        result = 'Won';
        }
        else {
            result = 'Lost';
        }
    }

    else if(userChoice === 'paper') {
        if (computerChoice === 'scissors') {
        result = 'Lost';
        }
        else {
            result = 'Won';
        }
    }

    else if(userChoice === 'scissors') {
        if(computerChoice === 'rock') {
            result = 'Lost';
        }
        else {
            result = 'Won';
        }
    }
    return result;
}

function playGame() {
    let uChoice = getUserChoice(userInput);
    let cChoice = getComputerChoice();
    console.log("Votre choix : " + uChoice);
    console.log("Choix ordinateur : " + cChoice);
    console.log(determineWinner(uChoice, cChoice));
}

playGame();