/***************************
 * variables used in javascript
*/
/*
// ES5 Syntax
// var is function scoped
var firstName ='Shubham';
console .log(firstName);

var lastName ='Pandey';
console.log(lastName);

var age=20;
console.log(age);

var fullAge=true;
console.log(fullAge);

var job="student";
console.log(job);

var sex;
// sex of a male
sex='male';
console.log(sex);

// ES6 Syntax

//const is for constants whose value should not be changed
// const and let are block scoped
const firstName6 ='Shubham';
console .log(firstName);

const lastName6 ='Pandey';
console.log(lastName);

// let is like normal variables whose value can be changed
let age6=20;
console.log(age);

const fullAge6=true;
console.log(fullAge);

let job6="student";
console.log(job);

const sex6 ='male';
console.log(sex);
*/

/****************
 *Variable mutation and type coercion
 */
 /*
 var firstName='Shubham';
 var age= 20;
 console.log(firstName + " "+ age );

// Type coercion
 var job,ismarried;
 job='musician';
 ismarried=false;

 console.log(firstName +' is of '+ age + ' .He wanna be a ' +job + ' is he married '+ismarried);

// variable mutation 
 age=' twenty ';
 job=' innovator';

 alert(firstName +' is of '+ age + ' .He wanna be a ' + job+ ' is he married '+ismarried);

 var lastName = prompt('what is his  lastName ?');
 console.log( firstName +" "+ lastName);

*/

/*****************
 *Basic operaters
 */
 /*
 var now, spyyear,sapyear;
 now=2019;
 agespy=20;
 agesap=17;
 // Maths operators

spyyear=now -20;
sapyear=now-17;

 console.log(spyyear);
 console.log(sapyear);

 console.log( now+17);
 console.log(now*17);
 console.log(now/17);

 // Logical operators
  var spyolder= agespy>agesap;
  console.log(spyolder);

  // typeof operator

  console.log( typeof spyolder);
  console.log(typeof agesap);
  console.log(typeof 'he is very hot');

  var x;
  console.log(typeof x);

*/

/**************************
*Operator precedence
*/
/*

var spyyear=1999;
var now =2019;
fullAge=18;

//Multiple operatrs
console.log(now-spyyear>=fullAge);

var agesap=17;
var agespy=20;

//Grouping 
var average=(agespy+agesap)/2;
console.log(average);

// Multiple Assingnments
var x,y;
x=y=(8*2)+4-6;
console.log(x,y);
x++;
y--;
console.log(x,y);

*/

/***********************
*Coding challenge
*/
/*
var massShubham,massSaurabh,heightShubham,heightSaurabh;
massSaurabh=53;
massShubham=55;
heightSaurabh=5.95;
heightShubham=5.7;

var bmiShubham=massShubham/(heightShubham*heightShubham);
var bmiSaurabh=massSaurabh/(heightSaurabh*heightSaurabh);
console.log(bmiShubham,bmiSaurabh);

var isbmi=bmiShubham>bmiSaurabh;
console.log( ' Is Shubham\'s BMI is higher than Saurabh\'s BMI ? ' + isbmi);

*/

/***************************
* If else statements
*/
/*
var firstName='Shubham';
var civilstatus='single';

if(civilstatus==='married')
{  console.log( firstName + ' Is married. ');

}
else{
	console.log( firstName+ ' will goona have a lambo. ');
}

var ismarried=false;

if(ismarried)
{  console.log( firstName + ' will goona have a lambo. ');

}

else{
	console.log( firstName+ ' Is married. ');
}

var massShubham, massSaurabh, heightShubham, heightSaurabh;
massSaurabh=53;
massShubham=55;
heightSaurabh=5.95;
heightShubham=5.7;

var bmiShubham=massShubham/(heightShubham*heightShubham);
var bmiSaurabh=massSaurabh/(heightSaurabh*heightSaurabh);
console.log(bmiShubham,bmiSaurabh);

if(bmiShubham>bmiSaurabh)
{
	console.log('Shubham\'s BMI is higher than Saurabh\'s BMI ');
}

else{
	console.log('Saurabh\'s BMI is higher than Shubham\'s BMI ')
}

*/

