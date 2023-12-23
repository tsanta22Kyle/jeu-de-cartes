

/**importation des fonctions  */
const welcome = require("./pseudo");
const winMessages = require("./winMessage");
const prompt = require("prompt-sync")();
/**déclaration des variables */
let UsersCard;
let UserScore = 0;
let botsScore = 0;
let winner;
let drawScore = 0;
let WantRestart;
let userName = welcome.welcome()


function cardGame() {
    let i = 0;
    let cards = ["eau","feu","plantes"]
    for (let i = 1; i < 4; i++) {
        console.log("_________________________________________________");
        console.log(` \n NOM D'UTILISATEUR: ${userName} | score : ${UserScore} - ${botsScore} \n  `);
/**affichage du nom d'utilisateur et du score */


        if (i == 1 ) {
            console.log(`-------première manche-------\n`)
            /**déroulement d'une manche */
        }
        if (i == 2) {
            console.log(`-------deuxième manche-------\n`)
            /**déroulement d'une manche */
        }
        if (i == 3) {
            console.log(`-------troisième manche-------\n`)
            /**déroulement d'une manche */
        }
        UsersCard = prompt("à vous de jouer une carte :  ")
        let botsCard = cards[Math.floor(Math.random() * 3)]
        console.log(botsCard)
        winner = winMessages.won(botsCard, UsersCard);
        if (winner == "joueur") { //si le joueur gagne faire monter le score du joueur
            UserScore++;
        } else if (winner == "bot") {// si l'IA gagne faire monter son score
            botsScore++;
        } else if (UsersCard == botsCard) {
            drawScore++;
            console.log(drawScore);
        } else if (winner == 0) {
            UserScore = 0;
            botsScore = 0;
            drawScore = 0;
            cardGame();

        }
        /**en cas d'égalité demander à l'utilisateur s'il veut recommencer  */
        if ((drawScore == 1 && i == 3 && UserScore == 1 && botsScore == 1) || drawScore == 3) {
            WantRestart = prompt("voulez vous refaire la partie (o/n) : ")
            if (WantRestart == "o") {
                UserScore = 0;
                botsScore = 0;
                drawScore = 0;
                cardGame()
            } else if (WantRestart == "n") {
                break
            }
        }
        if (UserScore + botsScore == 3 && (UserScore > botsScore || UserScore < botsScore) || (drawScore == 1 && (botsScore == 2|| UserScore == 2)) ||(drawScore ==2&&(botsScore ==1 || UserScore == 1))) {
            break;
        }
    }
    if (UserScore > botsScore) {
        console.log("       \n ✨✨✨✨VICTOIRE✨✨✨✨ ");
        return true
    } else if (UserScore < botsScore) {
        console.log("|  \n ☠️ ☠️  GAME OVER ☠️ ☠️   |");
        return false
    }
}

 cardGame()

