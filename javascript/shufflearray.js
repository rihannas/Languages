let cards = ['red', 'blue', 'yellow', 'green']

// shuffle((cards) => console.log(cards))

console.log(shuffle(cards))

cards.forEach(card => console.log(card))

function shuffle(array) {
    let currentidx = array.length

    while(currentidx != 0 ){
        let randomidx = Math.floor(Math.random() * array.length) // +1 is usually there but we only want indexes so, we won't include it here
        currentidx -= 1;

        let temp = array[currentidx]
        array[currentidx] = array[randomidx]
        array[randomidx] = temp
    }

    return array
}