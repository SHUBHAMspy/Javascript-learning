// Synchronous JavaScript

// JavaScript is a synchronous(blocking) single-threaded language
// It executes code one by one from top to bottom in a serial and sequential manner
// And does not have multiple threads to execute code parallaly/concurrently.

// In a Restraunt
// function customer(){
//     console.log(" Customer Goes to kitchen and makes an order");

// }
// function kitchen(){
//     console.log("Kitchen prepares the order and give to the customer");
// }

// const enterIntoRestraunt = customer
// enterIntoRestraunt() // before ordering and getting the meal customer needs to enter the restraunt
// kitchen() //kitchen starts working after the customer has entered the restraunt and placed an order

// Asynchronous Javascript
// Making JavaScript or utilizing built-in methods to make it work in a non blocking and asynchrounous manner to resemble that things are working parallely
// Callbacks are functions that are used to make our code to work in asynchronous way
// As the name suggest it is something that needs to be called back that is afterwards later point of time and not immediately
//In a Restraunt
// function customer(callsWaiter){
//     console.log( "Customer Calls waiter for ordering");
//     let order = "Dosa"
//     let food = callsWaiter(order)
//     setTimeout(() =>{
//         console.log(`Customer eats the ${food} and is satisfied`);
//     },4000)
// }

// function kitchen(takesInOrder){
//     setTimeout(()=>{
//         console.log("Kitchen prepares the order and give to the waiter")
//         console.log("Waiter brings the order");
//     },2000)
//     return takesInOrder;
// }

// const waiter = kitchen // Kitchen appoints a waiter as its reference to get and serve order so that our customer don't need to come into the kitchen to make order

// const enterIntoRestraunt = customer
// enterIntoRestraunt(waiter) // before ordering and getting the meal customer needs to enter the restraunt

// Callback Hell
// As a Restraunt we need to make money for the business
// 1.In order to make money we need to welcome the customeri.e customer should enter into the restraunt
// 2. and customer will come to make an order
// 3.and if he makes an order we have to fulfill it
// 4.Customer will be satisfied if the order is fulfilled and he eats it
// 5. And if the customer eats he will finally pay and give us money which is our goal

// As you can see all the events or process are dependent and are callbacks which is leading to a chain of inter-realted callbacks
// and this relation leads to nesting of callbacks and hence creates a hell for callbacks


// function restrauntOpens(){
// 	setTimeout(()=>{
// 		console.log("Customer enters the shop and sits on the table");
// 		let tableno = 24
// 		setTimeout(()=>{
// 			let order = "Dosa"
// 			console.log( `Customer calls waiter for ordering the ${order}`);
// 			setTimeout(()=>{
// 				console.log(`Waiter notes the tableno and takes the order of table ${tableno} to the Kitchen`);
// 				setTimeout(()=>{
// 					console.log(`Kitchen prepares the order and give to the waiter`);
// 					let food = order
// 					setTimeout(()=> {
// 						console.log(`Customer eats the ${food} and is satisfied`);
// 						setTimeout(() => {
// 								console.log("Now customer is ready to pay the money");
// 								console.log("And asks for the bill");
// 						},1000)
// 					},4000,food)
// 				},2000)
// 			},1000,tableno)
// 		},1000)
// 	},2000)
// }
// restrauntOpens()

// Since this pyramid like structure is unusual and hard to read and parse and hard to maintain and scale
// Does not align with the natural way/flow of writing and understanding the code 
//i.e serially and seqntially in a line by line manner
//  So we require a way to write a asychronous interdependent code in a more serial and natural manner
// So that it aligns with the flow of writing and understanding the code just like or seems like synchronous code 
// The real problem with callbacks it that they deprive us of keywords like return and throw. 
//Instead, our program's entire flow is based on side effects: one function incidentally calling another one.

//In order to resolve callback hell there are 4 solutions
// 1. Commenting things for better readabilty and understanding
// 2. Modularizing code into separate functions and split the callbacks into those functions
// 3. Promises
// 4. Async/Await

// function customer(){
// 	console.log( "Customer calls waiter for ordering");
// 	let order = "Dosa"
// 	let tableno = 24
// 	setTimeout (()=>{
// 		waiter(order,tableno)
// 	},1000)    
// }

// function waiter(order,tableno) {
// 	console.log(`Waiter notes the tableno and takes the order of ${tableno} to the Kitchen`);
// 	setTimeout(()=>{
// 		kitchen(order)
// 	},3000) 
// }

// function kitchen(takesInOrder){
// 	console.log(`Kitchen prepares the order ${takesInOrder} and give to the waiter`)
// 	console.log("Waiter brings the order");
// 	let food = takesInOrder
// 	setTimeout(() => {
// 		eat(food)
// 	},4000);
// }
// function eat(food){
// 	console.log(`Customer eats the ${food} and is satisfied`);
// 	setTimeout(() => {
// 		billPayment()
// 	}, 1000);

// }

// function billPayment(){
// 	console.log("Now customer is ready to pay the money");
// 	console.log("And asks for the bill");   
// }

// function restrauntOpens(){
// 	console.log("Customer enters the shop and sits on the table");
// 	setTimeout(() => {
// 		customer()
// 	}, 2000);
// }

// restrauntOpens()

// Promises

