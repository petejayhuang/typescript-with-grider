"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
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
            throw new Error('Index out of bounds');
        }
        if (index < 0) {
            throw new Error('Can not have negative index');
        }
        var counter = 0;
        // we put 'or' null because if there isn't a node to begin with
        // ts is going to complain because it can't type infer
        var node = this.head;
        while (node.next) {
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
        throw new Error('Index out of bounds');
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('List is empty');
        }
        if (leftIndex < 0 || rightIndex < 0) {
            throw new Error('Index has to be positive');
        }
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
}());
exports.LinkedList = LinkedList;
