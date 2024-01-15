// slice() = extracts a section of a string
// and returns it as a new string without modifying the new string

let x = 'cute cat'
let adj;
let noun;

adj = x.slice(5) //counts from 5th to last index
console.log(adj) //cat

noun = x.slice(0,4) //you need to add last index + 1, because it acts like the range method from python
console.log(noun)

//the right way to slice names

let fn;
let ln;

fn = x.slice(0, x.indexOf(' '))
console.log(fn)

ln = x.slice(x.indexOf(' ') + 1)
console.log(ln)
