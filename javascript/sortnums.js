// we can use the sort method and pass a call back function
// to sort numbers according to the function and it creates a new array

let grades = [5, 8, 9, 1, 10, 3]
// grades = grades.sort() // doing this only sorts one number 

grades = grades.sort(dec)
console.log(grades)   //[ 10, 9, 8, 5, 3, 1 ]

function asc(x, y){
    return x - y
}

function dec(x, y){
    return y -x
}

