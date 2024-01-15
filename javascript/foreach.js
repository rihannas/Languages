// array.foreach() = executes a provided callback func once for each element in an array

// if you pass a captilize function to it, it will apply the function to every element in the array.
// by default it provides 2 parameteres so you can use your callback func
// which are: element, index, array

let names = ['hanni', 'danni', 'ranni']
names.forEach(cap)
console.log(names)
names.forEach(print)

function cap(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1)
}

// you create a func that print the names indivisually

function print(element){
    console.log(element)
}