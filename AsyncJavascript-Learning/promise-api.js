
// The Promise Api
// There are 4 Promise api:
// 1. Promise.all()
// 2. Promise.allSettled()
// 3. Promise.race()
// 4. Promise.any()

//Promise.all()
function order1(){
	return new Promise((resolve,reject)=>{
		let order1 = "Dosa"
		setTimeout(() => {
			console.log(`${order1} is ready`);
			resolve("Dosa")
		}, 3000);
	})
}
function order2(){
	return new Promise((resolve,reject)=>{
		let order2 = "Shahi Paneer"
		setTimeout(() => {
			console.log(`${order2} is ready`);
			resolve("Shahi Paneer")
		}, 2000);
	})
}
const customer1= order1()
const customer2= order2()
const customers = [customer1,customer2]

Promise.all(customers).then(orders => console.log(orders))

//2. Promise.resolve()
function customer(){
    console.log( "Customer calls waiter for ordering");
    return({order:"Dosa",tableno:24})
}
Promise.resolve(customer()).then((customerOrder) => console.log(customerOrder))



