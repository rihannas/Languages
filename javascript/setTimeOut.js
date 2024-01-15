// setTimeout = invokes a function after a number of milliseconds
// this is an async function (doesn't pause execution)

setTimeout(firstMessage, 3000)
setTimeout(secMessage, 10000)
setTimeout(thirdMessage, 6000)

function firstMessage(){
    console.log('Buy this course')
}

console.log('hi')

function secMessage(){
    console.log('It is on sale')
}

function thirdMessage(){
    console.log('It is 500')
}