/********************************
*Boolean logic
*/
/*
var firstName='Shubham';
var age=20;
if (age<13) {
    console.log(firstName +' is a boy ');

}
else if(age>13 && age<20)
{
	console.log(firstName +' is a teenager ');

}
else if (age>=20 && age<25) {
	console.log(firstName +' is a young man ');

}
else{
	console.log(firstName +' is a  man ');
}
*/

/**************************
*ternary operators and switch statements
*/
/*
var firstName='Shubham';
var age=18;

// ternary operators
age>=18 ? console.log(firstName +' drinks beer '):console.log(firstName +' drinks juice ');

var drinks= age>=18 ? 'beer':'juice';
console.log(drinks);

// switch staetments
 var job='student';

 switch(job){
 	case 'student':
 	 console.log( firstName+'is a student.');
 	  break;
 	case 'musician':
 	 console.log(firstName +'is a musician .');
 	  break;
 	case 'trader':
 	 console.log(firstName+' is a trader .');
 	  break;
 	default:
 	 console.log( firstName+'is something else.');  
 }


var age=20;
switch(true){
case (age<13): 
    console.log(firstName +' is a boy ');
    break;
case (age>13 && age<20):
	console.log(firstName +' is a teenager ');
     break;  
case (age>=20 && age<25) :
	console.log(firstName +' is a young man ');
    break;

default:
	console.log(firstName +' is a  man ');
}
*/

/*****************************
*TRuthy and Falsy values and equality operators
*/
/*

// falsy values=undefined, '' , null, 0 ,NAN
var height;
height=23;

if(height||height===0){
	console.log('height is defined.');

}
else{
	console.log('height is undefined.');

}

//Equality operators
if (height=='23') {
	console.log(' The == operator does the type coercion . Height is defined');
}
else{
	console.log('height is undefined.');

}
*/

/**************************
*CODDING CHALLENGE 2
*/
/*
var firstName1='Shubham';
var score1, score2, score3;
score1=97;
score2=134;
score3=105;

averagespy=(score1+score2+score3)/3;

var firstName2='Saurabh';
score1=116;
score2=97;
score3=123;

averagesap=(score1+score2+score3)/3;

console.log(firstName1 +'\'s team average score is:' + averagespy);
console.log(firstName2 +'\'s team average score is:' + averagesap);

var firstName3='Saroj';
score1=97;
score2=134;
score3=105;

averagesaroj=(score1+score2+score3)/3;
console.log(firstName3 +'\'s team average score is' + averagesaroj);

if ( averagespy>averagesap && averagespy>averagesaroj) {
	console.log(firstName1+' is winner .');
}

else if (averagesap>averagespy && averagesap>averagesaroj) {
	console.log(firstName2+' is winner.');
}
else if(averagesaroj>averagespy && averagesaroj>averagesap){
    console.log(firstName3+' is winner.');
}
else  {
	console.log(' Nobody wins the match was draw!!!');
}
*/

/********************************
*FUNCTIONS
*/

