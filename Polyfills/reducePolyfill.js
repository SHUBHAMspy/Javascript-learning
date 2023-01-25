const numbers = [2, 3, 4, 5, 10];

// It takes a callback,
// Also a initial value,
// Runs callback reducer function for each value i.e a loop
// And passes the return value as the previous value for the next item in array
// Reduces the whole array to a single value i.e it returns a reduced/accumulated  value

// const sum = numbers.reduce(
//   (previouValue, currentValue) => previousSum + currentValue,
//   0
// );
// console.log(sum);

Array.prototype.reduce = null;

Array.prototype.myReduce = function (callback, initialValue = null) {
  let reducedValue = initialValue;
  for (let index = 0; index < this.length; index++) {
    reducedValue = callback(reducedValue, this[index]);
  }
  return reducedValue;
};

const sum1 = numbers.myReduce(
  (previouValue, currentValue) => previouValue + currentValue
);
console.log(sum1);
