import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

const numbersCollection = new NumbersCollection([12, 6, 3, 9, 1, 1])
const charactersCollection = new CharactersCollection('peterjiandonghuang')

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(10)
linkedList.add(3)
linkedList.add(7)
linkedList.sort()
linkedList.print()

numbersCollection.sort()
console.log(numbersCollection.data)

charactersCollection.sort()
console.log(charactersCollection.data)
