// rest parameters = represents an indefinite number of parameters
// (packs arguments into an array)

// this helps create functions that take any number of parameters

let a = 1
let b = 3
let c = 7
let d = 5

console.log(sum(a, b))
console.log(sum(a, b, c, d))


function sum(...nums) {
    let total = 0
    for (let num of nums) {
        total += num
    }
    return total
}