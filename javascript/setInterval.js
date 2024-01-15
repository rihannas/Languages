// setInterval() = inovkes a function repeatedly after a number of milliseconds
//                  It's an aysnchronous function doesn't pause the excution of the program

let count = 0
let max = 10
const timeid = setInterval(countfunc, 1000, max)

function countfunc(max){
    count++
    console.log(count)
    if (count == max){
        clearInterval(timeid) //this stops the setInterval function
    }
}