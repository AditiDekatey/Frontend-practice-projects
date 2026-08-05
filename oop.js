// 1. Creating objects
// Object is a super class

class Animal{
    /* My code */
}
var myDog = Object.create(Animal)
var myDog2 = new Animal()
// Note : If constructor is empty, js uses object superclass

//2. Inheritance

// class Animal{ }
// class Mammal extends Animal{ }
// class Elephant extends Mammal{ }

//3. Encapsulation
"abc".toUpperCase()

//4. Polymorphism
const bicycle = {
    bell: function () {
        return 'Ring !ring !Watch out ,please'
   }
}

const door = {
    bell: function () {
        return 'Ring!ring! Come here please'
    }
}

function ringTheBell(thing) {
    console.log(thing.bell())
}

// ringTheBell(bicycle)
// ringTheBell(door)

//Example2
// console.log("abc".concat("def"))
// console.log(["abc"].concat(["def"]))
// console.log(["abc"]+["def"])

//Example 3
class Bird{
    useWings() {
        console.log("Flying!")
    }
}

class Eagle extends Bird{
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird{
    useWings() {
        console.log("Diving!")
    }
}

let baldEagle = new Eagle()
let kingPenguin = new Penguin()

baldEagle.useWings()
kingPenguin.useWings()

//5.Constructors
function Icecream(flavor) {
    this.flavor = flavor
    this.meltIt = function () {
        console.log(`The ${this.flavor} icecream has melted` )
    }
}

let kiwiicecream = new Icecream('kiwi');
let appleIcecream = new Icecream('apple');
console.log(kiwiicecream)

//Assignment
// Task 1: Code a Person class
class Person {
    constructor(name = 'Tom', age = 20, energy = 100) {
        this.name = name
        this.age = age
        this.energy=energy
    }
    sleep() {
        this.energy += 10;
    }
    doSomethingFun() {
        this.energy-=10
    }
}

// Task 2: Code a Worker class
class Worker extends Person {
    constructor(name='Tom',age=20,energy=100,xp=0,hourlyWage=10) {
        super(name,age,energy)
        this.xp = xp
        this.hourlyWage=hourlyWage
    }
    goToWork() {
        this.xp+=10
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    let intern = new Worker('Bob', 21, 110, 0, 10)
    console.log(intern)
    intern.goToWork()
    console.log(intern)
    return intern
}

// Task 4: Code a manager object, methods
function manager() {
    let manager = new Worker('Alice', 30, 120, 100, 30)
    manager.doSomethingFun()
    return manager
}
