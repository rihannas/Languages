// add/change html elements
// these helps add or change inner text of our elements:
// .innerHTML (vulnerable to XSS attacks) ppl can add malicous code too it
// .textContent (more secure) even if ppl add malicous code it will turn into text

const nameTag = document.createElement('h1')
nameTag.textContent = 'Animals'
document.body.append(nameTag) //you need to do this 

const list = document.querySelector("#animals")
const newAnimal = document.createElement('li')
newAnimal.textContent = 'ant'
// list.append(newAnimal) {appends to the end}
// list.prepend(newAnimal) {appends at start}
// to append at specific index
list.insertBefore(newAnimal, list.getElementsByTagName('li')[2])