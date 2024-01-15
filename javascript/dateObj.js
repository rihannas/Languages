// Date() = object used to work with dates and time

let date = new Date() // returns the current date and time
let newdate = new Date(2030, 0, 1, 3, 30, 5, 1) // create a new date args: year, month, day, hour, minute, second, milisecond
console.log(newdate) // 2030-01-01T00:30:05.001Z

let newdate2 = new Date('January 1, 2023 00:00:00')
console.log(newdate2) // 2022-12-31T21:00:00.000Z

console.log(date) //2023-11-11T10:43:24.590Z
console.log(date.toLocaleString()) //11/11/2023, 1:50:29 PM
console.log(date.toLocaleDateString()) // 11/11/2023
console.log(date.getFullYear()) //2023
console.log(date.getMonth()) // 10 [this means November as january is 0]
console.log(date.getDate()) //11 
console.log(date.getHours()) // 13 [1 pm]
console.log(date.getMinutes()) // 46
console.log(date.getDay()) //6 is saturday [sunday is 0]

// you can also set all of the above
date.setFullYear(2079)
console.log(date.getFullYear())


formateDate(date) //11-10-2079
formateTime(date)

function formateDate(date){
    year = date.getFullYear()
    month = date.getMonth()
    day = date.getDate()

    console.log(`${day}-${month}-${year}`)
}

function formateTime(date){
    hour = date.getHours()
    minute = date.getMinutes()
    pmORam = hour > 12 ? 'pm' : 'am'
    hour = hour > 12 ? hour - 12 : hour

    console.log(`${hour}:${minute} ${pmORam}`)
}