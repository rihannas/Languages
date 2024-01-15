const btn = document.querySelector('button')
const div1 = document.querySelector('#div1')
const div2 = document.querySelector('#div2')


btn.addEventListener('click', animate);
btn.addEventListener('click', scale);

function animate(){
    let timerid = null
    let x = 0
    let y = 0
    let degree = 0


    timerid = setInterval(frame, 5)

    function frame(){
        if ( y>= 200 || x>= 200 || degree >= 360){
            clearInterval(timerid)
        }
        else{
            x+=1
            y+=1
            degree +=1
            div1.style.top = y + 'px'
            div1.style.left = x + 'px';
            div1.style.transform = "rotateZ("+degree+"deg)"
        }
    }
}


function scale(){
    let timerid
    let scaleX = 1
    let scaleY = 1


    timerid = setInterval(frame, 5)

    function frame(){
        if ( scaleX>= 2){
            clearInterval(timerid)
        }
        else{
            scaleX += 0.01
            scaleY += 0.01
            div2.style.transform = "scale("+scaleX+", "+scaleY+")"
        }
    }
}