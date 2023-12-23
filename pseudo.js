const prompt = require("prompt-sync")();
let welcome = function () {
    console.log(" __________________________________________");
    console.log("|             BIENVENUE DANS :             |");

    console.log("|      __   __   __   ___   __   __        |");
    console.log("| ♠️♦️  |    |__| |__)   |   |__  (__   ♦️♠️   |");
    console.log("|     |__  |  | |  |   |   |__   __)       |");
    console.log("|                 🔥-🌊-🌿                 |");
    console.log("|______________feu-eau-plantes_____________|");
    let userName = prompt("  Veuillez saisir votre pseudo:  ");
     userName = userName || "guest"   
    return userName
}


exports.welcome = welcome;



