import { AxiosPromise, AxiosResponse } from 'axios'
// interfaces can be generics
// remember generics are great for when you're not sure what type of data you're passing in
// (which is fine, because we are working towards reusability)
interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K]
  getAll(): T
  set(value: T): void
}

interface Sync<T> {
  fetch(id: number): AxiosPromise
  // you look directly into Sync.ts and see that save takes a data object
  // You're looking at the wrong save function
  // look at the one on User.ts
  save(data: T): AxiosPromise
}

interface Events {
  on(eventName: string, callback: () => void): void
  trigger(eventName: string): void
}

interface HasId {
  id?: number
}

// if anything inside your class uses generics
// you need to also allow the top level function to accept generics
// think of it as 'enabling function arguments'
//                 ⬇️
export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  // get on() {
  //   return this.events.on
  // }
  //
  // refactored to:

  on = this.events.on

  trigger = this.events.trigger

  get = this.attributes.get

  set(update: T): void {
    console.log('update', update)
    this.attributes.set(update)
    this.events.trigger('change')
  }

  fetch(): void {
    const id = this.attributes.get('id')

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id')
    }

    this.sync.fetch(id).then(
      (response: AxiosResponse): void => {
        // you could also go deep and reference the underlying set method
        // e.g. this.attributes.set
        // but this doesn't have the additional this.events.trigger
        //  which is part of this framework's behaviour
        this.set(response.data)
      }
    )
  }

  save(): void {
    console.log('save in Model.ts')
    this.sync
      .save(this.attributes.getAll())
      .then(
        (response: AxiosResponse): void =>
          this.trigger('save')
      )
      .catch(() => this.trigger('error'))
  }

  setRandomAge(): void {
    console.log('setRandomAge')
    const age = Math.round(Math.random() * 100)

    this.set({ age })
  }
}
