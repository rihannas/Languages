// getter = binds an object property to a function when that property is accessed,
// basically we want a property to be only accessed by method
// this helps increases security 
// plus we make private property by preceeding one _

// setter = binds an object property to a function when that property is assigned a value
// basically it allows us to set a value for a private property


class Cat {
    family = 'cat'

    speak()  {
        console.log('meow')
    }

    eat() {
        console.log('non non')
    }
}

const cat1 = new Cat();
cat1.speak()

cat1.name = 'susu'



class Student {
    constructor(name, age, gpa) {
        this.name = name
        this.age = age
        this.gpa = gpa
    }

    study(){
        console.log(`${this.name} is studying`)
    }
}

s1 = new Student('Spongbob', 5, 4.0)
s1.job = 'Burger Maker'
console.log(s1.gpa)
console.log(s1.age)

s2 = new Student('Sandy', 6, 7.0)
console.log(s2.job) // undefined

s1.study()

// static = belongs to the class, not the objects
// properties: useful for caches, fixed configuration
// method : useful for utility function
// static methods and properties can't be accessed by objects

class Car{
    static numberOfCars = 0
    constructor(name){
        this.name = name
        Car.numberOfCars +=1
    }

    static start(){
        console.log('1..2..3..GO!')
    }
}

car1 = new Car('Ferrari')
car2 = new Car('Toyota')

console.log(car1.numberOfCars) //undefined
console.log(Car.numberOfCars) // 2

//car1.start() //type error start is not a function

Car.start()


class Car1{
    constructor(power, color){
        this._gas = 25
        this._power = power
        this.color = color
    }

    //getter - non writtable
    get power(){
        return `${this._power}hp`
    }

    get gas(){
        return `${this._gas}L`
    }

    // setter = writable
    set gas(value){
        if (value > 50){
            this._gas = 50
        }
        else if (value < 0){
            this._gas = 0
        }
        this._gas = value
    }

    drive(){
        console.log(`driving a car with the color ${this.color}`)
    }
}

const car3 = new Car1(600, 'red')
const car4 = new Car1(100, 'yellow')
const car5 = new Car1(300, 'green')


console.log(car3.gas)

car3.gas = 5

console.log(car3.gas)

console.log(car3.power)

console.log(car3.color)

changeColor(car3, 'black')
console.log(car3.color)


// you can pass objects as arguments

// color changing function

function changeColor(obj, color){
    obj.color = color
}

// you can obj to arrays

const cars = [car3, car4, car5]
console.log(cars[0].color)
console.log(cars[1].color)
console.log(cars[2].color)

cars[0].drive()
cars[1].drive()
cars[2].drive()

// you can pass the array to function
console.log('------------------ using function')
startrace(cars)

function startrace(cars){
    for (const car of cars){
        car.drive()
    }
}