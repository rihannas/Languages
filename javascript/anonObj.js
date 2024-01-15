// anonymous objects = Objects without a name
// not directly referenced from something like an array
// less syntax, no need for unique values


class Card{
    constructor (value, suit){
        this.value = value
        this.suit = suit
    }
}

// instead of doing this
// card1 = new Card('1', 'hearts')
// card2 = new Card('1', 'diamonds')
// card3 = new Card('1', 'clubs')
// card4 = new Card('1', 'spades')

// you can just do this

let cards = [new Card('1', 'hearts'), new Card('1', 'diamonds'), new Card('1', 'clubs'), new Card('1', 'spades')]
// indirectly referencing an object
console.log(cards[0].suit)

cards.forEach((card) => {
    console.log(`${card.value} ${card.suit}`)
})
