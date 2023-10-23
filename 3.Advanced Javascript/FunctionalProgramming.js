
/**************************************
  Functional Programming Concepts
*************************************/
/*
A function is a process which takes some input, called arguments, and produces some output called a return value. Functions may serve the following purposes:

1.Mapping: Produce some output based on given inputs. A function maps input values to output values.

2.Procedures: A function may be called to perform a sequence of steps. The sequence is known as a procedure, and programming in this style is known as procedural programming.

3.I/O: Some functions exist to communicate with other parts of the system, such as the screen, storage, system logs, or network.

Functional programming is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects. 
Functional programming is declarative rather than imperative, and application state flows through pure functions.
Contrast with object oriented programming, where application state is usually shared and colocated with methods in objects.
Functional programming is a programming paradigm, meaning that it is a way of thinking about software construction based on some fundamental, defining principles (listed above). 
Other examples of programming paradigms include object oriented programming and procedural programming.
Functional code tends to be more concise, more predictable, and easier to test than imperative or object oriented code

Functional programming is a declarative paradigm, meaning that the program logic is expressed without explicitly describing the flow control.

Imperative programs:
Imperative programs spend lines of code describing the specific steps used to achieve the desired results — the flow control: How to do things.
Imperative code frequently utilizes statements. A statement is a piece of code which performs some action. Examples of commonly used statements include for, if, switch, throw, etc…

Declarative programs:
Declarative programs abstract the flow control process, and instead spend lines of code describing the data flow: What to do. The how gets abstracted away.
This declarative mapping abstracts the flow control away using the functional Array.prototype.map() utility, which allows you to more clearly express the flow of data
Declarative code relies more on expressions. An expression is a piece of code which evaluates to some value. 
Expressions are usually some combination of function calls, values, and operators which are evaluated to produce the resulting value.

These are all examples of expressions:
2 * 2
doubleMap([2, 3, 4])
Math.max(4, 3, 2)
Usually in code, you’ll see expressions being assigned to an identifier, returned from functions, or passed into a function. 
Before being assigned, returned, or passed, the expression is first evaluated, and the resulting value is used.

Functional programming favors:
1. Pure functions instead of shared state & side effects
2. Immutability over mutable data
3. Function composition over imperative flow control
4. Lots of generic, reusable utilities that use higher order functions to act on many data types instead of methods that only operate on their colocated data
5. Declarative rather than imperative code (what to do, rather than how to do it)
6. Expressions over statements
7. Containers & higher order functions over ad-hoc polymorphism
 
 In order to know what functional programming  means, you have to understand the following core concepts 
 1.  Pure functions
 2. Function composition
 3. Avoid shared state
 4. Avoid mutating state
 5. Avoid side effects

 1. Pure Functions
 A pure function is a function which:
 1.Given the same inputs, always returns the same output, and
 2.Has no side-effects

Pure functions are all about mapping. Functions map input arguments to return values, meaning that for each set of inputs, there exists an output. 
A function will take the inputs and return the corresponding output. 
Pure functions have lots of properties that are important in functional programming, including referential transparency (you can replace a function call with its resulting value without changing the meaning of the program)

2. Function Composition
Function composition is the process of combining two or more  simple functions in order to produce more complicated functions. Like the usual composition of functions in mathematics 
For example, the composition f . g (the dot means “composed with”) is equivalent to f(g(x)) in JavaScript.
Understanding function composition is an important step towards understanding how software is constructed using the functional programming.
The result of each function is passed as the argument of the next, and the result of the last one is the result of the whole.
Function composition translates to combining pure functions in curried form without side effects const compose = f => g => x => f(g(x)).
Curried functions only accept a single argument (as our compose function). Function composition only works with curried functions, because a function only returns a single value.
Function composing can be very efficient when we have to perform 2 functions or operations on a same value.

3.Shared State
Shared state is any variable, object, or memory space that exists in a shared scope, or as the property of an object being passed between scopes.
 A shared scope can include global scope or closure scopes. Often, in object oriented programming, objects are shared between scopes by adding properties to other objects.
For example, a computer game might have a master game object, with characters and game items stored as properties owned by that object.
Functional programming avoids shared state — instead relying on immutable data structures and pure calculations to derive new data from existing data.

The problem with shared state is that in order to understand the effects of a function, 
you have to know the entire history of every shared variable that the function uses or affects.
Another common problem associated with shared state is that changing the order in which functions are called can cause a cascade of failures because functions which act on shared state are timing dependent

When you avoid shared state, the timing and order of function calls don’t change the result of calling the function. 
With pure functions, given the same input, you’ll always get the same output. This makes function calls completely independent of other function calls.

Of course, if you change the order of the composition, the output will change. Order of operations still matters. 
f(g(x)) is not always equal to g(f(x)), but what doesn’t matter anymore is what happens to variables outside the function — and that’s a big deal.
Remove function call timing dependency, and you eliminate an entire class of potential bugs.

4.Immutability
An immutable object is an object that can’t be modified after it’s created. Conversely, a mutable object is any object which can be modified after it’s created.
Immutability is a central concept of functional programming because without it, the data flow in your program is lossy. 
State history is abandoned, and strange bugs can creep into your software.

In many functional programming languages, there are special immutable data structures called trie data structures which are effectively deep frozen — meaning that no property can change
Tries use structural sharing to share reference memory locations for all the parts of the object which are unchanged after an object has been copied by an operator, 
which uses less memory, and enables significant performance improvements for some kinds of operations.

5.Side Effects
A side effect is any application state change that is observable outside the called function other than its return value. Side effects include:
Modifying any external variable or object property (e.g., a global variable, or a variable in the parent function scope chain)
-Logging to the console
-Writing to the screen
-Writing to a file
-Writing to the network
-Triggering any external process
-Calling any other functions with side-effects

Side effects are mostly avoided in functional programming, which makes the effects of a program much easier to understand, and much easier to test.
*/

