// callback = a function passed as an argument to another function

// it helps in making sure a function doesn't run before a task is completed
// eg: waiting for a file to loading then writing to it
// this helps develop async code

sum(1, 2, printToConsole)

function sum(a, b, func){
    total = a + b
    func(total);
}

function printToConsole(result){
    console.log(total)
}

function printToDom(result){
    document.getElementById('label').innerHTML = total
}