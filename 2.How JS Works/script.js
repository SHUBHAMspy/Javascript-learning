




//How our code is Executed
/************************ */
// So, JavaScript is always hosted in some environment.
// And that is most typically a browser such a Google Chrome, Firefox, Safari etc,this is where javascript runs.
// There can also be other hosts such as the NoJS web server,

// Scope in JS
/******************* */
// What exactly is Scope?
//* Scope refers to the area, space, or region where an item (such as a function or variable) is visible and accessible to other code.

// There are 3types of scope:
// 1. Global Scope
// 2. Block Scope
// 3. Function Scope

// Global Scope: Globally scoped variables can be accessed inside a block or function.
// Blocked Scope: variables declared inside a pair of curly braces {} cannot be accessed from outside the block.
// Function Scope: variables declared inside a function cannot be accessed from outside the function. 

  // Nested Function Scope
  let a = 10     // Global Scope
  function outer() {
    let b = 20;  // Function Scope
    // In javascript it is possible to declare a function inside another function because they are also first-class
    function inner(params) {  
      let c = 30;
      console.log(a,b,c);
    }
    inner();
  }
  outer();

  //* When inner() function gets invoked, the computer will not go straight to the global scope to get variable "a".
  //* Instead it will go sequentially through the scope chain.

/***  Scope Chain ***/
// A scope chain refers to the unique spaces that exist from the scope where a variable got called to the global scope.
// Existing sequentially to form chain, that are linked(chained) from bottom to top
// the scope chain that exists from the variable’s call to the global scope is:
  // inner() scope ----> outer() scope ----> global scope
  // There are 3 spaces or region from "a"'s invocation scope to it's lexical scope
  
  // Scope Chain Working
  /********************** */
  //* JavaScript's scope chain determines the hierarchy of places the computer must go through — one after the other — to find the lexical scope (origin) of the specific variable that got called.
  // the sequential steps the computer must take to locate "a"'s lexical scope:
  // 1. Firstly, the computer will check if "a" got defined locally within the inner() function. But it will find no "a" definition there, so it moves up to the next scope to continue its quest.
  // 2. Secondly, the computer will search for "a"'s definition in outer() (the next space in the scope chain). Still, it doesn't find it there, so it climbs up the ladder to the next scope.
  // 3. Finally, the computer goes to the global scope.Fortunately, it finds "a"'s definition there! Therefore, it gets its content ("10") and returns it for printing.
  
  //?Note: An inner (child) scope has access to its parent (outer) scope, but an outer scope does not have access to its child scope.
  
  //The above was an example of Lexical scope which describes how variable names are resolved when functions are nested.
  // When we have nested function JS variable lookup starts with the innermost function where we trying to access the variable and moves outwards until it reaches the global scope. 
  // Nested functions have access to variables declared in their own scope as well as the variables declared in the outer scope(function + global)

  /**
  Lexical Scope
  /**************/

  //* Lexical: Lexical refers to the definition of things.Anything related to creation of words, expressions or variables
  //* Lexical Scope: Lexical scope is the definition area of an expression. In other words, an item's or variables lexical scope is the place in which the variable got created.
  //? Note: Lexical scope means definition space- not invocation space.
  
  //  Lexical scope is also called static scope.
  //  A JavaScript expression’s definition environment determines the code permitted to access it.
  //  In other words, only code within an item's lexical scope can access it.


  // Closure
/******************** */  

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
// In JavaScript, closures are created every time a function is created, at function creation time.
// A closure gives you access to an outer function's scope from an inner function.
function fullName(){
  let firstName = "Shubham"
  function lastname() {
    let lastName = 'Pandey'
    function displayName() {
      console.log(`${firstName} ${lastName}`);
    }
    displayName()
  }
  lastname()
}
fullName() // Shubham Pandey

// Moreover, when we return a function from another function, we effectively returning a combination of the function definition along with the function's scope.
// This would let the function definition have an associated persistent memory which could hold on to live data between executions.
// That combination of the function and its scope chain is what is called a closure in Javascript.

function makeCounter() {
  let counter = 0;
  function increment() {
    counter++;
    console.log(counter);
  }
  return increment;
}
const increment = makeCounter();
increment(); // 1
increment(); // 2

// Closures are useful because they let you associate data (the lexical environment) with a function that operates on that data. 
// This has obvious parallels to object-oriented programming, where objects allow you to associate data (the object's properties) with one or more methods.