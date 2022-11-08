class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let Node1 = new Node(10)
let Node2 = new Node(20)
let Node3 = new Node(30)
let node4 = new Node(40)
let node5 = new Node(50)
let node6 = new Node(60)

Node1.right = Node3
Node1.left = Node2
Node2.left = node4;
Node2.right = node6;
Node3.right = node5

console.log(Node1);

function depthFirstTraversal(root) {
  let traversal = []
  let visiting = [];
  if(root === null) return []

  visiting.push(root);
  while (visiting.length > 0) {
    let visited = visiting.pop();
    traversal.push(visited.value);
    if(visited.right)visiting.push(visited.right);
    if(visited.left) visiting.push(visited.left);
  }
  return traversal;
}
console.log(depthFirstTraversal(Node1));

function depthFirstRecursively(root) {
  let traversal = []
  
  //Base Case
  if(root === null) return []
  
  // if we print root
  let leftNodes = depthFirstRecursively(root.left) // if we print left subtree depth first way
  let rightNodes = depthFirstRecursively(root.right) // if we print right subtree depth first way
  traversal.push(root.value);
  traversal.push(...leftNodes)
  traversal.push(...rightNodes)

  return traversal;
}
console.log(depthFirstRecursively(Node1));

function breadthFirstTraversal(root) {
  if(root === null) return []

  let traversal = [];
  let queue = [];

  queue.push(root);
  while (queue.length > 0) {
    let levelSize = queue.length;
    let level = []
    for (let i = 0; i < levelSize; i++) { // for a particular level print all the nodes at that level
      let visited = queue.shift();
      level.push(visited.value)
      if(visited.left) queue.push(visited.left)
      if(visited.right) queue.push(visited.right)
    }
  
    traversal.push(level);
  } 

  return traversal;
}
console.log(breadthFirstTraversal(Node1));

function treeSum(root) {
  if(root === null) return 0; // Base Case
  // Recursive Steps
  let leftSum = treeSum(root.left);
  let rightSum = treeSum(root.right);
  // Small processing
  return root.value + leftSum + rightSum
}
console.log(treeSum(Node1));

function pathSum(root,targetSum) {
  if(root === null) return false
  let visiting = []
  visiting.push(root);
  let runningSum = 0;
  while(visiting.length > 0){
    
    let visited = visiting.pop()
    runningSum += visited.value;
    console.log(runningSum);
    
    if(!visited.right && !visited.left && runningSum == targetSum) return true
    else if(!visited.right && !visited.left && runningSum !== targetSum) runningSum -= visited.value
    if(visited.right)visiting.push(visited.right);
    if(visited.left) visiting.push(visited.left);
  }
}
console.log(pathSum(Node1,90));