/*
//ES5 Syntax
function calculateage(birthyear){
	return 2019-birthyear;
}

 var agespy=calculateage(1999);
 var agesap=calculateage(2001);
 console.log(agespy,agesap);

function ageuntilretirement(year,firstName){

  var age=calculateage(year);
  var retirement=65-age;
  if (retirement>0) {
  console.log( firstName + ' has '+ retirement +' years in retirement.');
}
else{
	console.log( firstName + ' has alredy retired. ');
}
}  

ageuntilretirement(1999,'Shubham');
ageuntilretirement(2002,'Saurabh');
ageuntilretirement(1970,'Papa');
ageuntilretirement(1948,'Baba');

function driversLicence5(passedTest) {
    
    if (passedTest) {
        console.log(firstName);  //it will be undefined as it is hoisted and we are accessing it before defining it.
        var firstName = 'Shubham';  // Here This firstname and yearofbirth are funtion scoped because of var
        var yearOfBirth = 1999;     // therefore can be accessed out of a certain block
    }
      
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicence5(true);

//ES6 Syntax
function calculateage6(birthyear){
	return 2019-birthyear;
}

 let agespy6=calculateage(1999);
 let agesap6=calculateage(2001);
 console.log(agespy6,agesap6);

function ageuntilretirement6(year,firstName){

  let age6=calculateage(year);
  const retirement6=65-age6;
  if (retirement6>0) {
  console.log( firstName + ' has '+ retirement6 +' years in retirement.');
}
else{
	console.log( firstName + ' has alredy retired. ');
}
}  

ageuntilretirement6(1999,'Shubham');
ageuntilretirement6(2002,'Saurabh');
ageuntilretirement6(1970,'Papa');
ageuntilretirement6(1948,'Baba');

function driversLicence6(passedTest) {
    
    //console.log(firstName); // But this will give error because it is hoisted & let and const don't allow to access it before dfining it. 
    let firstName;
    const yearOfBirth = 1990;
    
    if (passedTest) {
        firstName = 'Shubham';
    }
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicence6(true);
*/
/*
//ES6
////////////////////////////
//ARROW function(=>) concept

//An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.

// Before:
hello = function() {
  return "Hello World!";
}

// With Arrow Function:
hello = () => {
  return "Hello World!";
}

// 1.If you have only one parameter, you can skip the parentheses.
// It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword.Arrow Functions Return Value by Default or implicitly
const years6 = [1999,2002,1970,1989];

let ages6 = years6.map(el => 2020 - el);
console.log(ages6);

// 2.If you have more than one argument you can put them in parantheses
ages6 = years6.map((el,index) => `Age${index}:${2020 - el}`);  //<---This is String Literal
console.log(ages6);

// 3.If you have more than one line apart from the return statement then we have to include {}
// and also the return will not be implicit you have to include that too
ages6 = years6.map((el,index) => {
	const currentYear = new Date().getFullYear();  // you can the current year through this
	let age = currentYear - el;
	return`Age${index}:${age}`;  //<---This is String Literal
});
console.log(ages6);
*/
/*********************************
* Functions statements and expreesions
*/

/*
// function declarations  (are statements)
function whatdoyoudo( job,firstName){}

//Function expression
// All the things that give us immediate result are expressions
var whatdoyoudo=function(job,firstName){
	switch(job){
		case 'student':
 	   	return firstName+'is a student.';
 	  
 	    case 'musician':
 	    return firstName +'is a musician .';
 	  
 	    case 'trader':
 	    return firstName+' is a trader .';
 	  
 	    default:
 	    return firstName+' is something else.';  
    }

}

console.log(whatdoyoudo('student','Shubham'));
console.log(whatdoyoudo('model','Saurabh'));
*/

/*************************
* Strings
*/
/*
// ES5 Syntax
//  inorder simlply log into the console for the format we want we have to write big strings
function driversLicence5(passedTest) {
    
    if (passedTest) {
        console.log(firstName);  //it will be undefined as it is hoisted and we are accessing it before defining it.
        var firstName = 'Shubham';  // Here This firstname and yearofbirth are funtion scoped because of var
        var yearOfBirth = 1999;     // therefore can be accessed out of a certain block
    }
      
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicence5(true);

// ES6 Syntax

// String Literal Concept
// But here with help with of string literal we can write the whole big string which is fragmented and have to write again & again
// in just one single string
function driversLicence6(passedTest) {
    
    //console.log(firstName); // But this will give error because it is hoisted & let and const don't allow to access it before dfining it. 
    let firstName;
    const yearOfBirth = 1990;
    
    if (passedTest) {
        firstName = 'Shubham';
    }
      
    console.log(`${firstName}, born in ${yearOfBirth}, is now officially allowed to drive a car.`);
}
driversLicence6(true);

// Methods in Strings
const str = "Shubham Pandey";

//1.startsWith()
console.log(str.startsWith('j'));

//2.includes()
console.log(str.includes('bh'));

//3.endsWith()
console.log(str.endsWith('of'));

//3.repeat()
console.log(str.repeat(2));
*/

