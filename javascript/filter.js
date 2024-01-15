// array.filter() = creates a new array with elements
// that pass the test provided by a function

let nums = [5, 3, 6, 2, 10, 47]
let bignums = nums.filter(bigNum)
console.log(bignums)


function bigNum(element) {
    return element >= 5
}

