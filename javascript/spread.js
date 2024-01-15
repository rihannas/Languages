// spread operator = allows a iterable such as an array or string
// to be expanded in places where zero or more arugments are expected 
// it basically unpacks the list to indivisual elements, usuful when dealing
// with functions that take multiple arguments but not arrays

let nums = [3, 5, 6, 7, 90]
let max = Math.max(nums); //NaN
max = Math.max(...nums); // 90
console.log(max)

let gp1 = ['Tom', 'Jerry', 'Spike']
let gp2 = ['Spongbob', 'Patrick', 'Sandy']

// join the 2 arrays

// we can push gp2 into gp1
// gp1.push(gp2)

// this will cause a 2d array, we don't want that, we want array only

gp1.push(...gp2)
console.log(...gp1) // prints all of them as indivisual strings
