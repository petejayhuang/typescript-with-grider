import { Sorter } from './sorter'

class Node {
  next: Node | null = null

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null

  add(data: number): void {
    const node = new Node(data)

    if (!this.head) {
      this.head = node
      // with void, we can still, just don't return a thing
      return
    }

    // create a pointer
    // which starts at the first node (head)
    let tail = this.head

    // while the current node has a next property
    // advance
    // e.g. the tail pointer will keep on moving along the nodes
    // until it sees null (end!)
    while (tail.next) {
      tail = tail.next
    }

    // when the above block finishes
    // you'll be at the final node
    // now, add the node being passed in, to the next
    tail.next = node
  }

  get length(): number {
    // if there isn't a head
    // it means that the list is empty
    if (!this.head) {
      return 0
    }

    // find the head
    let node = this.head

    // we have the first node, so at least 1
    let length = 1

    // while there is a next property (i.e. we're not at the end)
    while (node.next) {
      length++
      node = node.next
    }

    return length
  }

  at(index: number): Node {
    // you can't ask for an index when we don't have a list
    if (!this.head) {
      throw new Error('Index out of bounds 1')
    }

    if (index < 0) {
      throw new Error('Can not have negative index')
    }

    let counter = 0
    // we put 'or' null because if there isn't a node to begin with
    // ts is going to complain because it can't type infer
    let node: Node | null = this.head

    while (node) {
      if (counter === index) {
        return node
      }
      counter++
      node = node.next
    }

    // if we get to this part of the function
    // it means we have gone through the whole list
    // and not found a node of that index
    // e.g. passing an index > list.length
    throw new Error('Index out of bounds 2')
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty')
    }

    if (leftIndex < 0 || rightIndex < 0) {
      throw new Error('Index has to be positive')
    }

    console.log('leftIndex', leftIndex)
    console.log('rightIndex', rightIndex)
    console.log('>', this.at(leftIndex).data > this.at(rightIndex).data)
    return this.at(leftIndex).data > this.at(rightIndex).data
  }

  // normally when you swap within a linked list
  // you need to swap the whole node and it's references
  // we're cheating and just swapping the values
  // that fakes it because our nodes are simple
  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex)
    const rightNode = this.at(rightIndex)
    const leftValue = leftNode.data
    leftNode.data = rightNode.data
    rightNode.data = leftValue
  }

  print(): void {
    if (!this.head) {
      return
    }

    let node: Node | null = this.head

    while (node) {
      console.log(node.data)
      node = node.next
    }
  }
}
