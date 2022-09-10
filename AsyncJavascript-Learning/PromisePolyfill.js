// Promise is an object so we need a class /constructor ✅
// It keeps track about whether a certain asynchronous event has happened already or not ✅
// Promises are based on time events and have some states that classify these events ✅
// It takes in a executor function/callback which is executed immidiately ✅
// Executor takes in two callback functions --> resolve and reject ✅
// resolve() should return/provide with a value and reject() should return an value/error. ✅🅿
// resolve() should be able to resolve value synchronously as well as asynchronously ✅(there is a knowledge gap promise is always resplved asynchronously)
// It has a .then() method call which attaches async callback to it. ✅
// Also has .catch() method. ✅
// .then() method receives value from resolve() and .catch() from reject() ✅
// .then() & .catch() can be chained.i.e value of one's execution is input of another 🅿
//  and the order is also strictly maintained. ✅
// .then() can return or receive--> value or new promise or undefined. 🅿

// EDGE CASES
// 1. Execution Function might throw an error due to some async call or execution.
// 2. Finally will always be executed no matter what need to implement finally
// 3. .then() always returns a promise.
// 4. Promise execution always happens asynchronously whether the value is resolved immediately or not to properly establish asyncronity.
// 5. Once a promise is settled it is settled forever it cannot be turned back or reversed.

const state = {
  PENDING : 'pending',
  FULLFILLED: 'fulfilled',
  REJECTED: 'rejected'
}

// INTUITION Based + Specification based
class Promisefill{
  #thenCallbacks = [];
  #catchCallbacks = [];

  constructor(executor) {
    this.resolvedValue = undefined;
    this.reason = undefined;
    this.state = state.PENDING;

    const resolve = (value) => {
      if (this.state === state.PENDING) {
        this.resolvedValue = value;
        this.state = state.FULLFILLED
        this.#thenCallbacks.forEach((callback) => callback(this.resolvedValue))
      }
    }

    const reject = (reason) => {
      if (this.state === state.PENDING) {
        
        this.state = state.REJECTED
        this.reason = reason;
        this.#catchCallbacks.forEach((callback) => callback(this.reason))
      }
    }
    setTimeout(() => {

      try {
        executor(resolve,reject)
      } catch (error) {
        
      }
    })

  }

  then(onFullfilled){
    this.#thenCallbacks.push(onFullfilled)
    if (this.state === state.FULLFILLED) {
      this.#thenCallbacks.forEach((callback) => callback(this.resolvedValue))
    }

    return new Promisefill(() => {

    })
  }

  catch(callback){
    this.#catchCallbacks.push(callback)
    if (this.state === state.REJECTED) {
      this.#catchCallbacks.forEach((callback) => callback(this.reason))
    }

    return new Promisefill(() => {

    })
  }

  finally(){

  }
}
// INTUITION Based

// class MyPromise {
//   resolvedValue;
//   // onFullfilled;
//   onReject;
//   #thenCallbacks = []; // this will chain the then callbacks and that too in order due to array
//   #catchCallbacks = []; // this will chain the catch callbacks and that too in order due to array

//   constructor(executor) {
//     this.state = state.PENDING;
    
//     const resolve = (value) => {

//       this.resolvedValue = value;
//       this.state = state.FULLFILLED
//       if (this.#thenCallbacks.length > 0) {
//         this.#thenCallbacks.reduce((previousValue,onFullfilled) => onFullfilled(previousValue),this.resolvedValue)
//       }
//     }
    
//     const reject = (reason) => {
//       this.state = state.REJECTED
//       return reason
//     }
//     executor(resolve,reject)
//   }

//   then(callback){
    
//     // this.onFullfilled = callback
//     this.#thenCallbacks.push(callback)
//     if(typeof callback === 'function' && this.state === state.FULLFILLED){
//       this.#thenCallbacks.reduce((previousValue,onFullfilled) => onFullfilled(previousValue),this.resolvedValue)
//       // this.onFullfilled(this.resolvedValue)
//     } 
//     return this;
    
//   }

//   catch(callback){
//     this.#catchCallbacks.push(callback)
//     this.#catchCallbacks.push(callback)
//     this.onReject()
    
//   }

// }

function order(){
	return new Promisefill((resolve,reject) => {
    let order = "Dosa"
    setTimeout(() => {
      reject(`Sorry!! ${order} is not available`);
    },2000)
	})
}
function waiter(order) {
  return new Promisefill((resolve,reject) =>{
      setTimeout(()=>{
          console.log(`Waiter notes the tableno and takes the order of ${order} to the Kitchen`);
          let orderAvailable = true
          if (orderAvailable) {
              resolve(order)
          }
          else
              reject(new Error(`Sorry!! ${order} is not available`))
      },1000)
  })
}

order()
// .then((order) => {
//   return waiter(order)
// })
.then((order) => console.log(order))
.catch((error) => console.log(error))