/***********************
First Class Functions
-----------------------------------
First class functions are functions that are treated like an object (or are assignable to a variable).

First class functions:

Values in a language that are handled uniformly throughout are called "first class". They may be stored in data structures, passed as arguments,returned as values or used in control structures.
Languages which support values with function types, and treat them the same as non-function values, can be said to have "first class functions".
When we say functions are “first class”, we mean they are just like everything else.
We can treat functions like any other data type and there is nothing particularly special about them — they may be stored in arrays, passed around as function parameters, assigned to variables, etc.

Higher order functions:

One of the consequences of having first class functions is that you should be able to pass a function as an argument to another function.
The latter function is now "higher order".
It is a function that takes a function as an argument.

NOTE: that a language with first-class functions automatically enables the expression of higher-order functions (because you can pass functions as parameters like any other value).
      the presence of first-class functions (as a language feature) implies the presence of higher-order functions, but not the other way round.
On the other hand, you can imagine languages that support higher-order functions,
but do not make functions first-class (and where parameters that are functions are treated specially, and different from "ordinary" value parameters).

Benefits of HOF:
1.Encapsulating Behavior
2.Cleaner Code

1.we could  simply extracted the re-usable logic into a function and then passed that function as a parameter to any other function that would benefit from using this encapsulated behavior.
2.

Functional programming tends to reuse a common set of functional utilities to process data. 
Object oriented programming tends to colocate methods and data in objects. 
Those colocated methods can only operate on the type of data they were designed to operate on, and often only the data contained in that specific object instance.
In functional programming, any type of data is fair game. The same map() utility can map over objects, strings, numbers, or any other data type because it takes a function as an argument which appropriately handles the given data type. 
FP pulls off its generic utility trickery using higher order functions

Higher order functions are often used to:
1. Abstract or isolate actions, effects, or async flow control using callback functions, promises, monads, etc…
2. Create utilities which can act on a wide variety of data types
3. Partially apply a function to its arguments or create a curried function for the purpose of reuse or function composition
4. Take a list of functions and return some composition of those input functions
*/


