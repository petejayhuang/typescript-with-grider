import { Model } from './Model'
import { Attributes } from './Attributes'
import { ApiSync } from './ApiSync'
import { Eventing } from './Eventing'
import { Collection } from './Collection'
// interfaces aren't just there to constrain classes/ functions
// they can also be used to describe types such as object literals
// basically, interaces can be uses as types as well!
export interface UserProps {
  id?: number
  name?: string
  age?: number
}

const rootUrl = 'http://localhost:3000/users'

export class User extends Model<UserProps> {
  // every time we want to make a new user we will call
  // User.buildBuild(data)
  // by using that static method, we as a developer define how the user is initialised

  // a static method returns a preconfigured user
  // we can create other static methods and preconfigure those as well
  // e.g. ApiSync could be swapped out for LocalStorageSync
  static buildUser(attributes: UserProps) {
    return new User(
      new Attributes<UserProps>(attributes),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    )
  }

  static buildUserCollection(): Collection<
    User,
    UserProps
  > {
    return new Collection<User, UserProps>(
      rootUrl,
      (json: UserProps) => User.buildUser(json)
    )
  }

  // we can add User specific methods here as well
  // e.g. isAdminUser()
}
