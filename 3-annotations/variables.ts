let apples: number = 5

let speed: string = 'fast'

let hasName: boolean = true

// value identical to type
let nothingMuch: null = null

let nothing: undefined = undefined

// built in objects
let now: Date = new Date()

let colors: string[] = ['red', 'blue']

let numbersArray: number[] = [1, 2]

class Car {}

let car: Car = new Car()

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
}

// function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

// when to use annotations

// 1) function that returns the 'any' type
const json = '{"x":10, "y": 20}'
const coords: { x: number; y: number } = JSON.parse(json) //returns any
console.log(coords)

// 2) when we declare a variable on one line and init it later
let words = ['red', 'green', 'blue']

// let foundWord = false
let foundWord: boolean

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true
  }
}

// 3) variables whose type cannot be inferred correctly

let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]
  }
}