/*************************
*ARRAYS
*/
/*
//ES5
// Arrays are collection of variables(& variables can be of any type)
// Initialise  ARRAY
var names = ['Shubham','Saurabh','Saroj']; // 1st Way

var year = new Array(1999,2002,1979);      // 2nd Way   

console.log(names);
console.log(names.length);   // in JavaScript length is a property and not a method

//Mutate array data
names[names.length]='Papa';
console.log(names);

// dfferent data types
var Shubham=['Shubham','Pandey',1999,'student',false];

// Methods specific to array in javascript

// 1. push()
Shubham.push('blue');
console.log(Shubham);

// 2. unshift()
Shubham.unshift('Mr.');
console.log(Shubham);

// 3. pop()
Shubham.pop();
console.log(Shubham);

// 4. shift()
Shubham.shift();
console.log(Shubham);

// 5. indexOf()
console.log(Shubham.indexOf('student'));
console.log(Shubham.indexOf(2001));

var ismusician=Shubham.indexOf('musician') === -1 ? 'Shubham is not a musician.': ' he is.'
console.log(ismusician);


//6. every()
// The every method executes the provided callback function once for each element present in the array until it finds the one where callback returns a falsy value. 
// If such an element is found, the every method immediately returns false. Otherwise, if callback returns a truthy value for all elements, every returns true.
// Calling this method on an empty array will return true for any condition!
//The predicate  or callback function is passed three arguments every(): the current array element to test, the index in the array, and the array itself. 
//You can evaluate those parameters however you like to determine whether to return true or false.
// It accept an optional thisArg as the second parameter (after the predicate). It specifies the value to use as this when executing the predicate function.

// If you want to perform a certain task on every single element without using loops then you can use every()
var result = [1999,2002,1970,1989].every(function(el){  // you can also use the arrays object to call the function or methods apart from Arrays class or object.
	return (el % 2) === 0;
})

console.log(result);

// 7. map()
//The map() method creates a new array with the results of calling a callback function for every array element.

//The map() method calls the provided function once for each element in the calling array array, in order.

//Note: map() does not execute the function for array elements without values.

//Note: this method does not change the original array.

// my_array.map(function(item,index,arr) {
//  console.log("item: " + item + " at index: " + index + " in the array: " + arr);
//});

//function(currentValue, index, arr): the function with its parameters which is required to run for each element of the array.

//currentValue: the value of the current element.

//index: the index of the current element being processed.

//arr: the array object on which map() is called.
//thisValue: value to be used as the function’s this value when executing it. “undefined” will be passed if this value is not provided.

//Note: index, arr and thisValue are all optional parameters.

var years5 = [1999,2002,1970,1989];

var ages5 = years5.map(function(el){
	return 2020 - el;
});
console.log(ages5);

// 8. filter()
// The filter() method creates an array filled with all array elements that pass a test (provided as a function).

//Note: filter() does not execute the function for array elements without values.
//Note: filter() does not change the original array.

// callback is invoked with three arguments:
// 1.the value of the element
// 2.the index of the element
// 3.the Array object being traversed

// Following example uses filter() to filter array content based on search criteria.
var ages5 = [11,17,19,21,24];
var adults = ages5.filter(function(el){
	if (el >= 18) {
		return el;
	}
});
console.log(adults);

// 9. splice()
// The splice() method adds/removes items to/from an array, and returns the removed item(s).

//Note: This method changes the original array.
//Argument 1: Index, Required. An integer that specifies at what position to add /remove items, Use negative values to specify the position from the end of the array.
//Argument 2: Optional. The number of items to be removed. If set to 0(zero), no items will be removed. And if not passed, all item(s) from provided index will be removed.
//Argument 3…n: Optional. The new item(s) to be added to the array.
var friends5 = ['Shubham','Saurabh','Kush','Dharmendra','Abhinav'];
console.log(friends5.splice(2,2,"Gaurav","Gudu Bhayia","Kaleen Bhayia"));
console.log(friends5);

// 10. slice()
// slice() method returns the selected element(s) in an array, as a new array object.
// slice() method doesn’t change the original array.
//The slice() method can take 2 arguments:
//Argument 1: Required. An integer that specifies where to start the selection (The first element has an index of 0). Use negative numbers to select from the end of an array.
//Argument 2: Optional. An integer that specifies where to end the selection. If omitted, all elements from the start position and to the end of the array will be selected. Use negative numbers to select from the end of an array.
var values = [11,17,18,20,23];
console.log(values.slice(0,2));
console.log(values);

// ES6
// ARROW function(=>) concept
//An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.

// each()
const result6 = [1999,2002,1970,1989].every((el) => (el % 2) === 0);  // you can also use the arrays object to call the function or methods apart from Arrays class or object.
console.log(result);

//map()
const years6 = [1999,2002,1970,1989];

let ages6 = years6.map(el => 2020 - el);
console.log(ages6);

// filter()
var ages5 = [11,17,19,21,24];
var adults = ages5.filter(el =>{
	if (el >= 18) {
		return el;
	}
});
console.log(adults);

// 10. fill()
//The fill() method fills the specified elements in an array with a static value.

//You can specify the position of where to start and end the filling. If not specified, all elements will be filled.

//Note: this method overwrites the original array.
// value	Required. The value to fill the array with
// start	Optional. The index to start filling the array (default is 0)
// end	    Optional. The index to stop filling the array (default is array.length)

let friends = ['Shubham','Saurabh','Kush','Dharmendra','Abhinav'];
friends.fill('Gaurav',2,4);
console.log(friends);

// 9. from()
//Array.from() lets you create Arrays from:

// .array-like objects (objects with a length property and indexed elements); or
// .iterable objects (objects such as Map and Set).

// Array.from() has an optional parameter mapFn, which allows you to execute a map() function on each element of the array being created.
//More clearly, Array.from(obj, mapFn, thisArg) has the same result as Array.from(obj).map(mapFn, thisArg),

console.log(Array.from(Shubham[0]));

//Set
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);
// [ "foo", "bar", "baz" ]

// Array methods: every(), some(), find(), and findIndex() test the array elements with a predicate returning a truthy value to determine if further iteration is required.

*/
/******************
 *CODING CHALLENGE 3
 */
 /*
var tipcalculator =  function(bill){ // I expected an immediate result so just returned 
 	if (bill<50) {
 		return bill*0.2;
 	}
 	else if (bill>=50 && bill<200) {
 		return bill*.15;
 	}
 	else{
 		return bill*.1;
 	}
 }

 console.log(tipcalculator(268));

 var tip=[18.59, 9.60, 26.8];
 console.log(tip);
 console.log(18.59+124, 9.60+48, 26.8+268);

 var paid=[142.59,57.6,294.8];
 console.log(paid);
 */

 /****************************
 *OBJECTS AND PROPERTIES
 */
 /*
 
// JavaScript allows us to create object without defining its class

// This is also called a JSON object(JavaScript Object Notation)
// It is formed be {}.
// object literal or JSON.
 var Shubham={
 	firstName:'Shubham',
 	lastName:'Pandey',
 	birthyear:1999,
 	family:['Saurabh', 'Saroj', 'Papa'],
 	job:'student',
 	ismarried:false
 };   
 
 console.log(Shubham.firstName);
 console.log(Shubham['ismarried']);
 var x='birthyear';
 console.log(Shubham[x]);

 // mutation of objects 
 Shubham.job='musician';
 Shubham['ismarried']=true;
 console.log(Shubham);

 //new  object syntax
 var Shubham= new Object();
 Shubham.firstName='Shubham',
 Shubham['lastName']='Pandey',
 console.log(Shubham);
*/

