// super = refers to the parent class.
// commonly used to invoke constructor of a parent class

class Animal {
    alive = true

    sleep(){
        console.log(`This ${this.name} is sleeping`)
    }

    eat(){
        console.log(`This ${this.name} is eating`)
    }

    speak(){
        console.log('speaking...')
    }
}

class Cat extends Animal{
    //In a child class constructor, this cannot be used until super is called.
    // ES6 class constructors MUST call super if they are subclasses, or they must explicitly return some object to take the place of the one that was not initialized.
    constructor(name){
        super();
        this.name = name
    }

    run(){
        console.log(`This ${this.name} is running`)
    }

    speak(){
        console.log('moeeew meowwww')
    }
}

class Fish extends Animal{
    constructor(name){
        super();
        this.name = name
    }

    swim(){
        console.log(`This ${this.name} is siwmming`)
    }
}

const loki = new Cat('loki')
console.log(loki.alive)
loki.sleep()
loki.speak()

const goldie = new Fish('goldie')
console.log(goldie.alive)
goldie.sleep()
goldie.speak()

goldie.alive = false
console.log(goldie.alive)


class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        // getSelf() method prints out the properties on the object instance it is called on.
        console.log(this);
    }
    getPrototype() {
        //console logs the prototype of the object instance of the Train class. The prototype holds all the properties shared by all the object instances of the Train class. To get the prototype, you'll be using JavaScript's built-in Object.getPrototypeOf() method, and passing it this object - meaning, the object instance inside of which this method is invoked.
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
}


// Using class instance as another class' constructor's property

class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8) // object
        this.treadmill = new Treadmill(treadmillPos, 5) // object
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) 
console.log(boxingGym.stationaryBike) 
console.log(boxingGym.treadmill) 