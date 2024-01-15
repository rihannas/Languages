class Animal {
    constructor(color = 'yello', energy = 100) {
        this.color = color
        this.energy = energy
    }

    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }

    isActive(){
        if (this.energy > 0){
            this.energy -= 20
            console.log('Energy is decreasing, currently at:', this.energy)
        }
        
        else if (this.energy == 0) {
            this.sleep()
        }
    }

    getColor() {
        console.log(this.color)
    }
}

class Cat extends Animal{
    constructor(color, energy, sound = 'purr', canJumpHigh = true, canClimbTrees = true) {
        super(color, energy)
        this.sound = sound
        this.canJumpHigh = canJumpHigh
        this.canClimbTrees = canClimbTrees
    }

    makeSound(){
        console.log(this.sound)
    }
}

class Bird extends Animal{
    constructor(color, energy, sound = 'chirp', canFly = true) {
        super(color, energy)
        this.sound = sound
        this.canFly = canFly
    }

    makeSound(){
        console.log(this.sound)
    }
}

class HouseCat extends Cat{
    constructor(color, energy, sound, canJumpHigh, canClimbTrees, houseCatSound = 'meow'){
        super(color, energy, sound, canJumpHigh, canClimbTrees)
        this.houseCatSound = houseCatSound
    }

    makeSound(option) {
        if (option){
            super.makeSound()
        }
        console.log(this.houseCatSound)
    }
}

class Lion extends Cat{
    constructor(color, energy, sound, canJumpHigh, canClimbTrees, lionSound = 'Roar'){
        super(color, energy, sound, canJumpHigh, canClimbTrees)
        this.lionSound = lionSound
    }

    makeSound(option) {
        if (option){
            super.makeSound()
        }
        console.log(this.lionSound)
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, color, energy, sound, canFly){
        super(color, energy, sound, canFly)
        this.canTalk = canTalk
    }

    makeSound(option){

        if (option){
            super.makeSound()
        }
        if (this.canTalk) {
            console.log('I\'m talking parrot')
        }

    }
    
}




var leo = new HouseCat();
leo.makeSound(false); // meow
leo.makeSound(true); //purr, meow

var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

fiji.makeSound(); // undefined
fiji.makeSound(true); // chirp

polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!