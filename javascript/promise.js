// promise = object that encapsulates the reult of an async operation
//           let async methods return values like sync methods
//           "I promise to return something in the future"

//            the STATE is 'pending' then: 'fulfilled' or 'rejected'
//            the RESULT is what can be returned
//            2 parts producing & consuming

const promise = new Promise((resolve, reject) => {
    let fileLoaded = false;

    if (fileLoaded){
        // runs if somethings happens
        resolve('File loaded');
    } else {
        // runs if something doesn't run, throws an error (you can skip the rejection part too)
        reject('File not loaded');
    }

});

// you can pass anything inside it a call back to a function, arrow function or function expression
// add value variable here because the promise is resulting here
promise.then(value => console.log(value)) 
        .catch(err => console.log(err)) //we use catch to catch an exception

// you can pass arguments to promises

const wait = time => new Promise(resolve => {
    setTimeout(resolve, time)
})

wait(3000).then(() => console.log('Thanks for waiting'))