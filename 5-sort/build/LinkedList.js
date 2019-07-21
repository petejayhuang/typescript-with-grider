"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sorter_1 = require("./sorter");
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            // with void, we can still, just don't return a thing
            return;
        }
        // create a pointer
        // which starts at the first node (head)
        var tail = this.head;
        // while the current node has a next property
        // advance
        // e.g. the tail pointer will keep on moving along the nodes
        // until it sees null (end!)
        while (tail.next) {
            tail = tail.next;
        }
        // when the above block finishes
        // you'll be at the final node
        // now, add the node being passed in, to the next
        tail.next = node;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            // if there isn't a head
            // it means that the list is empty
            if (!this.head) {
                return 0;
            }
            // find the head
            var node = this.head;
            // we have the first node, so at least 1
            var length = 1;
            // while there is a next property (i.e. we're not at the end)
            while (node.next) {
                length++;
                node = node.next;
            }
            return length;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        // you can't ask for an index when we don't have a list
        if (!this.head) {
            throw new Error('Index out of bounds 1');
        }
        if (index < 0) {
            throw new Error('Can not have negative index');
        }
        var counter = 0;
        // we put 'or' null because if there isn't a node to begin with
        // ts is going to complain because it can't type infer
        var node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        // if we get to this part of the function
        // it means we have gone through the whole list
        // and not found a node of that index
        // e.g. passing an index > list.length
        throw new Error('Index out of bounds 2');
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('List is empty');
        }
        if (leftIndex < 0 || rightIndex < 0) {
            throw new Error('Index has to be positive');
        }
        console.log('leftIndex', leftIndex);
        console.log('rightIndex', rightIndex);
        console.log('>', this.at(leftIndex).data > this.at(rightIndex).data);
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    // normally when you swap within a linked list
    // you need to swap the whole node and it's references
    // we're cheating and just swapping the values
    // that fakes it because our nodes are simple
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        var leftValue = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftValue;
    };
    LinkedList.prototype.print = function () {
        if (!this.head) {
            return;
        }
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    return LinkedList;
}(sorter_1.Sorter));
exports.LinkedList = LinkedList;
