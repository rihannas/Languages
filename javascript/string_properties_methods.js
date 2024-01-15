// string properties and methods 

let text = ' Jack Sparrow'
let result = text.length; // property that calcs the length duh
console.log(result);

let upperCase = text.toUpperCase() // method that upper cases letters, it needs to invoked by ()
console.log(upperCase);

console.log(text.charAt(6)) //method that checks the char at an index

// to get the last char of a string you can do
const endChar = text.charAt(text.length - 1)
console.log(endChar)

console.log(text.indexOf('a')) // method that returns an index with given a char

console.log(text.trim()) //method that remove white space

console.log(text.trim().startsWith('Jack')) //method that checks if a string starts with something

console.log(text.includes('ack')) //method checks if string includes something

console.log(text.slice(1, 7)) //method that creates string from existing string using indexes.