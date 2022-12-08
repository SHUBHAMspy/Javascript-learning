//* Linked List
// A Linked List is a dynamic data structure which is made of nodes.
// These node resference the next node in line forming a list.
// A node has two property: a) Data b) Next(reference) 

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.size = 0
  }

  prepend(data){
    // Insertion process has 2 steps:

    //1. Initialization
    let node = new Node(data)

    //2. Insertion
    // Inserting a node has two cases:
    // 1.Empty Linked List
    if(this.size === 0){
      this.head = node
      this.tail = node
    }    

    // 2. Not Empty LL
    else{
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  append(data){
    let node = new Node(data);

    if(this.size === 0){
      this.head = node
      this.tail = node
    }
    else{
      this.tail.next = node
      this.tail = node
    }
    this.size++;
  }

  removeFirst(){
    // Case1: LL is empty
    if(this.size === 0) return null

    // Case2: LL has 1element/node
    let data = this.head.data
    if(this.size === 1){
      this.head = null
      this.tail = null
    }
    // Case3: LL has elements
    else this.head = this.head.next
    this.size--
    return data;
  }

  removeLast(){
    // Case1: LL is empty
    if(this.size === 0) return null

    // Case2: LL has 1element/node
    let data = this.tail.data
    if(this.size === 1){
      this.head = null
      this.tail = null
    }
    // Case3: LL has elements
    // (it is little tricky as we also have to know the second last element)
    else{
      let temp = this.head
      while (temp.next.next !== null) {
        temp = temp.next 
      }
      this.tail = temp
      this.tail.next = null
    }
    this.size--
    return data
  }

  insertAt(pos,data){
    // Position to be inserted at is valid or not
    if(pos < 0 || pos > this.size) return

    // Position to be inserted at is 1st or not
    if(pos === 0) this.prepend(data)

    // Position to be inserted at is the last
    else if(pos === this.size){
      this.append(data)
    }
    // Position to be inserted at is in between
    else{
      let node = new Node(data)
      let previous = null
      let current = this.head
      let requiredPos = 0
      while(requiredPos < pos){
        previous = current
        current = current.next
        requiredPos++;
      }
      node.next = current // that means we have got the right place to insert current is the right place
      previous.next = node
      this.size++
    }
  }

  removeAt(pos){
    if(pos < 0 || pos > this.size) return
    if(pos === 0) return this.removeFirst()
    else if(pos === this.size - 1) return this.removeLast()
    else{
      let previous = null
      let current = this.head
      let requiredPos = 0
      while(requiredPos < pos){
        previous = current
        current = current.next
        requiredPos++
      }
      previous.next = current.next
      current.next = null
      this.size--
      return current.data
    }
  }

  print(){
    let data = ''
    let current = this.head
    while (current !== null) {
      data += current.data + "->"
      current = current.next
    }
    return data;
  }
}

const linkedList = new LinkedList()
linkedList.prepend(20)
linkedList.prepend(10)

linkedList.append(30)
console.log(linkedList.print());
console.log(linkedList.removeFirst());
console.log(linkedList.print());
console.log(linkedList.removeLast());
console.log(linkedList.print());

linkedList.insertAt(1,30)
console.log(linkedList.print());
linkedList.append(40)
console.log(linkedList.print());
console.log(linkedList.removeAt(1));
console.log(linkedList.print());