
// how to prompt a user to enter information as an alter in the browser -- easier version

let username = window.prompt('what is your name?');
console.log(username)

// how to do it the promper way? IS to use html
let name;
document.getElementById('button').onclick = function (){
    username = document.getElementById('name').value;
    document.querySelector('h1').innerText = 'Hello ' + username
}