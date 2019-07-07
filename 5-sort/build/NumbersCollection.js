"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    // logic 1
    // returns a boolean, to show if need to swap or not
    NumbersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    };
    // logic 2: swaps
    NumbersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var leftValue = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftValue;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
