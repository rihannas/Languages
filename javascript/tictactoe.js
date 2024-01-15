let cells = document.querySelectorAll('.cell')
let status = document.querySelector('h2')
let restart = document.querySelector('button')
let player = 'X'
let active = true;


cells.forEach(cell => {
    let cellId = cell.id
    cell.addEventListener('click', () => {cellClick(cellId)})
})

function cellClick(id){
    let cell = document.getElementById(id)
    if (cell.textContent == '' && active){
        cell.textContent = player
    }
    // change player
    checkWinner()
    player = player == 'X' ? 'O' : 'X'
}

function checkWinner(){
    values = ['', '', '', '', '', '', '', '', '']
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], //rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], //cols
        [0, 4, 8], [2, 4, 6] //diagnols 
    ]

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern
        cella = document.getElementById(a).textContent
        cellb = document.getElementById(b).textContent
        cellc = document.getElementById(c).textContent

        if (cella && cella === cellb && cellb === cellc){
            status.textContent = `${cella} Won`
            active = false
            return
        } 
        
        for (const idx of pattern){
            values[idx] = document.getElementById(idx).textContent
            if (!values.includes('')){
                status.textContent = `it's draw`
            active = false
            return
            }
        }   
        
    }
}

restart.addEventListener('click', () =>{
    document.location.reload(true)
})











