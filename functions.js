//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
//function declaration, functions are passed by value
// function square(a) {
//     a = 4;
//     console.log(a)
//     return a*a
// }

// let a = 2;
// console.log(a);
// square(a);
// console.log(a)

//Objects are passed
// function myFunc(car) {
//     car.make='Toyota'
// }

// const MyCar = {
//     make: 'Honda',
//     model: "Accord",
//     year:1998
// }
// console.log(MyCar.make)
// myFunc(MyCar);
// console.log(MyCar.make)

//Arrays change value
// function myFunc2(arr) {
//     arr[0] = 30;
// }

// const arr = [1, 2, 3];
// console.log(arr);
// myFunc2(arr);
// console.log(arr)

// 4. Scope chain

// function addSquares(a, b) {

//     function square(x) {
//         return x*x
//     }
//     return square(a)+square(b)
// }

// console.log(addSquares(4,3))

// 5.function expression - anonymous

// const square = function (num) {
//     return num*num
// }

//6. Function expression with name
// const factorial = function fac(n) {
//     return n<2?1: n*fac(n-1)
// }

//7. Passing functions as arguments

// function map(f, a) {
//     const result = new Array(a.length);
//     for (var i = 0; i < a.length; i++){
//         result[i] = f(a[i])
//     }
//     return result
// }

// const numbers = [1, 2, 3, 5, 10];
// const cubedNumbers = map(function (x) { return x * x * x }, numbers)
// console.log(cubedNumbers)

// 8. Conditional Functions

// let myFunc;
// if (num === 0) {
//     myFunc = function (Object1) {
//         Object1.make='Toyota'
//     }
// }

// 9. Other concepts : Methods and Runtime function constructor

// 10. Function hoisting (with declarations not with expressions)
// console.log(square(5)); // 25

// function square(n) {
//     return n*m
// }
// const square = function (n) {
//   return n * n;
// }

// 11. Recursion

// let x = 0
// while (x < 10) {
//     console.log(x)
//     x++;
// }

// function loop(x) {
//     if (x >= 10) {
//         return
//     }
//     console.log(x);
//     loop(x+1)
// }
// loop(x)

// 12. Recursion as stack
// function foo(i) {
//     if (i < 0) {
//         return
//     }

//     console.log(`begin: ${i}`)
//     foo(i - 1);
//     console.log(`end: ${i}`)
// }

// foo(3)

// 13. IIFE
// const x =
// var a = (function () {
//     return 7*9
// })()

// console.log(a)

//14. Function scope

// const num1 = 20;
// const num2 = 15
// const name = "Chamakh"

// function multiply() {
//     return num1*num2
// }
// console.log(multiply())

// function getScore() {
//     const num1 = 7
//     const num2 = 8
//     const name="Ashu"
    
//     function add() {
//         return `${name} scored ${num1+num2} `
//     }

//     return add()
// }
// console.log(getScore())

//15. Clousures
//Pure functions, first class functions, higher order functions
// const pet = function (name) {
//     const getName = function () {
//         return name
//     }
//     return getName
// }

// const myPet = pet("Vivie");
// console.log(myPet())

// Example2
// const createPet = function (name) {
//     let sex;
//     const pet = {
//         setName(newName) {
//             name=newName
//         },
//         getName(){
//             return name
//         },
//         getSex() {
//             return sex
//         },
//         setSex(newSex) {
//             if (typeof newSex == "string" && (newSex.toLowerCase() === 'male' || newSex.toLowerCase() === 'female')) {
//                 sex=newSex
//             }
//         }
//     }
//     return pet
// }
// const pet = createPet("Vivie")
// console.log(pet.getName())
// pet.setName("Oliver")
// pet.setSex("male")
// console.log(pet.getSex())
// console.log(pet.getName())

// Example 3
// const getCode = (function () {
//     const apiCode = "ohdiuh"
//     return function() {
//         return apiCode
//     }
// })()
// console.log(getCode())
//Example 4 - explanation og multiply nested

// 16. Name conflicts
// function outside() {
//     const x = 5
//     function inside(x) {
//         return x * 2
//     }
//     return inside;
// }

// console.log(outside()(10))

// 17. Variable no. of arguments
// function myconcat(seperator) {
//     let result = ""
//     for (let i = 1; i < arguments.length; i++){
//         result+=arguments[i]+seperator
//     }
//     return result;
// }
// console.log(myconcat(", ", "red", "black", "orange"))
// console.log(myconcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// console.log(myconcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));

