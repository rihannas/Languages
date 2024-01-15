let num = Math.floor(Math.random() * 6) + 1
console.log(num)

document.getElementById('button').onclick = () => {
    let guess = Number(document.getElementById('num').value)

    h3 = document.querySelector('h3')
    guess == num ? h3.innerHTML = 'you won' : h3.innerHTML = 'you lost, try again'

}
