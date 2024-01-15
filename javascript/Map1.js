// Map = object that holds key-value pairs of any data type (basically a dictionery)

const store = new Map([
    ['hat', 20],
    ['shirt', 30],
    ['pants', 90],
    ['socks', 7]
])

console.log(store) // Map(4) { 'hat' => 20, 'shirt' => 30, 'pants' => 90, 'socks' => 7 }

// you can get a value, using the key
console.log(store.get('hat'))

// you can an key, value pair
store.set('jeans', 500)
store.delete('hat')

console.log(store)

// you can print each item
// the forEach for a map provides the params: key, value
store.forEach((value, key) => console.log(`${key} $${value}`))


// check for existance
console.log(store.has('jeans'))

// length of map
console.log(store.size)
