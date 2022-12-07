// Queue enables orderd processing
class Queue {
  constructor(){
    this.collection = [];  // internal data structure
    this.head = 0
    this.tail = 0 
    this.size = 0
  }

  enqueue(data){
    this.collection[this.tail] = data
    this.tail++;
    this.size++;
  }
  dequeue(){
    if(this.size === 0) return null
    let data = this.collection[this.head]
    this.head++ // ignoring the previous data or removing the accesibility
    if(this.head === this.tail){  // memory waste optimization
      this.head = 0;
      this.tail = 0;
    }
    this.size--;
    return data
  }
  queueSize(){
    return this.size;
  }
  isEmpty(){
    return this.size === 0
  }
  printQueue(){
    return this.collection;
  }
}
const queue = new Queue() // instantiation
queue.enqueue(10)
queue.enqueue(20)
console.log(queue.printQueue());
console.log(queue.dequeue());
console.log(queue.queueSize());


class CircularQueue{
  constructor(capacity){
    this.collection = [];  // internal data structure
    this.head = 0
    this.tail = 0 
    this.size = 0
    this.capacity = capacity
  }
  enqueue(data){
    if(this.size === this.capacity) return
    this.collection[this.tail] = data
    this.tail = (this.tail + 1) % this.capacity
    this.size++;
  }

  dequeue(){
    if(this.size === 0) return null
    let data = this.collection[this.head]
    this.head = (this.head + 1) % this.capacity
    this.size--
    return data;
  }

  queueSize(){
    return this.size;
  }
  isEmpty(){
    return this.size === 0
  }
  printQueue(){
    return this.collection;
  }
}

const circularQueue = new CircularQueue(5);
circularQueue.enqueue(5)
circularQueue.enqueue(2)
circularQueue.enqueue(3)
console.log(circularQueue.printQueue());
console.log(circularQueue.queueSize());
console.log(circularQueue.dequeue());
console.log(circularQueue.dequeue());
console.log(circularQueue.queueSize());


