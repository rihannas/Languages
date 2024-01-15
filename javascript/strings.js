let x = 'Cute Cat'
let phone = '123-567-897'

let len = x.length
console.log(len) //8

let idx = x.charAt(1) //returns a char at a given index
console.log(idx) //u

let chara = x.indexOf('C') //returns the first index for a given chara, returns -1 if not found
console.log(chara) // 2

let lastchar = x.lastIndexOf('C') //returns the last index for a given chara, returns -1 if not found
console.log(lastchar) //5

x = '   Cute Cat   '
x = x.trim() // removes white space
console.log(x)

x = x.toUpperCase()
console.log(x) //CUTE CAT

x = x.toLowerCase()
console.log(x) //cute cat

phone = phone.replace('-', '?') //replaces the 1st dash with ?
console.log(phone) 

phone = phone.replaceAll('-', '?') //replaces the all dash with ?
console.log(phone) 