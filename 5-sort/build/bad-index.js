"use strict";
// this implementation works, but isn't best
// it's not scalable
// what happens when you want to pass new types to Sorter to sort?
// say, an array of strings
// you'll have to define and add the type
// you'll have to have a type guard for it
// and it'll get too big too quick
// we've come across a problem like this before
// use an interface!
// don't define the types that the class can use
// see good-index.ts
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    // type guarding = can read if statement and understands whats within
                    if (this.collection instanceof Array) {
                        var leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                    if (typeof this.collection === 'string') {
                        var stringArray = this.collection.split('');
                        var leftHand = stringArray[j];
                        stringArray[j] = stringArray[j + 1];
                        stringArray[j + 1] = leftHand;
                        this.collection = stringArray.join();
                    }
                }
            }
        }
    };
    return Sorter;
}());
var numberSorter = new Sorter([1, 6, 8, 21, -1, 5, 1, 28]);
var letterSorter = new Sorter('asXhubkq');
numberSorter.sort();
letterSorter.sort();
console.log(numberSorter.collection);
console.log(letterSorter.collection);
