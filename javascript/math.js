// Math = is an intrinsic object that provides basic mathematics functionality and constants
// what is an intrinsic object? it means a built-object

let x = 3.14;
let y = 5
let z = 1

// round number 
x = 3.14;
x = Math.round(x)
console.log(x) //3

// round down always
x = 3.14;
x = Math.floor(x)
console.log(x) //3

// round up always
x = 3.14;
x = Math.ceil(x)
console.log(x) //4

// power of
x = 3.14;
x = Math.pow(x, 2)
console.log(x) //9.85696

// sqroot  of
x = Math.sqrt(x)
console.log(x) //3.14

// abosolute = a number distance to 0
x = -3.14;
x = Math.abs(x)
console.log(x) //3.14

// returns max num
let max = Math.max(x, y, z) // you can pass a list
console.log(max)

// return min num
let min = Math.min(x, y, z) // you can pass a list
console.log(min)

// constants
x = Math.PI
console.log(x)


// hypotenuse of a right angle triangel

document.getElementById('button').onclick = () => {
    let a = Number(document.getElementById('a').value)
    let b = Number(document.getElementById('b').value)

    a = Math.pow(a, 2)
    b = Math.pow(b, 2)

    c = Math.sqrt(a+b)

    document.getElementById('result').innerHTML = 'Side C: ' + c


}

