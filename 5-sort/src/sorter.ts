import { NumbersCollection } from './NumbersCollection'

// naming the interface
// think of it as
// "You can be sortable if you implement this interface"
// export interface Sortable {
//   length: number
//   compare(leftIndex: number, rightIndex: number): boolean
//   swap(leftIndex: number, rightIndex: number): void
// }

// INTERFACE NOT NEEDED ONCE YOU HAVE ABSTRACT CLASSES
export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean
  abstract length: number
  abstract swap(leftIndex: number, rightIndex: number): void

  sort(): void {
    const { length } = this

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1)
        }
      }
    }
  }
}
