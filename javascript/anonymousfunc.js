// func expression = function without a name (anonymous function)
// allows you not to wright names for your function and just set to a vairable

const greeting = function(){
    console.log('hi')
}

greeting()

document.getElementById('dec').onclick = function() {
    count-=1;
    document.querySelector('h1').innerHTML = count
}

document.getElementById('in').onclick = function() {
    count+=1;
    document.querySelector('h1').innerHTML = count
}


// arrow function allows you drop the function keyword

const greetingh = (hi) =>{
    console.log(hi)
}

greetingh('hello')

document.getElementById('dec').onclick = () => {
    count-=1;
    document.querySelector('h1').innerHTML = count
}

document.getElementById('in').onclick = () => {
    count+=1;
    document.querySelector('h1').innerHTML = count
}

let grades = [100, 70, 40, 20, 30]
grades.sort((x, y) => x-y)
console.log(grades)

grades.forEach((element) => console.log(element))