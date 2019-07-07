import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'

const numbersCollection = new NumbersCollection([12, 6, 3, 9, 1, -1])
const charactersCollection = new CharactersCollection('peterjiandonghuang')

const numberSorter = new Sorter(numbersCollection)
const characterSorter = new Sorter(charactersCollection)

numberSorter.sort()
characterSorter.sort()

console.log(numbersCollection.data)
console.log(charactersCollection.data)
