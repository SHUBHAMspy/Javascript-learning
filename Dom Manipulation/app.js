//* The top-most node in the dom tree is the document node which is the root node.
//* Document node is used to access all the nodes of the dom and manipulate its content.

// Dom Manipulation

// In order to manipulate a node/element we need to first select that node.

// Selection in Dom
/********************* */
// First select the document head node inorder to select anything in the dom.

// 1.getElementById()

const heading = document.getElementById('main-heading')
console.log(heading);

// 2. getElementByClassName()
// This method returns the collection of all the elements with specified classname

const listItems = document.getElementsByClassName('list-item')
console.log(listItems);

// 3. getElementByTagName()
// It is similar to getElementByClassName but it accepts a tag name
// and returns all the elements of the specified tag in the order they appear/specified in the dom.  

// const items = document.getElementsByTagName('li')
// console.log(items);

// 4. querySelector()
// It selects the first element that matches the given selector
// In this selector can be a classname,tagname, or id
// It uses css selection to select the elements by classname and id
const listIitem = document.querySelector('li');
console.log(listIitem);

// 5. querySelectorAll()

const container = document.querySelectorAll('.container')
console.log(container);


// Styling the Elements
// ---------------------------

// Applying inline styles
// .style property applies inline style to a single element
// it will not be able to apply inline style to multiple elements
heading.style.fontSize = '3rem'; 

// Applying inline styles (multiple elements).
const items = document.querySelectorAll('.list-item')

for (let i = 0; i < items.length; i++) {
  const item = items[i];
  item.style.fontSize = '2rem'
  item.style.borderRadius = '1rem'
}

// Create elements/dom nodes
// -------------------------------
// We can also create dom nodes/elements from javascript
const ul = document.querySelector('ul');

//So now we have to create element in the document
const li = document.createElement('li') 


// Append/Add element to Dom
// -------------------------------
ul.append(li);

// Modify or add Text in dom
// --------------------------------
// You can modify or add text to HTML in 3 ways:

// 1. innerText
// It presents the text exactly word by word
const text1 = listIitem.innerText
console.log(text1);

// 2. textContent
// It presents the text along with its orientatiion i.e how its written in HTML
const text2 = listIitem.textContent
console.log(text2);

// 3. innerHtml
// It presents the text along with its html
const text3 = listIitem.innerHTML
console.log(text3);

li.innerText = 'Family Man'

// Modify attributes and Classes
// -------------------------------
// You can modify or add attributes to a dom node or even classes

// Manipulating attributes

li.setAttribute('id','main-heading')
const attribute = li.getAttribute('id')
console.log(attribute);

li.removeAttribute('id')

// Manipulating or adding class
li.classList.add('div1')

// contains() for checking if an element has a particular class applied to it.
console.log(li.classList.contains('div1'));

li.classList.remove('div1')

// Remove elements/nodes from Dom
//------------------------------------
li.remove()


// Traversing the DOM
// --------------------------

// Parent Node Traversal
// 1. parentElement returns immediate parent HTML element
// Note: Elements/HTML Elements are a kind of node.
const parentHtml = ul.parentElement
console.log(parentHtml);

// 2. parentNode returns the immediate parent node that can be a HTML element
const parent1 = ul.parentNode
console.log(parent1);

// Child Node Traversal
// Note: Indentations are also considered as node (as text node specifically)

// 1. childNodes
const childNodes = ul.childNodes
console.log(childNodes);
// firstchild
const firstChild = ul.firstChild
console.log(firstChild);
// lastChild
const lastChild = ul.lastChild
console.log(lastChild);

// we cannot apply style to a text node we have to select an element to apply style
childNodes[1].style.color = 'blue'

// 2. childElements
const children = ul.children
console.log(children);

const firstChildElement = ul.firstElementChild
console.log(firstChildElement);

const lastChildElement = ul.lastElementChild
console.log(lastChildElement);

// Sibling Traversal

// sibling nodes
const previousSibling = ul.previousSibling
console.log(previousSibling);

const nextSibling = ul.nextSibling
console.log(nextSibling);

// sibling Elements
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);

// Event Listners
// -----------------------------

//Adding event listeners
// There are two ways we can add or create event listners
// 1. event Attributes(the direct method) 
// These can be included directly in any of the elements as attributes and this works a normal attribute does
// and then we apply one liner script as value to the attribute to that particular element.

// 2. with addEventListner() method
//  we have to first include or select the element we want to add the event listner to.
// element.addEventListener('event', function, false(by default))
const hideButton = document.querySelector('#hide-button')

// Callback function
function hideList() {
  console.log('Hide Button');
  if(ul.style.visibility === 'hidden') ul.style.visibility = ''
  else ul.style.visibility = 'hidden'
}

hideButton.addEventListener('click', hideList)

// MouseOver Event

function changeBgColorGrey(index) {
  items[index].style.backgroundColor = 'lightgrey'
  // items[index].style.color = 'white'
}

function changeBgToNormal(index) {
  items[index].style.backgroundColor = 'white'
  items[index].style.color = 'black'
}

// for (let index = 0; index < items.length; index++) {
//   const element = items[index];
//   element.addEventListener('mouseover',(e) => changeBgColorGrey(index))
//   element.addEventListener('mouseout',(e) => changeBgToNormal(index))
// }

//Event Propagation and Event Delegation
// ----------------------------------------

//Event Propagation is a umbrella term to cover 3 phases:
// 1. Event Capturing
// 2. Target
// 3. Event Bubbling

//By default events are bubbled up
// we can also stop dom propagation at a particular point
// we too can make an event to be called at a particular node only once.
window.addEventListener('click',function(){
  console.log('Window');
},)

document.addEventListener('click',function(){
  console.log('Document');
},)

container[0].addEventListener('click',function(e){
  e.stopPropagation()
  console.log('container');
},{once:true})

ul.addEventListener('click',function(){
  console.log('ul');
},)

const loadButton = document.querySelector('#load-button')
loadButton.addEventListener('click',function(){
  console.log('load button');
},)


// Event Delegation
// Event Delegation allows users to delegate or append only a Single Event listner to a parent element that adds it 
// to all of its present and future descendants.
// The idea of event delegation is prretty simple that instead of attaching the event listeners directly to each of the list items 
// we can delegate the listening of events to the parent so when the events occur it gets bubbled up to the parent and it executes and performs our task.

function changeBgGrey(e) {
  const target = e.target
  console.log(target);
  if(target.matches('li')) target.style.backgroundColor = 'lightgrey'
  
  // items[index].style.color = 'white'
}

function changeBgNormal(e) {
  const target = e.target
  if(target.matches('li')){

    target.style.backgroundColor = 'white'
    target.style.color = 'black'
  }
}
ul.addEventListener('mouseover',(e) => changeBgGrey(e))
ul.addEventListener('mouseout',(e) => changeBgNormal(e))