/***********************
*objects and methods
*/
/*
var Shubham={
 	firstName:'Shubham',
 	lastName:'Pandey',
 	birthyear:1999,
 	family:['Saurabh', 'Saroj', 'Papa'],
 	job:'student',
 	ismarried:false,

 	calculateage:function(){
 		// this keyword gives the functionality to access the property of current object in that object itself
 		// with this we canot only access the current object's property but also can set them
 		this.age = 2019 - this.birthyear;
 	} 
 };
Shubham.calculateage();
console.log(Shubham);
*/

/***************************
*CODING CHALLENGE 4
*/
/*
var Shubham={
	firstName:'Shubham',
	massShubham:55,
	heightShubham:1.73,
	bmiShubham: function(){

		// we didn't pass any argument because we will read it from the current object, instead of explicitly passing it
		this.BMI=this.massShubham/(this.heightShubham * this.heightShubham);
        return this.BMI;
	}
};

var Saurabh={
	firstName:'Saurabh',
	massSaurabh:53,
	heightSaurabh:1.79,
	bmiSaurabh: function(){
		this.BMI=this.massSaurabh/(this.heightSaurabh * this.heightSaurabh);
		return this.BMI;
	}
};

console.log(Shubham);
console.log(Saurabh);

if (Shubham.bmiShubham()>Saurabh.bmiSaurabh()) {
	console.log(Shubham. firstName+ ' ' + Shubham. BMI);
}
else if (Saurabh.bmiSaurabh()>Shubham.bmiShubham()) {
	console.log(Saurabh. firstName +' '+ Saurabh. BMI);
}
else{
	console.log(' both have same BMI.');
}
*/

