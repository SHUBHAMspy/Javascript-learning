//* "this" keyword in JavaScript
/********************************** */
// "this" is just a reference to the current object.
// and this changes depending upon the context.
// "this" allows us to reuse functions in different context or it allows us to decide which object will be focal
// when invoking a function or a method.

//? So ,"this"  references the object that is executing the current function.

// Doesn't mean if you are inside an object so the "this" will be the object itself or refers the object.
const wrestler = {
  name: "John",
  lastname: "Cena",
  petname: this
}

console.log(wrestler.petname);  // Window or global object

//? Note: Objects don't create binding with "this" but functions do

//Types of binding in Javascript
// There are generally4 types of binding in js:
// 1. Default Binding
// 2. Implicit Binding
// 3. Explicit Binding
// 4. Constructor Call Binding

// 1. Default Binding
// It says that - If the function housing a this reference is a standalone function, then that function is bound to the global object.

function call() {   // standalone function
  console.log(name + ' is calling');
  console.log(this);  // global or window object
}

let name = 'Shubham';
call()   //Shubham is calling

// Here call() is an unattached standalone function so, it is bound to global scope. Therefore, this.name reference resolves to
// global variable  

// But this doesn't hold if function() were to be defined in strict mode
// When set in strict mode, the this reference is set to undefined.
// const name1 = 'zap';
// function call1() {   // standalone function
//   'use strict'; 
//   console.log(this.name1 + ' is calling'); 
// }


// call1() //! this is undefined

//2. Implicit Binding
// It says that - If the function is bounded to an object at the call site then the function uses the object as its context
// i.e this references that object.
// Put simply, when you call a function using dot notation, this is implicitly bound to the object the function is being called from.
const video = {
  title: 'good one',
  play(){
    console.log(this);
    console.log('video is playing');
  }
}
video.play()

const person = {
  name: 'Shubham',
  age: 22,
  speak: speak
}

function speak() { // standalone function
  console.log(this.name + ' speaks' );
  console.log('His age is ' + this.age);
}

person.speak() // this here is the person object

// with nested object
const newPerson = {
  name: 'Zap',
  age: 22,
  speak: speak,
  brother:{
    name: "sap",
    age:19,
    speak: speak,
  }
}

// Here, because call is ultimately being called from nestedObj, this is implicitly bound to brother instead of newPerson.
newPerson.brother.speak()  // His age is 19 -> `this` is bound to `brother`
newPerson.speak() // His age is 22  ->  `this` is bound to `newPerson`

// 3.Explicit Binding
// It says that - if we want to force a function to use an object as its context without putting a property function reference on the object
// we have to use two utility methods to achieve this: call() and apply().
// To explicitly bind a function call to a context, you simply have to invoke the call() on that function and pass in the context object as parameter

call.call(newPerson)

// Even if you were to pass around that function multiple times to new variables (currying), every invocation will use the same context because it has been locked (explicitly bound) to that object. 
// This is called hard binding.
// Hard binding is a perfect way to lock a context into a function call and truly make that function into a method.

function tell(){
  call.call(person)
}

tell() // Shubham is calling

setTimeout(tell,200) // Shubham is calling

tell.apply(newPerson) // Shubham is calling

// 4. Constructor Call Binding
// Also called new binding says that - When a function is invoked with the new keyword in front of it, otherwise known as a constructor call, the following things occur:
// 1. A brand new object is created (or constructed)
// 2. The newly constructed object is [[Prototype]]-linked to the function that constructed it
// 3. The newly constructed object is set as the this binding for that function call.

function VideoStatus(status){
  this.status = status;
}

let videoStatus = new VideoStatus('play')
console.log(videoStatus.status);

// Summarizing
// The "this" keyword points to a different object / scope depending upon where it is used.

//*1 In a method 
var me = {    
  firstName: "Zap",
  latname: "Bubstead",
  fullName: function () {
    return this.firstName + " " + this.lastname  //? this refers to the owner object(me)
  }
}

//* 2. Standalone  and independent
var z = this.name // ? this refers to window or global object

//* 3. In a standalone function 
function myfunction() {
  return this    // ? this refers to window or global object
}

//*4 In a function (strict mode)
function myfunction() {
  "use strict";
  return this    // ? this is undefined 
}

//*5 In Event Handlers 
{/* <button onClick="this.style.display='none'" >  // ? this refers to the element that received that event(button)
  Click Me
</button> */}

//* With call() & apply()
var person1 = {
  fullName(){
    console.log(this.firstName + " " + this.lastname)
  }
}

var person2 = {
  firstName: "Goku",
  lastname: "San"
}

person1.fullName.call(person2)   // ? this in fullname() here is forced to refer to the person2 object.