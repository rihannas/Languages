//ternary operator = shortcut for an 'if/esle statement'

// Takes 3 operands 
// 1. a condition with ?
// 2. expression if True :
// 3. expression if False

let adult = checkAged(21)
function checkAged(age) {
    return age >= 18? true: false
}

console.log(checkAged(adult))

let win = false

function checkWinner(win){
    win ? console.log('You WON') : console.log('You LOST')
}

checkWinner(win)

let age = 7
let name = age > 5 && 'Jack' //if true, then set Jack
let name2 = age < 5 || 'Jack' // if false, then set Jack

console.log(name)
console.log(name2)
