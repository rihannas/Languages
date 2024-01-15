// we use a try...catch block to handle errors elegantly

// error = object with a descriptive of something went wrong
// throw = makes an error happen

try {
    let x = Number(window.prompt('enter a number:'))

    if(isNaN(x)) throw 'That wasn\'t a number'
    if(x == '') throw 'That was emprt'

    console.log(x)

}

catch(error){
    console.log(error)
}

finally{
    console.log('always executes')
}