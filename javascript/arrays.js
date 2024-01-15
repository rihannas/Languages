//arrays

let pets = ['elephant', 'dog', 'ant', 7, null, undefined]

//if you try to access an index that's not in the array, you will get undefined
let newPet = pets[0]
console.log(newPet)

pets[4] = 'chicken'
console.log(pets)

pets.push('cow')  //adds an element to the end of an array
pets.pop() // removes the last element of the array
pets.unshift('rat') // adds an element to the start of an array
pets.shift() // removes the first element of the array
console.log(pets)

let len = pets.length
console.log(len)

let idx = pets.indexOf('cat')
console.log(idx)

for (let i = 0; i < pets.length; i++) {
    console.log(pets[i])
}
console.log('-------------')
let pet;
for (pet of pets) {
    console.log(pet)
}

console.log('-------------')

for (pet in pets) {
    console.log(pet)
}


pets = ['elephant', 'dog', 'ant']
pets = pets.sort()
pets = pets.sort().reverse()

console.log(pets)

let sweet = ['icecreame', 'cake', 'gummy']
let veggie = ['carrot', 'tomato', 'potato']
let fruit = ['apple', 'orange', 'banana']

let foods = [sweet, veggie, fruit]

foods[1][1] = 'onion';
foods[0][2] = 'chocolate';
foods[2][0] = 'mangoes'


console.log(foods)

for (let list of foods) {
    for (let item of list){
        console.log(item)
    }
}

