// async = a keyword makes a function return a Promise

async function loadFile(){
    let fileLoaded = true;

    if (fileLoaded){
        return 'File loaded' // or return Promise.resolve('file loaded)
    }
    else{
        throw 'File not loaded' // or return Promise.reject('file not loaded)
    }
}

loadFile().then(value => console.log(value))
          .catch(err => console.log(err))