//18. Default parameters
// function multiply(a, b) {
//     b = typeof b!== "undefined" ? b : 1
//     return a*b
// }
// console.log(multiply(5))

// function multiply(a, b = 1) {
//     return a*b
// }
// console.log(multiply(5))

//19. Rest parameters
// function multiply(multiplier, ...theArgs) {
//     return theArgs.map((x)=>multiplier*x)
// }
// const arr = multiply(2, 1, 2, 3);
// console.log(arr)

// 20. Arrow functions
//shorter functions
// const a = ["Hydrogen", "Helium", "Barium", "Lithium"]
// const a2 = a.map((function (s){
//     return s.length
// }))

// console.log(a2)
// const s3=a.map(s=>s.length)

//No seperate this
// function Person() {
 
//     this.age = 0;
//     //ECMA 3/6
//     // const self = this;
//     // self.age=0

//     //   setInterval(function growUp() {
//     //     self.age++;
//     //     console.log("Ticking... Local age:", self.age);
//     //   }, 10);
    
//     //Bound function
//     setInterval(() => {
//         this.age++;
//         console.log(this.age)
//         console.log("Ticking... Local age:", this.age);
//     }, 10);
// }

// const p = new Person();

//Recursion
//It is a function calling itself and has smaller sub problems
// function recursion(x) {
//     if (x > 0) {
//         console.log(x)
//         return recursion(x-1)
//     }
    
// }
// recursion(10)

//Limited by stack size
// const maxStackSize = (i) => {
//     try {
//         maxStackSize(++i);
//     } catch  {
//         return i;
//     }
// }
// console.log(maxStackSize(0))

const factorial = (n) => {
    if (n == 0) {
        return 1
    }
    return n* factorial(n-1)
}

const fibonacci = (n) => {
    if (n == 0 || n == 1) {
        return 1
    } else {
        return fibonacci(n-1)+fibonacci(n-2)
    }
}
// Objects
// 1. Basics
// const person = {
//     // name: ["Bob", "Smith"],
//     //Object as object property
//     name: {
//         firstName: "Bob",
//         lastName:"Smith"
//     },
//     age: 32,
//     bio: function () {
//         // console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old`)
//         console.log(`${this.name.firstName} ${this.name.lastName} is ${this.age} years old`)
//     },
//     introduceSelf() {
//         // console.log(`Hi Im ${this.name[0]}`)
//         console.log(`Hi Im ${this.name.firstName}`)
//     },
//     logProperty(propertyName) {
//         console.log(person[propertyName])
//     }
// }
// console.log(person.name[0])
// console.log(person.age)
// //Dot notation
// person.bio()
// person.introduceSelf()
// console.log(person.name.firstName)
// console.log(person.name.lastName)

// //Bracket notation
// console.log("Bracket notation")
// console.log(person["age"])
// console.log(person["name"]["firstName"])
// person.logProperty("name")
// person.logProperty("age")

// //Setting object members
// person.age = 45
// person["name"]["lastName"] = "Cratchit"

// // console.log(person)
// person["eyes"] = "hazel"
// person.farewell = function () {
//     console.log("Bye , everybody!")
// }
// person.farewell()
// const myDataName = "height";
// const myDataValue = "1.75m"
// person[myDataName] = myDataValue
// console.log(person.height);

// //this keyword - current object

// const person1 = {
//     name: "Chris",
//     introduceSelf() {
//         console.log(`Hi, Im ${this.name}`)
//     }
// }

// const person3 = {
//     name: "Dipti",
//     introduceSelf() {
//         console.log(`Hi, Im ${this.name}`)
//     }
// }
// person1.introduceSelf()
// person3.introduceSelf()

//Constructors


//Destructuring
// let { PI } = Math
// console.log(PI)

// //Can only destructure something that already exists
// let { pi } = Math
// console.log(pi)

// console.log(Math.PI === PI)
// PI = 1
// //the original value of object and destructured value are not connected
// console.log(Math.PI===PI)

