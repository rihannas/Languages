const button = document.getElementById('btn')
const body = document.body
const txt = document.getElementById('txt')
const box = document.getElementById('div')

body.onload = FistMssg
txt.onchange = Highlight
button.onclick = Submit
// box.onmouseover = changeColor
// box.onmouseout = changeColorBack
box.onmousedown = changeColor
box.onmouseup = changeColorBack

function FistMssg() {
    alert('enter you name and click me')
}

function Highlight(){
    txt.style.borderColor = 'red'
}

function Submit() {
    alert('submited')
}

function changeColor() {
    box.style.backgroundColor = 'pink'
}

function changeColorBack() {
    box.style.backgroundColor = 'brown'
}


// .addEventLister(event, function, usecapture)
// usecapture helps you at which order item is selected if two element are on top of each other
// you can add many even handler to one element
// even the same event that invokes different functions
const inner = document.getElementById('innerdiv')
const outer = document.getElementById('outerdiv')

inner.addEventListener('click', () => {
    inner.style.backgroundColor = 'salmon'
})

outer.addEventListener('click', () => {
    outer.style.backgroundColor = 'salmon'
}, true)