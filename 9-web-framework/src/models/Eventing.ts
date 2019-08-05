// this is called a TYPE ALIAS
// a short cut naming convention
type Callback = () => void

export class Eventing {
  // this is some data on the class
  // it's going to be an object where the key is a string...
  // we don't know what the event name may be, tied to a user
  // and the value is an array of type Callback
  events: {
    [key: string]: Callback[]
  } = {}

  on = (eventName: string, callback: Callback): void => {
    // this guarantees handles is an []
    const handlers = this.events[eventName] || []
    handlers.push(callback)
    this.events[eventName] = handlers
  }

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName]

    if (!handlers || handlers.length === 0) {
      return
    }

    handlers.forEach(callback => {
      callback()
    })
  }
}
