// map = executes a provided callback function
// once for each array element
// and creates a new array
// this doesn't affect the actual array unlike foreach
// this allow provides the param: element, index, array

let nums = [1, 2, 3, 4, 5]
let cubed = nums.map(cubes)
console.log(cubed)

function cubes(element) {
    return Math.pow(element, 3)
}