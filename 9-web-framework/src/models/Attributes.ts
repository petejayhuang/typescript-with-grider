import { UserProps } from './User'

export class Attributes<T> {
  constructor(private data: T) {}

  // we are using an arrow function here to gain lexical scope
  // and solve issues of scope when using the this keyword
  // you should always bias towards using arrow functions
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key]
  }

  getAll(): T {
    return this.data
  }

  set(update: T): void {
    console.log('this.data', this.data)
    Object.assign(this.data, update)
  }
}

// let's restrict the keys you can pass in
// restrict to what?
// restrict to the keys of the type T you pass in
// e.g. if you pass in data of type { name: string, age: number}
// then if you pass in name, you should always see a string returned
// if you 'get' age, you could always get type number returns
// the idea is that your type is kinda like a lookup table
// hence the T[K], in your type T (which looks like a object)
// find the value in key K, and the value is a type declaration
// the syntax is almost opposite
// <K extends key of T> is saying, the generic type that you pass in
// will always be a key of the type T
// "will always be" => you're setting this, it's called a generic constraint
// the benefit of this is that you're being very clear about types
// a sort of refinement / type guarding
// so that ts can help you will the variables you are using
// tip - realise that T and K are just like function arguments
// T is the first type passed into the init of the class
// tip - like how you can do object lookup, you can do type lookup as well
