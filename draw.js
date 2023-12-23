
/**
 * @function draw
 *  : pour savoir si l'utilisateur veut refaire une partie ou non !
 * @param {string[]} restart 
 * @returns boolean
 */
let draw = (restart) =>{
    if (restart == "n"){
        return false;       
    }else if(restart == "o"){
        return true;
    }
}


exports.draw = draw;