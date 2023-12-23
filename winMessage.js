const loseMessage = require('./loseMessage')

let winMessages = ()=>{ 
    let messages = ["GG 👍","cette fois ci l'humain a triomphé du robot 🚫🤖🚫😂!","Bien joué !👌","vous avez gagné cette manche ✌️"]
    console.log(messages [Math.floor(Math.random()*4)])

}
/**
 * @function won
 * @param {string[]} botsCard 
 * @param {string[]} UsersCard 
 * @returns number
 */
let won = (botsCard,UsersCard)=>{
    if (UsersCard == "feu" && botsCard == "eau" || UsersCard == "eau" && botsCard == "plantes" || UsersCard == "plantes" && botsCard == "feu") {
        loseMessage.lose();
        return "bot";
    } else if (botsCard == UsersCard) {
        console.log("égalité ! ")
        return 1;
    } else if (UsersCard!= "feu" && UsersCard != "eau" && UsersCard != "plantes") {
        console.log("erreur, veuillez entrer une carte valide 🚫🚫");
        return 0
    }
    else {
        winMessages();
        return "joueur";
    }
}
exports.winMessages = winMessages;
exports.won = won