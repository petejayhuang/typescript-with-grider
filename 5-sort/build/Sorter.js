"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// naming the interface
// think of it as
// "You can be sortable if you implement this interface"
// export interface Sortable {
//   length: number
//   compare(leftIndex: number, rightIndex: number): boolean
//   swap(leftIndex: number, rightIndex: number): void
// }
// INTERFACE NOT NEEDED ONCE YOU HAVE ABSTRACT CLASSES
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
