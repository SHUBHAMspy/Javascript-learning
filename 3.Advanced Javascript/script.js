/********************************************************************************************************************************************************************************************
                          Advanced JavaScript: Object Oriented Programming and Functional Programming Concepts
*********************************************************************************************************************************************************************************************/
//*Ways to create an Object
// 1.Object literal {}
// 2. Function Constructor()
// 3. Object.create()

//*Simple creation of OBJECT (Object Literal)

var john={

	name:'john',
	yearOfBirth:'1999',
	job: 'student'
};




// But if we wanna create multiple objects then there is a need to create a blueprint for all the objects so that it becomes easy to code and the code looks simple 
// and easy ..... There are many ways  to create objects  the used way is to  create its blueprint using a function constructor() . 
// A blueprint is called technically a constructor in javascript . In other languages its associated or referred with  classes.

// now i am  gonna create an object using function constructor which is actually a constructor which is defined as a function or vice versa .
// A constructor is a set of like rules or predefined properties that all the objects will be defined with as stated in the same order with the same names with help of a function,
//as function constructor therefore we can say it as a blueprint of all the objects. 

//Properties of Function Constructor:
// 1. It posses a general naming which is related to the other object names and
// 2. The first letter of a constructor or blueprint or function constructor is capital. 
// 3. And the function constructor is defined in a same way as function expression.
// this is a blueprint using function constructor means constructor in the form of function i.e we define a constructor with the help of a function.

//* Function Constructor
var Person=function(name,yearOfBirth,job){  //It is similar to parameterized constructor of normal laguages

	this.name =name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
	
};

// Using a function Constructor i.e using a function to create a constructor(or class normally) you are doing 2 things at the same time
// 1. You are creating a constructor(i.e class)
// 2. And at the same time you are defining a constructor(which normally is a function with the same name as the class in oops to assign the values to the instances or objects) 
//    So you don't need to define the constructor externally(here constructor means function with same name as the class and in JS constructor(function constructor) is treated as a class).
//    And this is all able to happen because of the JavaScript syntax to create a class

//* Inheritance in JavaScript
/**************************** */
// PROTOTYPE

// Prototype is a property that every function you create in JavaScript has that points to an object.
// Prototype allows us to share methods across all instances of a function.
Person.prototype.calculateage= function(yearOfBirth){			
		console.log(2019-  this.yearOfBirth);
	}

Person.prototype.lastName='Pandey';	

var Shubham= new Person('Shubham',1999,'coder');
Shubham.calculateage();

var Saurabh= new Person('Saurabh',2002,'basketball');
Saurabh.calculateage();

var mike= new Person('mike',1956,'retired');
mike.calculateage();

console.log(Shubham.lastName);
console.log(Saurabh.lastName);
console.log(mike.lastName);




/******************
*OBJECT.CREATE
*/
// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.

// it is an object that we defined to be as the prototype
var personProto={                             //<---
	calculateage:function(){                      		//This can be seen as a merger of function 
		console.log(2019-this.yearOfBirth);       			//constructor and prototype presented as an object  
	}                                           //		|
};                                            //<---   
// 1st way
var Shubham=Object.create(personProto);
Shubham.name='Shubham';
Shubham.yearOfBirth=1999;
Shubham.job='musician';

// 2nd Way
var Saurabh=Object.create(personProto,{    //<----
	name:{value:'Saurabh'},                	//     | 
	yearOfBirth:{value:1999},              //    	This can be seen as a merger of the new keyword way  
	job:{value:'student'}                  //    	and constructor instantiation 
});                                      //     |
                                        //<----   
 

//Primitives vs Objects
/***************************** */
//* Primitives are passed by value whereas objects are passed by reference.


//PRIMITIVES
//* In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties. There are 7 primitive data types:
//1. string
//2. number
//3. bigint
//4. boolean
//5. undefined
//6. symbol
//7. null

// All primitives are immutable; that is, they cannot be altered. 
// It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned to a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered. 
// The language does not offer utilities to mutate primitive values.

// Primitives have no methods but still behave as if they do. 
// When properties are accessed on primitives, JavaScript auto-boxes the value into a wrapper object and accesses the property on that object instead. For example, "foo".includes("f") implicitly creates a String wrapper object and calls String.prototype.includes() on that object.
// This auto-boxing behavior is not observable in JavaScript code but is a good mental model of various behaviors — for example, why "mutating" primitives does not work (because str.foo = 1 is not assigning to the property foo of str itself, but to an ephemeral wrapper object).
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);


//Objects

var obj1 = {
	name:'john',
	job:'musician'
};

var obj2=obj1;
obj2.name='jane';
console.log(obj1);
console.log(obj2);

//FUNCTIONS
var age = 20;  		// Primitive
var obj = {				// Object
	name:'Shubham',
	job:'student'
};

function change(a,b){   // for primitives another copy is created  and updated
	a=19;
	b.job='musician';   // but in case of objects the same reference is passed so any change done through the reference will be resembled on the actual object
}

change(age,obj);
console.log(age);
console.log(obj.job);




