//1.Passing Functions as Arguments

 // Call Back function

//A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// example is a synchronous callback, as it is executed immediately.
// In general, a telephone call made to return one that someone has received.
//In computing, a callback is a piece of executable code that is passed as an argument to other code. When the function is done with its work (or when some event occurred), it calls your callback (it calls you back - hence the name) function.

// A callback function is like a Servant who "calls back" to his Master when he has completed a task.
// I also think Callbacks are meant to address the originating invocation, in a kind of "hey! that thing you asked for? I've done it - just thought I would let you know - back over to you".

var yearOfBirth=[1999,2002,1979,1970];

function arrayCalc(arr,fn){

	var arrRes=[];
	for (var i =0;i<arr.length;i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function maxHeartRate(el){
   if(el>=18 && el<81){
    
    return Math.round( 206.9-(0.67*el));

   }
   else{
   	return -1;
   }

}

function isFull(el){
	return el>=18;
}

function calculateAge(el){
	return 2019-el;

}

var ages= arrayCalc(yearOfBirth,calculateAge);
var fullAges=arrayCalc(ages,isFull);
var rates=arrayCalc(ages,maxHeartRate);
console.log(rates);
console.log(ages);
console.log(fullAges);


/////////////////////
// Functions returning a functions

function interviewQuestions(job){
	if (job==='musician') {
		return function(name){
		console.log( name + ', What type of instruments do you know ? ');
	}
	}

	else if(job==='teacher'){
		return function(name){
			console.log(name +' , What do you teach??');
		}
	}

	else{
		return function(name){
			console.log(name +' , What do you do??');
		}
	}
}

var musicianQuestions=interviewQuestions('musician');
musicianQuestions('Shubham');
var teacherQuestions=interviewQuestions('teacher');
teacherQuestions('Shubham');
var teacherQuestions=interviewQuestions('designer');
teacherQuestions('Shubham');

// You can simply call the function without storing them itno some variable
interviewQuestions('musician')('Shubham');



/*********************** */
// IIFE


//* Normal Function
function game(){
     var score=Math.random()*10;
     console.log(score>=5);

}

game();

//* IIFE

//It's just an anonymous function that is executed right after it's created,i.e it is been called or invoked right after it's creation
// We can only call IIFE once as it is not intended to be a reusable piece of code
// The whole intention and motivation behind IIFE is that we want a new scope that will be hidden from outside scope so were we can safely put variables and hide them
// to obtain data privacy for some data.
// it is the heart and soul of the modern day Module pattern
// Consider the part within the first pair of parentheses:
// (function(){})();....it is a regular function expression.
// This resolves two things for the intended use case that:
 // 1. since () creates the function as an expression otherwise it will be a declaration without a name and that would result in error
 // 2. Also we haven't used the var variable to assign it to variable for the purpose of calling it later which will completely violates the purpose IIFEs which is meant to be private.   

(function(){
	 var score=Math.random()*10;
     console.log(score>=5);
})();

(function(goodLuck){
	 var score=Math.random()*10;
     console.log(score>=5-goodLuck);
})(10);


// ES6
//In order to create Private variables or hidden variables that are not accessible through outer scopes,You can use block scoping in ES6
//which is created by let and const keywords

{
	let firstName = "Roy";
	const bornIn = "2000";
}

console.log(firstName);


/****************
  Currying
*****************/
/*
Currying is a process in functional programming in which we can transform a function with multiple arguments into a sequence of nesting functions. It returns a new function that expects the next argument inline.
It keeps returning a new function (that expects the current argument, like we said earlier) until all the arguments are exhausted. 
The arguments are kept "alive"(via closure) and all are used in execution when the final function in the currying chain is returned and executed.
So, currying transforms a function with multiple arguments into a sequence/series of functions each taking a single argument.

A curried function is a function that takes multiple arguments one at a time. 
Given a function with 3 parameters, the curried version will take one argument and return a function that takes the next argument, which returns a function that takes the third argument. 
The last function returns the result of applying the function to all of its arguments.

To use it, we must apply both functions, using the function application syntax. In JavaScript, the parentheses () after the function reference triggers function invocation. When a function returns another function,
the returned function can be immediately invoked by adding an extra set of parentheses.
Currying creates nesting functions according to the number of the arguments of the function. Each function receives an argument. 
If there is no argument there is no currying.
All curried functions are a form of higher-order function which allows you to create specialized versions of the original function for the specific use case at hand.
In other words, you’re extending that function like you would with a class.
You can think of currying as the inheritance of functional programming.

What is a partial application?
A partial application is a function which has been applied to some, but not yet all of its arguments. 
In other words, it’s a function which has some arguments fixed inside its closure scope. 
A function with some of its parameters fixed is said to be partially applied.
the number of nested functions a curried function has depends on the number of arguments it receives. Yes, that makes it a curry.

Currying and Partial Application are related, but they are of different concepts.

Partial application transforms a function into another function with smaller arity.
Partial applications can take as many or as few arguments a time as desired. Curried functions on the other hand always return a unary function: a function which takes one argument.
All curried functions return partial applications, but not all partial applications are the result of curried functions.
The unary requirement for curried functions is an important feature.

Application: The process of applying a function to its arguments in order to produce a return value.
Partial Application: The process of applying a function to some of its arguments. 
The partially applied function gets returned for later use. Partial application fixes (partially applies the function to) one or more arguments inside the returned function, and the returned function takes the remaining parameters as arguments in order to complete the function application.
Partial application takes advantage of closure scope in order to fix parameters

A curried function is the concept that allows us to partially apply a function
In math calling a function is called “Applying a function” 
so partially calling function with fewer params called “Partial Application” and it is a common concept in functional world
Though currying and partial function gave the same result, they are two different entities.
Like we said earlier, currying and partial application are related, but not actually the same by design. 
The common thing between them is that they depend on closure to work.

Curried functions are particularly useful in the context of function composition.
currying comes in handy when you want to:
1. Write little code modules that can be reused and configured with ease
2. Avoid frequently calling a function with the same argument.

Pointfree Style:
Pointfree style means functions that never mention the data upon which they operate. First class functions, currying, and composition all play well together to create this style.
Point-free style is a style of programming where function definitions do not make reference to the function’s arguments.
we can’t use the function keyword, and we can't use an arrow function (=>) because those require any formal parameters to be declared (which would reference its arguments). 
So what we'll need to do instead is call a function that returns a function.

//* Closure Property
An inner function has always access to the variables and parameters of its outer function,
even after the outer function has returned.
Closure makes currying possible in JavaScript. 
It’s ability to retain the state of functions already executed, gives us the ability to create factory 🏭 functions — functions that can add a specific value to their argument.



function retirement(retirementAge){
	var a= ' years until retirement.'
	return function(yearOfBirth){
		var age=2019- yearOfBirth;
		console.log((retirementAge-age) + a);

	}
}

var retirementUS=retirement(66);
retirementUS(1999);

var retirementINDIA=retirement(60);
retirementINDIA(1999);

var retirementICELAND=retirement(67);
retirementICELAND(1999);

//retirement(65)(1999);
*/

/***************************/
//*BIND CALL & APPLY methods

// Method Borrowing
//Function borrowing allows us to use the methods of one object on a different object without having to make a copy of that method and maintain it in two separate places. 
//It is accomplished through the use of .call(), .apply(), or .bind(), all of which exist to explicitly set this on the method we are borrowing.
//The central benefit of function borrowing is that it allows you to forego inheritance. There’s no reason for you to force a class to inherit from another if you’re only doing so in order to grant instances of the child class access to a single method.
// And as I mentioned above, function borrowing keeps you from having to write the same function twice and maintain it in two places, which reduces the risk of bugs.

// Using bind ,call and apply we explicitly set this variable on the object for which we want to borrow.

var john={
	name:'john',
	age:20,
	job:'student',
	presentation:function(style,timeOfDay){
		if (style==='formal') {
			console.log('Good '+ timeOfDay+ ' Ladies and gentlemen. I\'m ' + this.name + ' I\'m a ' + this.job + ' I\'m '+ this.age + ' years old.');
		}
		else if(style==='friendly') {
			console.log('Hey!! wassup Ladies and gentlemen.'+ ' I\'m ' + this.name + ' I\'m a ' + this.job + ' I\'m '+ this.age + ' years old.' +'Have a nice '+ timeOfDay + ' .');

		}
	}
};


john.presentation('formal','morning');

var emily={
	name:'emily',
	age:25,
	job:'musician'
};
//?Call and apply are pretty interchangeable. Just decide whether it’s easier to send in an array or a comma separated list of arguments.
// Call
// Call invokes the function and allows you to pass in arguments one by one.
john.presentation.call(emily,'friendly','night');

// Apply
// Apply invokes the function and allows you to pass in arguments as an array.
john.presentation.apply(emily,['friendly','afternoon']);

// Bind
// Bind is great for a lot of things. We can use it to curry functions,we can also use it for events like onClick where we don’t know when they’ll be fired but we know what context we want them to have.
// Bind helps us to create functions with preset arguments so that we don't have to set them again and again
// A bind function is basically which binds the context of something and then stores it into a variable for execution at a later stage.
// Bind will be used if you want your execution context to come later in the picture or you also want to use it afterwards.


var car = { 
  registrationNumber: "007",
  brand: "Mercedes",

  displayDetails: function(ownerName){
    console.log(ownerName + ' this is your car ' + '' + this.registrationNumber + " " + this.brand);
  }
}
car.displayDetails('Nishant'); // Nishant this is your car 007 Mercedes

//Let's say i want use this method in some other variable
var car1 = car.displayDetails('Nishant');
car1(); // undefined

//To use the reference of car in some other variable you should use
var car1 = car.displayDetails.bind(car, 'Nishant');
car1(); // Nishant this is your car 007 Mercedes

var johnFriendly=john.presentation.bind(john,'friendly');
johnFriendly('morning');


var emilyFormal=john.presentation.bind(emily,'formal');
emilyFormal('morning');



var yearOfBirth=[1999,2002,1979,1970];

function arrayCalc(arr,fn){

	var arrRes=[];
	for (var i =0;i<arr.length;i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}


function calculateAge(el){
	return 2019-el;

}


function isFull(limit,el){
	return el>=limit;
}


var ages=arrayCalc(yearOfBirth,calculateAge);

var isFullJapan=arrayCalc(ages,isFull.bind(this,20));
console.log(ages);
console.log(isFullJapan);



////////////////////
//CODING challenge 7
/*
 (function(){
var Question=function(ques,ansArray,correctArray){
this.questions=ques;
this.answers=ansArray;
this.correctanswer=correctArray;

}

Question.prototype.randomquestion=function(){
	console.log( this.questions);
	for (var i = 0; i < this.answers.length; i++) {
		console.log( i + ': ' +this.answers[i]);

	 }
}


Question.prototype.correct=function(useranswer,callback){
      var yourScore=0;
	if (useranswer === this.correctanswer) {
		console.log('Your answer is correct');
		yourScore =callback(true);

	}
	else{
		console.log('Wrong answer');
		yourScore=callback(false);
	}

	this.displayScore(yourScore);
}


Question.prototype.displayScore=function(Sc){
	console.log('yourScore is : '+ Sc);

    console.log('--------------------------');

} 



var question1= new Question('What is the name of the instructor ? ',
                               ['mike','john','jonas'],2);

var question2= new Question('Is javascript the coolest programming language ? ',
                               ['YES','NO',],0);

var question3= new Question('What is my age ? ',
                               ['19','20','25','18'],1);

var questionArray=[question1,question2,question3];

function score(){
	var yourScore=0;
	return function(correct){
		if (correct) {
			yourScore++;
		}
		return yourScore;

	}
}

var keepScore=score();


function next(){

	
var q=Math.floor(Math.random()*3);


questionArray[q].randomquestion();

var answer=prompt('what is your choice ? ');


if (answer!=='exit') {
	
	questionArray[q].correct(parseInt(answer),keepScore);

	next();
}


}


next();

})();
*/


//* Arrow Function 'lexical' this
/********************************* */

//The handling of this is different in arrow functions compared to regular functions.
//In short, with arrow functions there are no binding of this.
//In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.
//With arrow functions the this keyword always represents the object that defined the arrow function.
// Arrow functions shold not be used as methods inside arrow functions.
// the Gotcha around arrow functions is that the "this" refers to surrounding environment or the lexical environment where the function expression is.

// ES5




/********************************
 Destructuring
*/

// Destructuring gives us a very convinient way to extract data from a data stucture like arrays or objects etc.
//The two most used data structures in JavaScript are Object and Array.
// Objects allow us to create a single entity that stores data items by key.
// Arrays allow us to gather data items into an ordered collection.
// But when we pass those to a function, it may need not an object/array as a whole, but rather individual pieces.

// Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient. 
// Destructuring also works great with complex functions that have a lot of parameters, default values, and so on.
//Destructuring” does not mean “destructive”.
// It’s called “destructuring assignment,” because it “destructurizes” by copying items into variables. But the array itself is not modified.

// ES5
var data = ['Shubham', 21];

// so if you want to store each element in separate variables to access them later or to have for them their own separate, then you would do like this
var name5 = data[0];
var age5 = data[1];

// ES6
// Destructuring destructs the data structure
// Arrays
let [name6,age6] = ['zap',19];
console.log(name6);
console.log(age6);

// Objects
const dataObject = {
	firstName: 'Shubham',
	lastName: 'Zap'
};

const{firstName,lastName} = dataObject;
console.log(firstName);
console.log(lastName);

// If we want to assign a property to a variable with another name,then we can set it using a colon:
const{firstName : n,lastName: l} = dataObject;
console.log(n);
console.log(l);

// Earlier when we require to return multiple values individually and differently from a function then we simply return them as properties of an object. 
// But now with destructuring it got little easier to return individual values as and however we want.

function calAgeUntillRetirement(year){
	let age = new Date().getFullYear() - year;
	return [age, 60 - age];
}

let[age,yearinreteirement] = calAgeUntillRetirement(1999);
console.log(age);
console.log(yearinreteirement);


// React is a JS library for building UI with component based architecture. Components are the building blocks of react. A component is a class or a function that takes in input as props and returns  
// an element tree. If it is a function the output is the return value of the function, if it is a class the output is the return value of the render method. 
// Since, components are functions and functions are present everywhere and used during the entire course of web application development they are reusable and independent pieces of code and components provide exactly the same nature and can be used in isolation or in composition with other components just like function composition  to form the complete UI for different screens.
// A component can be a function or a class instance.

// Functional Component:
// 1.If it is a function then output is the return value of that function.
// 2. There is no render method.
// 3. Major difference is functional components are stateless, they just take props and render the data
// 4. Normal lifecycle methods (componentDidMount or componentDidUpdate) can't be used in function components.
// 5. Functional components are easier to write and test because they are functions.

// Class Component:
// 1. In class component, the output is the return value of the render() method.
// 2. They contain state and associated logic together therefore they are called stateful.
// 3. They update state using lifecycle methods like componentDidUpdate or componentDidMount.
// 4.  Although class components are just JS ES6 classes but they can be lengthy to write and harder to test at times.
// 5. Render method returns the UI

// We can you use any at times depends on our requirements, like you have to use questions like 
// do my component to store some state then you can implement it with class components or otherwise you can did too with functional components with help of usestate hooks.
// Also we have to keep in mind that function components are easier to implement so code complexity also matters.

// 1.Memoization is a technique or methodology that is used to cache the results of expensive function to improve the performance of the function execution.
// 2. Memoization can be done on process that are repetitive and heavy on computing.

// 3.Time and memory are two important resources in computing. To save on time and memory caching is done and an already cached value is returned.
// 4. A cache is simply a temporary storage which is to store data for utilizing afterwards.

/* Debouncing and Throttling
********************************/
// Throttling and debouncing are two ways to optimize event handling.
// Event is an action that occurs in the system. In front-end development that system is usually a browser.
// For example, when you resize a browser window the "resize" event is fired, and when you click on a button the "click" event is. We are interested in events to attach our own logic to them. That logic is represented as a function that is called a handler function (because it handles the event). Such handler functions may handle a UI element update on resize, display a modal window upon a button click, or execute an arbitrary logic in response to any event.
//In JavaScript you can react to events using event listeners. Event listener is a function that listens to the given event on a DOM element and executes a handler function whenever that event occurs.

//? Note: By default, event handler function executes with 1-1 ratio to the event call.

//* Debouncing
/* ****************/
// The term debounce comes from electronics. When you’re pressing a button, let’s say on your TV remote, 
// the signal travels to the microchip of the remote so quickly that before you manage to release the button, it bounces, and the microchip registers your “click” multiple times.
// To mitigate this, once a signal from the button is received, the microchip stops processing signals from the button for a few microseconds while it’s physically impossible for you to press it again.
// In JavaScript, the use case is similar. We want to trigger a function, but only once per use case.

// Debounce:
// 1. Debouncing bunches a series of sequential calls to a function into a single call to that function.It ensures that only one function call is made for an event that is fired multiple times.
// 2. A debounced function is called after N amount of time has passed since its last call.It reacts to a seemingly resolved state and implies a delay between the event and the handler function call.
// 3. Use debounce to eventually react to a frequent event.
// 4. Debounce is useful when we don't want an intermediate state and only want to respond to the end state of an event.
 
// Throttling:
// 1. Throttling delays executing a function.It will reduce the no of calls to a function for an event that fires multiple times.
// 2. Throttled function is called once per n amount of time any additional functional calls within the specified time interval is ignored.
// 3. We can use throttle to consistently react to a frequent event .
// 4. An intermediate state of event is acceptable in throttling because it is found to a time frame to ensure consistent execution within a time frame.






// State:
// 1. State actually refers to the present condition of a system or entity . State and data are confused 
//     as one and the same thing or that state translates to data. Though data governs the state or 
//     what state will be. But it is not equal to state. In computer science , state is defined by 
//      input(here referenced as data), output and the transition.




// Does React perform a deep compare or a shallow compare in render method?




// The roots of this question lies in knowing the difference between Pure Component and Regular Component.

// Pure Component: A component is considered pure if it renders the same output for the same props and state. It is similar to the concept of pure functions in functional programming.
// Pure functions meet two conditions :
// 1. Its return value is only determined  by its input values.
// 2. For the same input it always returns the same output.
// For this type of component , React provides the PureComponent base class. Class components that extend the React.PureComponent class are treated as pure components.

// Pure Components have some performance improvements and render optimizations since React implements the shouldComponentUpdate() method for them with a shallow comparison for props and state.

// Pure component is similar to Regular components but the only difference between them is that Regular component doesn't implement shouldComponentUpdate() but pure component implements it with a shallow prop and state comparisons.
// shouldComponentUpdate() only shallowly compares the objects. If these contain complex data structures it may produce false for deeper differences.
// Shallow comparisons works by checking if two values are equal in case of primitives types like string , numbers and in case of objects it will just check the reference not the values inside that object.  

//* Memory management in JavaScript
// JavaScript is one of the so called garbage collected languages. Garbage collected languages help developers manage memory by periodically checking which previously allocated pieces of memory can still be "reached" from other parts of the application. In other words, garbage collected languages reduce the problem of managing memory from "what memory is still required?" to "what memory can still be reached from other parts of the application?". The difference is subtle, but important: while only the developer knows whether a piece of allocated memory will be required in the future, unreachable memory can be algorithmically determined and marked for return to the OS.
// Non-garbage-collected languages usually employ other techniques to manage memory: explicit management, where the developer explicitly tells the compiler when a piece of memory is not required; and reference counting, in which a use count is associated with every block of memory (when the count reaches zero it is returned to the OS). These techniques come with their own trade-offs (and potential causes for leaks).

// Memory Leaks
// A memory leak in JavaScript is defined as an increase in application memory consumption over time because allocated objects are not released.
// i.e type of resource leak that occurs when a computer program incorrectly manages memory allocations in a way that memory that is no longer needed is not released.
// Leaked Memory can be defined as memory that is not required by an application anymore that for some reason is not returned to the operating system or the pool of free memory. 
// ? The main cause for leaks in garbage collected languages are unwanted references. To understand what unwanted references are, first we need to understand how a garbage collector determines whether a piece of memory can be reached or not.
// A memory leak may also happen when an object is stored in memory but cannot be accessed by the running code.
// Simply put, a memory leak is said to occur whenever inaccessible or unreferenced data exists in memory.

// Mark-and-sweep
// Most garbage collectors use an algorithm known as mark-and-sweep. The algorithm consists of the following steps:

// The garbage collector builds a list of "roots". Roots usually are global variables to which a reference is kept in code. In JavaScript, the "window" object is an example of a global variable that can act as a root. The window object is always present, so the garbage collector can consider it and all of its children to be always present (i.e. not garbage).
// All roots are inspected and marked as active (i.e. not garbage). All children are inspected recursively as well. Everything that can be reached from a root is not considered garbage.
// All pieces of memory not marked as active can now be considered garbage. The collector can now free that memory and return it to the OS.
// Modern garbage collectors improve on this algorithm in different ways, but the essence is the same: reachable pieces of memory are marked as such and the rest is considered garbage.

// Unwanted references are references to pieces of memory that the developer knows he or she won't be needing anymore but that for some reason are kept inside the tree of an active root. In the context of JavaScript, unwanted references are variables kept somewhere in the code that will not be used anymore and point to a piece of memory that could otherwise be freed.




// Observer Pattern provides a consistent way to define one-to-one dependency between two or more objects so that all the changes made to a certain object can be relayed to all the dependent objects as quickly and simply as possible. 
// For this purpose it utilizes an object or objects called observer which registers or subscribes with another object called subject which informs the registered observers as soon as it has changed.
 
// The observer design pattern works with two types of actors 
// 1. Subject: the  object whose status is to be observed over long period of time 
// 2. Observing objects: That subscribed or wanted to be informed about any changes to the subject.

// Purpose:
// Without using the observer pattern, the observing objects would have to ask the subject to provide status updates at regular intervals, each individual request would be associated with corresponding computing time as well as necessary hardware resources.
// The fundamental idea behind observer pattern is to centralize the task of informing. Subject maintains a list which the observers can subscribe/ register to.  In the event of a change, the subject informs the registered observers one after the other .

// Application:
// 1.It can be used to implementing distributed event handling systems  in event driven software. 
// 2. It can be used in applications based on components in which many components are dependent on status of one component  
// 3. A mail delivery system which event based can notify subscribed users about a specific mail etc.






// Since, everything in JS is object therefore a function is also an object.
//But in javascript arguments are passed by value but in case of objects this value is object reference and because of this it makes us believe that they are passed by reference. Therefore , function has location of object and therefore any changes made to the object will also reflect to the original object outside function body.

// A small example:
// function memoizedFibonacci(n,cache) {
// 	cache = cache || [1,1]
// 	if(cache[n]) return cache[n]
// 	return cache[n] = memoizedFibonacci(n-1,cache) + memoizedFibonacci(n-2,cache)
// }
