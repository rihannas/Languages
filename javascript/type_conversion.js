// Type conversion = changing data types of to another data types (strings, numbers, booleans)
// You can use parsefloat for float data types

let age;
document.getElementById('button').onclick = () => {
    age = document.getElementById('age').value 
    console.log(typeof age)

    age = Number(age)
    age += 1
    console.log(typeof age)
    console.log('Happy bday u are ', age)
}

let w;
let y;
let z;
let a;

x = Number('3.14')
y = String(3.14)
z = Boolean(0)
a = Boolean("")
let b = Boolean('pizza')
let c = Boolean(1)
let d = Boolean('0')

console.log(z, typeof z) //false – "boolean" 
console.log(y, typeof y) // 3.14 – "string"
console.log(x, typeof x) // 3.14 – "number"
console.log(a, typeof a) //false – "boolean"
console.log(b, typeof b) //True – "boolean"
console.log(c, typeof c) //True – "boolean"
console.log(d, typeof d) //True – "boolean"