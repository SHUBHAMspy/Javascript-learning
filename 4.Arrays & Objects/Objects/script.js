// Object and Object Methods
/*********************************************** */

// 1.Object.assign()
// The Object.assign() method copies or assigns all enumerable own properties from one or more source objects to a target object. 
// It returns the modified target object.
var Shubham = {
  firstName: 'Shubham',
  lastName: 'Sharma',
  job: 'student'
}
var status = {
  job: 'engineer',
  ismarried: false
}
console.log(Shubham); //Before assigning

Object.assign(Shubham,status)
console.log(Shubham);  // After assigning

// If you don't want to modify the original object use empty object {} to create  assigned object.
//Assign from multiple sources
var friends = ['Shubham','Neelu', 'Gyan']
var assigned = Object.assign({},Shubham,friends)
console.log(assigned);

// It can be used to :
// 1. Clone/Copy an Object
// 2. Merge different objects

var copiedShubham = Object.assign({},Shubham); // Cloning
console.log(copiedShubham);

// Merge with same properties
console.log(Object.assign(copiedShubham,{job: 'Founder'}));

// Merge with different properties
console.log(Object.assign(copiedShubham,{age: 21}));

// 2. Object.defineProperty()
// It  defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
var obj={
	name:'john',
	job:'musician'
};
Object.defineProperty(obj,'age',{
  value: 56,
  writable: false
})

console.log(obj.age);
obj.age = 23
console.log(obj.age);

// 3. Object.keys()
// The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
var keys = Object.keys(Shubham);
console.log(keys);

// 4. Object.values()
// The Object.values() method returns an array of a given object's own enumerable property values.
var values = Object.values(Shubham);
console.log(values);

// 5. Object.entries()
// The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs. 
// This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well.
var obj1 = {
  foo: 'bar',
  fizz: 'buzz' 
}
var enteries = Object.entries(obj1)
console.log(enteries);

// It can be used for two purposes.
// 1. To gracefully iterate over key-value pairs
var obj = { a: 5, b: 7, c: 9 };
for (let [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`); // "a 5", "b 7", "c 9"
}

// 2. Converting an Object to a Map
// The Map() constructor accepts an iterable of entries. With Object.entries(), you can easily convert from Object to Map
const map = new Map(enteries);
console.log(map);

// 6. Object.fromEntries()
// The Object.fromEntries() method transforms a list of key-value pairs into an object.

// It can be used for two purposes
// 1.Converting a Map to an Object
var obj = Object.fromEntries(map);
console.log(obj);

// 2.Converting an Array to an Object
var obj1 = Object.fromEntries(enteries);
console.log(obj1);
 
// 7. Object.freeze()
// The Object.freeze() method freezes an object. 
// Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. 
// A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.

Object.freeze(obj1);
obj1.fooz = 'ball'; // no insertion
obj1.foo = 'buzz'  // no updation.
console.log(obj1);

/***
 * JSON
*/

//* JSON is a way of representing data through text.
//* JSON is a string whose format very much resembles JavaScript object literal format.
// Even though it closely resembles JavaScript object literal syntax, it can be used independently from JavaScript.
//* JSON exists as a string — useful when you want to transmit data across a network. 
// It needs to be converted to a native JavaScript object when you want to access the data. 
// JavaScript provides a global JSON object that has methods available for converting between the two.

//? Serialization: converting a native object to a string so it can be transmitted across the network is called serialization.
//? Deserialization: Converting a string to a native object is called deserialization.

// JSON is purely a string with a specified data format — it contains only properties, no methods.
// Unlike in JavaScript code in which object properties may be unquoted, in JSON only quoted strings may be used as properties.
// JSON requires double quotes to be used around strings and property names. Single quotes are not valid other than surrounding the entire JSON string.
// JSON can actually take the form of any data type that is valid for inclusion inside JSON, not just arrays or objects. So for example, a single string or number would be valid JSON.

// JSON as object data 
var myJSON = `
  {
    "firstName": "Shubham",
    "lastName" : "Shukla",
    "job": "student"
  }
`
console.log(myJSON);

// JSON as array data
var person = `["male", 23, "indian"]`
console.log(person);

// JSON methods
/*******************/
// JSON.parse()
// converts a JSON string into an object.
var obj = JSON.parse(myJSON);
console.log(obj);

console.log(JSON.parse(person));

// JSON.stringify()
// creates a JSON string from object
var json = JSON.stringify(obj);
console.log(json);

console.log(JSON.stringify(['male', 23, 'indian']));

// Looping over objects
/*********************** */
var user={
  firstName:'Shubham',
  lastName:'Pandey',
  family:['Sap', 'Mummy', 'Papa'],
  job:'student',
  ismarried:false,

};
// for-in loop
for (const key in Shubham) {
  console.log(`${key}:=> ${Shubham[key]}`);
}

// using for-of loop
for (const key of Object.keys(user)) {
  console.log(`{${key}: ${user[key]}}`);
}

for (const entry of Object.entries(user)) {
  console.log(`${entry[0]}:=> ${entry[1]}`);
}

// a cleaner approach
for (const [key,value] of Object.entries(user)) {
  console.log(`${key}:=> ${value}`);
}


// Ways to copy Objects
/************************ */

// Object Referencing
//* Objects are always referenced 
// thinking that assigning an object will actually copy it to another is wrong
// But actually an object's reference in heap memory is copied.
var copiedUser = user; 
console.log(copiedUser === user);
copiedUser.job = 'Web Developer';  // A copy will not change the actual data but should only its data
console.log(user); // but it changes the original data beacause of object referencing.


// 1.Shallow Copy

// a.) Spread syntax
var copiedUser = {...user};

console.log(copiedUser);

console.log(copiedUser === user); 
console.log(copiedUser.family === user.family ); //But the family or any nested structures are still being refrenced due to Object Referencing
copiedUser.family.push('Wife');
console.log(user);

// b.) Object.assign() 

console.log(Object.assign({},user)); //does exactly the same thing as spread syntax

// 2. Deep Copy
var stringifiedUser = JSON.stringify(user); // the stringification of object actually creates a separate object
console.log(stringifiedUser);
var userDeepCopied = JSON.parse(stringifiedUser); // and that separated string object which is produced as a separate object from original is parsed to produce new object.
console.log(userDeepCopied);

console.log(user === userDeepCopied); // and that string object leads to a different separated object
console.log(user.family === userDeepCopied.family); // a new family array is being created while grabbing and parsing the string.
