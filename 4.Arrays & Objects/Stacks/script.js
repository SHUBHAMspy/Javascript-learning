// Stacks
// When we want things orderdly or in a orderly manner then we use stack.
// A stack is a linear data structure which can be implemented using an array or a linked list.
// Stack is an abstract data type. It is defined by its behavior rather than being a mathematical model.
// Stack follows LIFO principle stands for Last in First Out ,meaning the data that was inserted last, is the first data to get removed.
// Usage: Browser history tracking, undo operation when typing, Call stack in javascript 

class Stack {
  constructor(){
    this.collection = [];
    this.top = -1
  }

  push(data){
    this.top++;
    this.collection[this.top] = data
  }

  pop(){
    if(this.top === -1) return null
    else{
      let data = this.collection[this.top]
      this.collection[this.top] = null
      this.top--;
      return data
    }
  }
  
  peek(){
    return this.collection[this.top] || null
  }

  isEmpty(){
    return this.top === -1
  }

  size(){
    return this.top + 1
  }
  print(){
    console.log(this.collection.toString());
  }

}

const stack = new Stack()
console.log(stack.peek());
stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.isEmpty());
console.log(stack.size());
stack.print()
//* Next greater Element

// Since we are saying to find next greater element then there is possibility to find greater elements in the right.
// We have to search the greater element in the stack as stack contains last elements at the top
// So probability to find greater elemnt is there at the top.
// Intitution is to find next greater element in the stack by traversing the array from end as greater elements could be found on the right 
// So to first encounter them we travel through last.
function nextGreaterElement(nums1,nums2) {
  let nextGreater = [];
  //let map = {}  // element to greater element mapping
  let decreasingStack = [];
  for (let i = nums2.length - 1; i >= 0; i--) {
    
    let indexToPutAt = nums1.indexOf(nums2[i])
    
    while (decreasingStack.length !== 0 && decreasingStack[decreasingStack.length - 1] <= nums2[i] ) {
      // Because we are fulfilling the nature/property of decreasing stack so to make it work that way we are coding it accordingly
      let deleted = decreasingStack.pop(); // removing is challenging other greater that see i am bigger than you so you can't be a contender now
      console.log(deleted);
    }
    
    // we are finding/deciding the greatest element for a number of nums2 which is corresponding to nums1
    if(indexToPutAt >= 0) nextGreater[indexToPutAt] = decreasingStack.length === 0 ? -1 : decreasingStack[decreasingStack.length - 1]
    decreasingStack.push(nums2[i])
  }
  return nextGreater
}
console.log(nextGreaterElement([4,1,2],[1,3,4,2]));

function nextSmallerElement(nums) {
  let nextSmaller = [];
  let increasingStack = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    while (increasingStack.length > 0 && nums[increasingStack[increasingStack.length - 1]] >= nums[i] ) {
      increasingStack.pop()
    }
    nextSmaller[i] = increasingStack.length === 0 ? -1 : increasingStack[increasingStack.length - 1]
    increasingStack.push(i)
  }
  return nextSmaller
}

console.log(nextSmallerElement([2,1,5,6,2,3]));

//* Previous Smaller Element
function prevSmallerElement(nums) {
  let prevSmaller = [];
  let increasingStack = [];
  for (let i = 0; i < nums.length; i++) {
    while (increasingStack.length > 0 && nums[increasingStack[increasingStack.length - 1]] >= nums[i] ) {
      increasingStack.pop()
    }
    prevSmaller[i] = increasingStack.length === 0 ? -1 : increasingStack[increasingStack.length - 1]
    increasingStack.push(i)
  }
  return prevSmaller
}

console.log(prevSmallerElement([2,1,5,6,2,3]));
//* Online Stock Span
// What was missing in the approach was the stock prices which need to be also counted for the next span was removed
// So the next price doesn't had any account for the values thatcould be counted
// But in the mechanism those values are bound to be removed.
// So we need some other enability/facility to have those account maintained or the count known. 
function onlineStockSpan(prices) {
  let spanOfStock = [];
  let stack = [];
  for (let i = 0; i < prices.length;i++) {   // It boils down to finding minimum element from the left.
    let span = 1;
    while (stack.length > 0 && stack[stack.length - 1][0] <= prices[i]) {
      span += stack[stack.length - 1][1]  // the element that we are going to pop is the minimum element in the left.
      stack.pop();
    }
    stack.push([prices[i],span]);
    console.log(stack);
    spanOfStock[i] = span;
  }
  return spanOfStock;
}

console.log(onlineStockSpan([100,80,60,70,60,75,85]));

//* Largest Rectangle in Histogram
function areaOfLargestReactangleFormed(heights) {
  // So the problem boils down to finding smaller height on the right and smaller height on the left
  // Finding smaller element on the right 
  // Finding smaller element on the left
  let maxArea = 0
  let width = 1

  let smallerElementsRight = nextSmallerElement(heights);
  let smallerElementsLeft = prevSmallerElement(heights)
// our job is to construct a reactangle from a current height
  for (let i = 0; i < heights.length; i++) {
    // if PLE doesn't exist, all bars up to index 0 are part of current rectangle
    let barsOnLeft = smallerElementsLeft[i] === -1 ? i : i - smallerElementsLeft[i] - 1;
    // if NLE doesn't exist, all bars up to last index are part of current rectangle
    let barsOnRight = smallerElementsRight[i] === -1 ? heights.length-1-i : smallerElementsRight[i] - i - 1;
    let width = barsOnLeft + barsOnRight + 1;
      
    maxArea = Math.max(maxArea,smallerElementsRight[i] - smallerElementsLeft[i] * heights[i])
  }
  return maxArea
}
console.log(areaOfLargestReactangleFormed([2,1,5,6,2,3]));