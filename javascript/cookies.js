// cookie = a small text file stores on your computer
//          used to remember information about the user
//          saved in name=value pairs
//          this also creates csrftoken

document.cookie = 'firstName=SpongeBob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/'

//to delete a cookie, just make it expire
document.cookie = 'lastName=SqurePants; expires=Sun, 1 January 2000 12:00:00 UTC; path=/'

bakeCookie('email', 'Ss@gmail.com', 7)
bakeCookie('phone', '8888888', 7)

deleteCookie('firstName')
const cookie = getCookie('email')


function bakeCookie(name, value, daysToLive){
    const date = new Date()
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000))
    let expire = 'expires=' + date.toUTCString()
    const cookie = `${name}=${value}; ${expire};`
    document.cookie = cookie
}

function deleteCookie(name){
    bakeCookie(name, null, null)
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie)
    const cArray = cDecoded.split('; ')
    let result = null

    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
           result = element.substring(name.length + 1)
        }
        

    })

    return result
}
console.log(cookie)