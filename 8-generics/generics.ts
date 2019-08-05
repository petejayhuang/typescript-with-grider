class ArrayOfNumber {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index]
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index]
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index]
  }
}

new ArrayOfAnything<string>(['a', 'b', 'c'])

// example of generics with functions

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

// it's recommended to pass generic type to the function
// even if ts will infer for you
// it'll catch errors!
printAnything<string>(['a', 'b', 'c'])

// generic constraints

class Car {
  print() {
    console.log('I am a car')
  }
}

class House {
  print() {
    console.log('I am a house')
  }
}

interface Printable {
  print(): void
}

// this extends section
// it's promising to ts that when you get passed that value
// it will satisfy the interface Printable
// this also helps you constrain the things that are passed to you
function printHousesOrCards<T extends Printable>(
  arr: T[]
): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print()
  }
}

// this doesn't work because we have constrained the type
printHousesOrCards([1, 2, 3, 4])

printHousesOrCards<House>([new House(), new House()])

// this comes up more often than you know!
