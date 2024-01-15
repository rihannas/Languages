let counter = 0;

document.getElementById('dec').onclick = () => {
    if (counter > 0){
        counter -= 1;
        document.querySelector('h1').innerText = counter
    }

}

document.getElementById('inc').onclick = () => {
    counter += 1;
    document.querySelector('h1').innerText = counter
}

document.getElementById('res').onclick = () => {
    counter = 0;
    document.querySelector('h1').innerText = counter
}