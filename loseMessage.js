
let lose = ()=>{
let messages = ["l'IA a gagné la manche !🤖","oh lala, quelle poisse !🤣","pas de chance !","tu as failli l'avoir !","pas de chance !"]
let max = 5;
let message = messages[Math.floor(Math.random()*max)];
console.log(message)
}

 exports.lose = lose