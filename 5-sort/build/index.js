"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([12, 6, 3, 9, 1, -1]);
var charactersCollection = new CharactersCollection_1.CharactersCollection('peterjiandonghuang');
var numberSorter = new Sorter_1.Sorter(numbersCollection);
var characterSorter = new Sorter_1.Sorter(charactersCollection);
numberSorter.sort();
characterSorter.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
