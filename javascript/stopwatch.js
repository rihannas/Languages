const timer = document.querySelector('label')
const start = document.querySelector('#start')
const pause = document.querySelector('#pause')
const reset = document.querySelector('#reset')

let startTime = 0
let elapsedTime = 0
let currentTime = 0
let paused = true
let hrs = 0
let mins = 0
let secs = 0

start.addEventListener('click', () =>{
    if (paused){
        paused = false
        startTime = Date.now() - elapsedTime
        timerid = setInterval(updateTime, 1000)
    }
})
pause.addEventListener('click', () =>{
    if (!paused){
        paused = true
        elapsedTime = Date.now() - startTime;
        clearInterval(timerid)
    }
})
reset.addEventListener('click', () =>{
    startTime = 0
    elapsedTime = 0
    currentTime = 0
    paused = true
    hrs = 0
    mins = 0
    secs = 0
    clearInterval(timerid)
    timer.textContent = '00:00:00'
})



function updateTime(){
    elapsedTime = Date.now() - startTime;
    secs = Math.floor((elapsedTime / 1000) % 60)
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60)
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60)


    secs = pad(secs)
    mins = pad(mins)
    hrs = pad(hrs)

    timer.textContent = `${hrs}:${mins}:${secs}`

    function pad(unit){
        return ('0' + unit).length > 2 ? unit : '0' + unit
    }

}