/*******************************
*LOOPS and iteration
*/
/*
//FOR loop

//ES5 Syntax
var i = 23;  // Here the value of this i will change because with var it doesn't matter if it is inside of a block or outside of a block coz it is not block scoped and can be accessed
for (var i = 0; i < 5; i++) { // Because this i will overwrite the previous i because they are not different variables they are not block scoped due to var
    console.log(i);
}
console.log(i);

//ES6 Syntax
let i6 = 23;  // The value of this i will not change
for (let i6 = 0; i6 < 5; i6++) { //<<-- here this i is block scoped and hence will act as different variables.
    console.log(i6);
}
console.log(i6);
*/

/*
var Shubham=['Shubham','Pandey',1999,'student',false];

for (var i = 0; i < Shubham.length; i++) {
 	console.log(Shubham[i]);
 } 

 //WHILE loop

 var i=0;
 while(i<Shubham.length){
 	console.log(Shubham[i]);
 	i++;
 }


//continue
var Shubham=['Shubham','Pandey',1999,'student',false];
 for (var i = 0; i < Shubham.length; i++) {
 	if (typeof Shubham[i]!=='string') continue;
 	console.log(Shubham[i]);
 } 

//break
for (var i = 0; i < Shubham.length; i++) {
 	if (typeof Shubham[i]!=='string') break;
 	console.log(Shubham[i]);
 }

 //small challenge
 for (var i = Shubham.length -1 ; i >=0 ; i--) {
 	if (typeof Shubham[i]!=='string') continue;
 	console.log(Shubham[i]);
 } 
 */

/*
 // For Each loop
 // technically it is not a loop it is a method in the array object, it is a method with the working and functionality of a for each loop 
//  The forEach() method executes a provided function once for each array element.
//  Note: the function is not executed for array elements without values.
// callback is invoked with three arguments:
//1.the value of the element
//2.the index of the element
//3.the Array object being traversed
// Optional, this value to be passed to the function to be used as its "this" value.
// If this parameter is empty, the value "undefined" will be passed as its "this" value
// There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool.
//ES5
 var data = ['Shubham','Pandey',19,'Artist',['Gaurav','Zap','Saurabh','Abhinav']];
data.forEach(function(el){
	console.log(el);
})

//ES6
data.forEach((el) =>(console.log(el);))
*/	