//For - of
//Object is not iterable
const car = {
    speed: 10,
    color: "blue"
}

    // for (prop of bike) {
    //     console.log(prop)
    // }
    //Arrays are iterable
    // const colors = ['green', 'red', 'pink']
    // for (var color of colors) {
    //     console.log(color)
    // }

    //Built in methods
    // console.log(Object.keys(car))
    // console.log(Object.values(car))
    // console.log(Object.entries(car))

    // var clothingItem = {
    //     price: 50,
    //     color: 'beige',
    //     material: 'cotton',
    //     season:'autumn'
    // }
    // for (const key of Object.keys(clothingItem)) {
    //     console.log(key,':',clothingItem[key])
    // }
    // function testBracketsDynamicAccess() {
    //     let dynamicKey;
    //     if (Math.random >= 0.5) {
    //         dynamicKey='speed'
    //     } else {
    //         dynamicKey ='color'
    //     }

    //     let drone = {
    //         speed: 15,
    //         color:'orange'
    //     }

    //     console.log(drone[dynamicKey])

    // }
    // testBracketsDynamicAccess()
    //for in
    // for (let key in car) {
    //     console.log(key)
    // }
    // const vehicle = {
    //     engine: true,
    //     steering: true,
    //     speed:'slow'
    // }
    // const sportsCar = Object.create(vehicle)
    // sportsCar.speed = 'fast'
    // console.log("The sports car object",sportsCar)

    // console.log('---------For in -----------')
    // for (prop in sportsCar) {
    //     console.log(prop)
    // }
    // console.log("Iterating over object and its prototype")

    // console.log('------For-of---------')
    // //For of loop doesnt directly iterate , obect.keys convert properties into array and loop iterates
    // for (prop of Object.keys(sportsCar)) {
    //     console.log(prop + ":" + sportsCar[prop])
    // }
    // console.log("Iterating over objects own properties only")
    //Template literals
    // let greet = "Hello"
    // let place = "World"
    // console.log(`${greet}${place}${1+1+1}stars!`)
    // //Allow multi linr strings,nested template literals and tagged templates

    // let first = `He said, "Dont you know ES6 has great features!"`
    // let second = `"Wouldnt you want to learn", he asked`
    // console.log(`${first}and i got curious .${second}`)

    // //assignment
    // var dairy = ['cheese','sour cream','milk','yogurt','ice cream','milkshake']
    // // Task 1
    // // WRITE YOUR CODE HERE - Create the logDairy function and use a for...of loop to log each item in the dairy array
    // function logDairy() {
    //     for (item of dairy) {
    //         console.log(item)
    //     }
    // }
    // logDairy()
    // // Task 2
    // // WRITE YOUR CODE HERE - Create the birdCan function and use a for...of loop to log bird object's own properties
    // const animal = {
    //     canJump: true
    // }
    // const bird = Object.create(animal)
    // bird.canFly = true;
    // bird.hasFeathers = true;

    // function birdCan() {
    //     for (prop of Object.keys(bird)) {
    //         console.log(`${prop}:${bird[prop]}`)
    //     }
    // }
    // birdCan()
    // // Task 3
    // // WRITE YOUR CODE HERE - Create the animalCan function and use a for...in loop to log all bird properties, including inherited ones
    // function animalCan() {
    //     for (prop in bird) {
    //         console.log(`${prop}:${bird[prop]}`)
    //     }
    // }
    // animalCan()

    //Data structures examples
    // const fruits = ['kiwi', 'orange', 'apple', 'banana', 'mango']
    // function appendIndex(fruit, index) {
    //     console.log(`${index}:${fruit}`)
    // }
    // fruits.forEach(appendIndex)

    // const veggies = ['onion', 'garlic', 'potato']
    // veggies.forEach(function (veggie, index) {
    //     console.log(`${veggie}:${index}`)
    // })

    // const nums = [0, 10, 20, 30, 40, 50]
    // const result = nums.filter(function (num) {
    //     return num>20
    // })
    // console.log(result)

    // // [0, 10, 20, 30, 40, 50, 60].map( function(num){
    // //     return num/10
    // // })

    // const result1=[]
    // const drone = {
    //     speed: 100,
    //     color:'yellow'
    // }
    // const keys = Object.keys(drone);
    // keys.forEach(function (key) {
    //     result1.push(key, drone[key])
    // })
    // console.log(result1)

    // let bestBoxers = new Map()
    // bestBoxers.set(1, 'The Champion')
    // bestBoxers.set(2, 'The Runner up')
    // bestBoxers.set(3, 'The third place')
    // console.log(bestBoxers,bestBoxers.get(1))

    // const repeatFruits = ['apple', 'plum', 'apple', 'plum', 'cherry', 'apple']
    // const uniqueFruits = new Set(repeatFruits)
    // console.log(uniqueFruits)

//
let monuments = ['The colosseum', 'Trevi Fountain', 'The vatican city']
function showIterinary(place1, place2, place3) {
    console.log("Visit" + place1)
    console.log("Then visit" + place2)
    console.log("Finish with a visit to" + place3)
}
showIterinary(monuments[0], monuments[1], monuments[2])
showIterinary(...monuments)