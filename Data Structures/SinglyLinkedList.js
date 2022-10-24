class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return true;
  }

  pop() {
    if (!this.head) return;

    let node = this.head;
    let newTail = node;
    while (node.next) {
      newTail = node;
      node = node.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = this.head;
    }
    return node.val;
  }

  shift() {
    if (!this.head) return;
    let oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead.val;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
    }
    return true;
  }

  get(index) {
    if (index < 0 || index >= this.length) return;
    let node = this.head;
    for (let i = 0; i !== index; i++) node = node.next;
    return node;
  }

  set(index, val) {
    const node = this.get(index);
    if (node) node.val = val;
    return node.val;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    const newNode = new Node(val);
    const preceedingNode = this.get(index - 1);
    newNode.next = preceedingNode.next;
    preceedingNode.next = newNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return;
    if (index === this.length - 1) this.pop();
    if (index === 0) this.shift();

    const preceedingNode = this.get(index - 1);
    const succeedingNode = preceedingNode.next;
    preceedingNode.next = succeedingNode.next;
    this.length--;
    return succeedingNode.val;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return 'Done';
  }

  toArray() {
    const arr = [];
    let node = this.head;
    while (node) {
      arr.push(node.val);
      node = node.next;
    }
    return arr;
  }

  // @deprecated
  toString() {
    if (this.length === 0) {
      return 'List Empty';
    }
    let node = this.head;
    let str = this.head.val;
    node = node.next;
    while (node) {
      str += ',' + node.val;
      node = node.next;
    }
    return str;
  }

  utility(callback, action) {
    let paddedCallback =
      callback === null ? 'null ' : callback.toString().padEnd(5);
    let paddedAction = action.toString().padEnd(10);
    console.log(
      paddedAction,
      ': returned => ' +
        paddedCallback +
        ' || LinkedList [' +
        this.toArray() +
        ']'
    );
  }
}

const list = new SinglyLinkedList();

list.push('A');
list.push('B');
list.push('C');
list.push('D');
list.push('E');

list.utility(list.push('F'), 'Pushed');
list.utility(list.pop(), 'Popped');
list.utility(list.shift(), 'Shifted');
list.utility(list.unshift(0), 'Unshifted');
list.utility(list.get(4).val, 'Get');
list.utility(list.set(3, 'd'), 'Set');
list.utility(list.insert(5, 'F'), 'Inserted');
list.utility(list.insert(0, 'Zero'), 'Inserted');
list.utility(list.insert(5, 'D'), 'Inserted');
list.utility(list.remove(1), 'Removed');

list.utility(list.reverse(), 'Reversed');
list.utility(list.length, 'Length');