/*
// The For/Of Loop
// The JavaScript for/of statement loops through the values of an iterable objects.
// for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.
// You can use let instead of const too, if you reassign the variable inside the block.
// There is no way to stop or break a forEach(),map(),filter() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool.
// Early termination may be accomplished with:
//A simple for loop
//A for...of / for...in loops can be used for that
let platforms = ["Youtube","Netflix","Amazon Prime","Hotstar"];
for(const value of platforms){
	console.log(value);
}

// for/in loop
// for..in iterates over all enumerable property keys of an object
let socialmedia = {
	fb: "Facebook",
	ig: "Instagram",
	yt: "Youtube",
	in: "LinkedIn"
};

for(const key in socialmedia){
	console.log(socialmedia[key]);
}
*/

 /*********************************
 *CODING CHALLENGE 5
 */

 /*
var Shubham={
	firstName:'Shubham',
	lastName:'Pandey',
	bill:[124, 48, 268, 180, 42],

    tipcalculator:  function(){
         this.tip=[];
         this.paid=[];

    	for (var i = 0 ; i< this.bill.length ;i++){
    		var percentage;
    		var bills=this.bill[i];
 	if (bills<50) {
 		percentage=.2;
 	}
 	else if (bills >=50 && bills <200) {
 		percentage=.15;
 	}
 	else{
 	    percentage=.1;
 	}
 	   this.tip[i] =bills *percentage;
 	   this.paid[i]=bills+bills *percentage;
  }
}
}; 





var Saurabh={
	firstName:'Saurabh',
	lastName:'Pandey',
	bill:[77, 375, 110, 45],
	 tipcalculator:  function(){
         this.tip=[];
         this.paid=[];

    	for (var i = 0 ; i< this.bill.length ;i++){
    		var percentage;
    		var bills=this.bill[i];
 	if (bills<100) {
 		percentage=.2;
 	}
 	else if (bills >=100 && bills <300) {
 		percentage=.1;
 	}
 	else{
 	    percentage=.25;
 	}
 	   this.tip[i] =bills *percentage;
 	   this.paid[i]=bills+bills *percentage;
  }
}
};
Shubham.tipcalculator();
Saurabh.tipcalculator();


function tipaverage(tip){
    
    var sum=0;
    for (var i=0; i< tip.length; i++) {
         sum +=tip[i];
     }
         
     
        return sum/tip.length;
      }  
    
Shubham. average=tipaverage(Shubham.tip);
Saurabh. average=tipaverage(Saurabh.tip);
console.log(Shubham,Saurabh); 

if (Shubham.average>Saurabh.average) {
	console.log(Shubham.firstName + ' has paid highest tip on average  '+Shubham.average );
}
else{
	console.log(Saurabh.firstName + ' has paid highest tip on average '+Saurabh.average );
}

*/

/********************
  Spread Operator
*/

/*
// The spread operator is a new addition to the set of operators in JavaScript ES6. 
// It takes in an iterable (e.g an array or a string) and expands it into individual elements.
// Using this operator makes the code concise and enhances its readability.
// Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, 
// or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

// Let's consider this function
function totalWageOfLabours(a,b,c,d){
	return a + b + c + d;
}

var totalWage = totalWageOfLabours(250,150,800,400);
console.log(totalWage);

// Suppose we have wages as an array
var wages = [250,150,800,400];

// But our function don't accept array as argument but as individual values or parameters
// So inorder to make the array accept as parameters  for function calls

// ES5
// We use apply() method
// It is common to use Function.prototype.apply() in cases where you want to use the elements of an array as arguments to a function.
var totalWage2 = totalWageOfLabours.apply(null,wages);
console.log(totalWage2);

// ES6
// 1. Array to arguments and Replace apply()
// Instead of having to pass each element like numbers[0], numbers[1] and so on, the spread operators allows array elements to be passed in as individual arguments.
let totalWage6 = totalWageOfLabours(...wages);
console.log(totalWage6);

// 2. Copying an array
// The array2 has the elements of array1 copied into it. Any changes made to array1 will not be reflected in array2 and vice versa.
// If the simple assignment operator had been used then array2 would have been assigned a reference to array1 and the changes made in one array would reflect in the other array which in most cases is undesirable.
let copiedWages = [...wages];
console.log(copiedWages);

// 3. Inserting the elements of one array into another
let totalExpenses = [2000,1000,...wages,7500];
console.log(totalExpenses);

// 4. A better way to concatenate arrays
// Array.prototype.concat() is often used to concatenate an array to the end of an existing array. Without spread syntax, this is done as:
let wage1 = [250,150,800,400];
let wage2 = [300,450,750,500];
let newWage = [...wage1,...wage2];
console.log(newWage);

// 5. Apply for new operator
// When calling a constructor with new it's not possible to directly use an array and apply() (apply() does a [[Call]] and not a [[Construct]]). 
//However, an array can be easily used with new thanks to spread syntax:
let dateFields = [2020, 0, 1];  
let d = new Date(...dateFields);
*/


/*****************************
* JavaScript Function Parameters
*/

// Function parameters are the names listed in the function definition.
//Function arguments are the real values passed to (and received by) the function.

