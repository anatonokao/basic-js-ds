const { NotImplementedError, ListNode } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue extends ListNode {
  queue = {};

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    function pushToEnd(queueItem) {
      queueItem.next
        ? pushToEnd(queueItem.next)
        : (queueItem.next = new ListNode(value));
    }
    if (!this.queue.value) this.queue = new ListNode(value);
    else pushToEnd(this.queue);
  }

  dequeue() {
    const value = this.queue.value;
    this.queue = this.queue.next;
    return value;
  }
}

module.exports = {
  Queue,
};
