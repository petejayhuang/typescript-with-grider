// this is the generic version of UserCollection
import axios, { AxiosResponse } from 'axios'

import { Eventing } from './Eventing'

export class Collection<T, K> {
  // T is a thing
  // K is the type of thing
  // Yes if it's a class it is both a type and a thing
  // But be more explicit
  // e.g. for UserCollection, T is User an instance of a class, K is UserProps
  models: T[] = []
  events: Eventing = new Eventing()

  constructor(
    public rootUrl: string,
    public deserialize: (json: K) => T
  ) {}

  get on() {
    return this.events.on
  }

  get trigger() {
    return this.events.trigger
  }

  fetch(): void {
    axios
      .get(this.rootUrl)
      .then((response: AxiosResponse) => {
        response.data.forEach((value: K) => {
          this.models.push(this.deserialize(value))
        })
        this.trigger('change')
      })
  }
}
