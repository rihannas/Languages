// array.reduce = reduces an array to a single value
// like when you sum up all the values of the elements in an array

let prices = [5, 10, 60, 34, 728]
let total = prices.reduce(checkOut)
console.log('$'+total)

function checkOut(total, element) {
    return total + element
}