// Parameter Rules
//JavaScript function definitions do not specify data types for parameters.
//JavaScript functions do not perform type checking on the passed arguments.
//JavaScript functions do not check the number of arguments received.

//Arguments are Passed by Value
//The parameters, in a function call, are the function's arguments.
//JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.
//If a function changes an argument's value, it does not change the parameter's original value.
//Changes to arguments are not visible (reflected) outside the function.

//Objects are Passed by Reference
//In JavaScript, object references are values.
//Because of this, objects will behave like they are passed by reference:
//If a function changes an object property, it changes the original value.
//Changes to object properties are visible (reflected) outside the function.

// Default Parameters
//If a function is called with missing arguments (less than declared), the missing values are set to undefined.
//Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter
function Person(firstName,age,lastName = 'Pandey',nationality = 'Indian',socialmedia = 'LinkedIn'){
	this.firstName = firstName;
	this.lastName = lastName;
	this.nationality = nationality;
	this.socialmedia = socialmedia;
	this.age = age;
}

var Zap = new Person('Zap',27);
console.log(Zap);
/////////////////////////
// Rest Parameters

// Variadic functions
// Variadic functions are functions which take an indefinite or arbitiary no of arguments number of arguments.
// So, Rest Parameters and argument object helps in case of variadic functions where aribitiary no of arguments are present.

// ES5

// Argument object
//If a function is called with too many arguments (more than declared), these arguments can be reached using the arguments object.
// arguments is an Array-like object which is a local variable available within all non-arrow functions. You can refer to a function's arguments inside that function by using its arguments object. 
// It has entries for each argument the function was called with, with the first entry's index at 0.
// Array-like” means that arguments has a length property and properties indexed from zero, but it doesn't have Array's built-in methods like forEach() or map().

// The downside of using the arguments keyword is that, it returns an array-like object; this means you essentially cannot perform any array-methods like; Array.filer, Array.map. 
// Another pitfall, is that we cannot use arguments in arrow functions. 
// This is because arrow-functions do not have their own this, and hence no arguments object either.
// So inorder to convert it into an array we use this hack
/*
function isFullAge(){
	var argumentsArray = Array.prototype.slice.call(arguments);
	argumentsArray.forEach(function(el){
		console.log((2020 - el) >= 18)
	})
}

isFullAge(1987,1970,2000,2010);
isFullAge(1987,2005,2000,2010,1999);
*/
// When we have to deal with usual (or required) parameters along with a no of arbitiary parameters
function isFullAge(limit){
	var yearsArray = Array.prototype.slice.call(arguments,1);
	yearsArray.forEach(function(el){
		console.log((2020 - el) >= limit)
	})
}

isFullAge(18,1987,2000,2010);
isFullAge(20,1987,2005,2010,1999);
// ES6

// Rest Parameters
//The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
// Rest parameters: collect all the remaining elements into an array. This allows us to do really neat function definitions.
// With rest parameters we can gather any number of arguments into an array and do what we want with them.
// Note: Rest parameters have to be at the last argument. This is because it collects all remaining/ excess arguments into an array.
// We can separately define the first arguments, and the rest of the arguments in the function call (no matter how many they are) will be collected into an array by the rest parameter.
// Since the rest parameter gives us an array, we can use array methods like Array.find e.t.c.

// The Difference
// Rest syntax looks exactly like spread syntax due to (...) . In a way, rest syntax is the opposite of spread syntax.
// The spread operator allows us to spread the value of an array (or any iterable) across zero or more arguments in a function or elements in an array (or any iterable). 
//The rest parameter allows us to pass an indefinite number of parameters to a function and access them in an array.
/*
function isFullAge6(...years){
	years.forEach(el => console.log((2020 - el) >= 18))
}

isFullAge6(1987,1970,2000,2010);
isFullAge6(1987,2005,2000,2010,1999);
*/
// When we have to deal with usual (or required) parameters along with a no of arbitiary parameters
function isFullAge6(limit,...years){
	years.forEach(el => console.log((2020 - el) >= 18))
}

isFullAge6(18,1987,1970,2000,2010);
isFullAge6(19,1987,2005,2000,2010,1999);
