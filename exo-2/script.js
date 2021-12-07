// you can write js here
let statutInscription;
let ageCoureur;

function inscriptionCoureur(statutInscription, ageCoureur) {
    var raceNumber = Math.floor(Math.random()*1000);
    if(!statutInscription) {
    raceNumber += 1000;
    console.log('Votre numéro de dossard est le ' + raceNumber);
    }
    if(statutInscription && ageCoureur > 18) {
        console.log('You will race at 9:30am');
    }
    else if(statutInscription || ageCoureur > 18) {
        console.log('You will race at 11:00 am. ' + 'Votre numéro de dossar est le ' + raceNumber);
    }
    else if(ageCoureur < 18 || !statutInscription) {
        console.log('You will race at 12:30');
    }
    else {
        console.log("Go to see the registration desk");
    }
}

inscriptionCoureur(true, 19);