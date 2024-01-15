// window = window object is used to talk to the web browser
//          the DOM is a property of the window

const btn = document.querySelector('button')

//console.dir(window) //prints the window obj
console.log(window.innerWidth)
console.log(window.innerHeight)
console.log(window.outerWidth)
console.log(window.outerHeight)
console.log(window.scrollX)
console.log(window.scrollY)

console.log(window.location)
console.log(window.location.hostname)
// window.location.href = 'http://google.com' //takes to you google


//btn.addEventListener('click', ()=> window.open('http://google.com')) //opens a new page
// btn.addEventListener('click', ()=> window.close()) //closes the window
// btn.addEventListener('click', ()=> window.print()) //gets a popup to print the page
// window.alert('hi')
// window.confirm('press ok to continue')
let age = window.prompt('what\'s your age')
if (age < 21){
    window.alert('you must be 21+ to visit this page')
    window.close()
}