//* A promise is an object that represents something that will be available in the future. In programming, this "something" is values. 
// Promises propose that instead of waiting for the value we want (e.g. the image download), we receive something that represents the value in that instant so that we can "get on with our lives" and then at some point go back and use the value generated by this promise.
//* A promise is an object that keeps track about whether a certain asynchronous event has happened already or not, and if it did happen, then the promise determines what happens next.
//*  A promise is a returned object from any asynchronous function, to which callback methods can be added based on the previous function’s result.
//Promises use .then() method to call async callbacks. 
//We can chain as many callbacks as we want and the order is also strictly maintained.
//* These promises are put in event queue so that they don’t block subsequent JS code. Also once the results are returned, the event queue finishes its operations.
// We can produce or consume promises. 
// When we produce a promise, we create a new promise and send a result using that promise. 
// When we consume a promise, we use callback functions for the fulfilled and rejected states of that promise.
//*  The promise object receives a callback function that accepts two arguments: resolve and reject. This callback is called an executor function, and it is called immediately when the promise is created.
// The executor function informs the promise of whether or not the event was successful. If it was successful, the function "resolve" is called. If it was unsuccessful, the "reject" function is called.
// The then () method from the returned object allows us to add an event handler when the promise reaches the state of fulfilled, which means its success state, thus returning the result of the function, "resolve," called by the executor function.
// The catch method works the same way, but the expected return is from the "reject" function.
// Well then, the basic principle of the promises to end callback hell are:

// A promise will gain control over the results of callbacks: resolve and reject functions;
// Every promise gives you a then() method (or catch(), which is just sugar for then(null, ...)).
//There are three things we can do in then():
//1. return another promise
//2. return a synchronous value (or undefined)
//3. throw a synchronous error

// Promises are based on time events and have some states that classify these events:

// Pending: before the event happens;
// Settled/Resolved: after the event happens;
// Fulfilled: when the promise returns the correct result;
// Rejected: when the promise does not return the correct result.

// Pending State: Once a promise is created, it enters the pending state. While a promise is in the pending state, the outcome of the asynchronous operation is still unknown. A promise remains pending until it is either resolved by the completed async operation or rejected due to failure of the async operation.

//Fulfilled State: This is the state of a promise which indicates that the asynchronous operation has been completed successfully and the promise has a resolved value.

//Rejected State: This is the state of a promise which indicates that the asynchronous operation has failed and the promise has a rejected value.

//Settled State: A promise’s settled state refers to the final state of the promise after it has been fulfilled or rejected.

// So, Let's consider that when you enter a restraunt for the restraunt is bound to serve(had made a promise) inorder to run its business to every customer
//const promise = new Promise ();

function customer(){
	console.log( "Customer calls waiter for ordering");
	return({order:"Dosa",tableno:24})
}

function waiter(order,tableno) {
	return new Promise((resolve,reject) =>{
		setTimeout(()=>{
			console.log(`Waiter notes the tableno and takes the order of ${tableno} to the Kitchen`);
			let orderAvailable = true
			if (orderAvailable) {
				resolve(order)
			}
			else
				reject(new Error(`Sorry!! ${order} is not available`))
		},1000)
	})
}

function kitchen(takesInOrder){
	return new Promise((resolve,reject) => {
		let food = takesInOrder
		setTimeout(() => {
			console.log(`Kitchen prepares the order ${takesInOrder} and give to the waiter`)
			console.log("Waiter brings the order");
			resolve(food)
		},3000);
	});
}
function eat(food){
	return new Promise((resolve,reject)=>{
		setTimeout(() => {
			console.log(`Customer eats the ${food} and is satisfied :)`);
			resolve()
		}, 4000);
	});

}
function billPayment(bill){
	return new Promise((resolve,reject)=>{
		setTimeout(() => {
			console.log("Now customer is ready to pay the money");
			console.log(`And asks for the bill and pays the ${bill} rupees bill`);
			resolve()
		}, 1000);
	});
    
}
function restrauntOpens(){
	return new Promise((resolve,reject) => {
		console.log("Customer enters the shop and sits on the table");
		setTimeout(() => {
			resolve(customer())
		}, 2000);
	})
}
restrauntOpens().then(({order,tableno}) => {
  return waiter(order,tableno)
})
.then((takesInOrder)=>{
  return kitchen(takesInOrder)
})
.then((food)=>{
  return eat(food)
})
.then(() =>{
	let bill = 72
	let billPayed = false
	if (!billPayed) {
			return billPayment(bill)
	}
})
.catch((message) =>{
	console.log(message);
	console.log("Customer leaves :(");
})

// Async and Await

//Async /await is another alternative for consuming promises, and it was implemented in ES8, or ES2017.
//Async/await is a new way of writing promises that are based on asynchronous code but make asynchronous code look and behave more like synchronous code. This is where the magic happens.
// async function restrauntBusiness() {
// 	try {
// 		const order = await restrauntOpens()
// 		const takesInOrder = await waiter(order.order,order.tableno)
// 		const food = await kitchen(takesInOrder)
// 		await eat(food)
// 		let bill = 72
// 		let billPayed = false
// 		if (!billPayed) {
// 			await billPayment(bill)
// 		}
			
// 	} catch (error) {
// 		console.log('Error',error.message);
// 		console.log("Customer leaves :(");
// 	}

// 	finally{
// 		console.log("Restraunt has closed, Day Ended !!");
// 	}
// }
// restrauntBusiness()


