import { Sortable } from './sorter'

export class NumbersCollection implements Sortable {
  constructor(public data: number[]) {}
  get length() {
    return this.data.length
  }

  // logic 1
  // returns a boolean, to show if need to swap or not
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex]
  }

  // logic 2: swaps
  swap(leftIndex: number, rightIndex: number): void {
    const leftValue = this.data[leftIndex]
    this.data[leftIndex] = this.data[rightIndex]
    this.data[rightIndex] = leftValue
  }
}
