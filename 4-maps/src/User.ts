const faker = require('faker')
import { Mappable } from './CustomMap'

/*  keyword implements helps with an additional error message - good!
    this is a way of 'typing' a User
    tightly couples the interface and the class
    
    notice, this inverts direction of what sets the type
    before we set within Mappable, what can or cannot be allowed in 
    now we go to the classes that would have been passed to Mappable
    and they themselves say, I have to implement the type 'Mappable'
    the dependency is inverted = much better code!

    optional! but it's helpful for other engineers! 
    and typescript can help ensure we are using all the right properties
*/
export class User implements Mappable {
  name: string
  location: {
    lat: number
    lng: number
  }
  color: string = 'red'

  constructor() {
    this.name = faker.name.firstName()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `User name: ${this.name}`
  }
}
