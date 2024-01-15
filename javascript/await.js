// await = makes an async function wait for a Promise. It should be inside an async func
// no need to use .then().catch()

async function loadFile(){
    let fileLoaded = false;

    if (fileLoaded){
        return 'File loaded'
    } else {
        throw 'File not loaded'
    }
}

async function startProcess(){
    try{
        let message = await loadFile()
        console.log(message)
    }
    catch(error){
        console.log(message)
    }
}

startProcess()

