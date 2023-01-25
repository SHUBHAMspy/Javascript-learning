//* Linked List
// A Linked List is a dynamic data structure which is made of nodes.
// These node resference the next node in line forming a list.
// A node has two property: a) Data b) Next(reference) 
// It has a huge advantage over an array is that it can vary in size. 
// If you want to add an element in a linked list, you can add it in O(1) time. Considering that you are inserting the element in the first place
// But if you had to do the same in a normal array. It will cost you O(N) time to do so. 
// Thus it is favorable to use a linked list over an array in real-world applications. 

//? Note: Inorder to know or find any node we just need to know it's parent node or its previous node
//? So all problems boils down to finding the address of the previous node of the node to be searched or deleted
//? then we can very easily delete or find the target node.

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
    if(pos < 0 || pos >= this.size) return
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

linkedList.append(0)
linkedList.append(30)
linkedList.append(0)
linkedList.append(0)
console.log(linkedList.print());

//* Remove multiple elements in LL
let removeMultipleElements = (head,val) => {

  let previous = null
  let current = head
  console.log(current);
  // Case1: Elements do be deleted can be at the start of the list
  while (current !== null && current.data === val) {  //O(n)
    previous =  current
    current = current.next
    previous.next = null
  }
 
  // Case2: Elements do be deleted can be in between the list.
  // Case3: Elements to be deleted can be at the end
  head = current
  while(current !== null){
    if(current.data === val){
      previous.next = current.next
      current = current.next
    }
    else{
      previous = current
      current = current.next
    }
  }

  return head
}
removeMultipleElements(linkedList.head,0)
console.log(linkedList.print());

//* Delete nth node from last
let removeNthFromEnd = function(head, n) {
  let size = 0
  let temp = head
  while(temp != null){
      temp = temp.next
      size++
  } 

  let pos = size - n
  let requiredPos = 0
  let previous = null
  let current = head

  if(n > size) return head  //edge cases
  if(n === size) return head.next  //edge cases
  while(requiredPos < pos){
      previous = current
      current = current.next
      requiredPos++
      console.log(requiredPos)
  }
  previous.next = current.next
  current.next = null
  return head
};
console.log(removeNthFromEnd(linkedList.head,2));
console.log(linkedList.print());

//* Delete node without head pointer
// Generally, we are given a node’s address and are required to delete the next node in the linked list. 
// But here we are required to delete a node whose address is given to us.
// One way to solve this problem was if we have the head pointer then we can traverse the whole linked list. 
// and keep account of previous or parent of each node and break the loop when you are at a node that is provided as input.
// This way in the end we have the parent of the node to be deleted. 
// So now the problem is changed to the simple deletion of a node in the linked list whose parent’s address is given.

// Considering the same approach we need to change the problem to the deletion of the node whose parent’s address is given.
// For that we need to swap the node to be deleted with the next node because we have the access/address of the node to be deleted
// i.e here we are swapping the roles of deletion since address accesss compels to make it a parent and and adjacent a victim node.
// If we don't have access to a node's parent then we will make one.   
function deleteNodeWithoutHead(node) {
  node.val = node.next.val
  node.next = node.next.next
}

//*Reverse LinkedList
function reverseLinkedList(head) {
  let previous = null
  let current = head
  let next = null
  // We have to reverse the current node subsequently for every node
  // Usually we require the previous or the parent node but here we also require the address access of the next node as well
  // to get the access of the node whose reference will be removed to further process the LL
  while (current !== null) {  //O(n)
    next = current.next
    current.next = previous
    previous = current
    current = next
    //console.log(current.data);
  }
  head = previous
  let data = ''
  let newCurrent = head
  while (newCurrent !== null) {
    data += newCurrent.data + "->"
    newCurrent = newCurrent.next
  }
  return data
}
console.log(reverseLinkedList(linkedList.head))




