const p = document.querySelector('p')
const div = document.querySelector('div')

// window.addEventListener('keydown', event => {
//     p.textContent = event.key
// })

window.addEventListener('keydown', move)

let x = 0
let y = 0


function move(event){
    switch(event.key){
        case "ArrowDown":
            y+=5;
            div.style.top = y + 'px';
            break;

        case "ArrowUp":
            y-=5;
            div.style.top = y + 'px';
            break;

        case "ArrowRight":
            x+=5;
            div.style.left = x + 'px';
            break;

        case "ArrowLeft":
            x-=5;
            div.style.left = x + 'px';
            break;
    }
}