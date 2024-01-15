const result = document.querySelector('#result')
const user = document.querySelector('#useritem')
const comp = document.querySelector('#compitem')

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

const items = ['rock', 'paper', 'scissors']

rock.addEventListener('click', ()=>{
    const item = getRandomItem(items)
    user.textContent = 'rock'
    comp.textContent = item
    
    if ('rock' == item){
        result.textContent = 'It\'s a Draw'
    }
    else if ('paper' == item){
        result.textContent = 'You Lost'
    }
    else {
        result.textContent = 'You Won'
    }
})

paper.addEventListener('click', ()=>{
    const item = getRandomItem(items)
    user.textContent = 'paper'
    comp.textContent = item
    
    if ('rock' == item){
        result.textContent = 'You Won'
    }
    else if ('paper' == item){
        result.textContent = 'It\'s a Draw'
    }
    else {
        result.textContent = 'You Lost'
    }
})

scissors.addEventListener('click', ()=>{
    const item = getRandomItem(items)
    user.textContent = 'scissors'
    comp.textContent = item
    
    if ('rock' == item){
        result.textContent = 'You Lost'
    }
    else if ('paper' == item){
        result.textContent = 'You Won'
    }
    else {
        result.textContent = 'It\'s a Draw'
    }
})

function getRandomItem(list){
    const idx = Math.floor(Math.random() * list.length)
    const item = list[idx]

    return item
}


