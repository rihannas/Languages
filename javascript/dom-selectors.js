// The Difference Between an HTMLCollection and a NodeList
// A NodeList and an HTMLcollection is very much the same thing.
// An HTMLCollection is a collection of document elements.

// A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).

// HTMLCollection items can be accessed by their name, id, or index number.
// The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.

// NodeList items can only be accessed by their index number.
// The querySelectorAll() method returns a static NodeList.


const fruits = document.getElementsByName('fruits')
fruits.forEach(fruit => {
    if (fruit.checked){
        console.log(fruit.value)
    }
})

const veggie = document.getElementsByTagName('li')
veggie[0].style.backgroundColor = 'pink'

const header = document.querySelector('h1')

//there are many selectors