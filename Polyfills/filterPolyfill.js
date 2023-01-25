// It returns a new Array
// There wil be a loop .
// It has a condition to it
// It takes in a callback

const numbers = [2, 3, 4, 5, 6];

// const even = numbers.filter((num) => num % 2 === 0);
// console.log(even);

Array.prototype.filter = null;

// Polyfill
Array.prototype.myfilter = function (callback) {
  const result = [];

  for (let index = 0; index < this.length; index++) {
    if (callback(this[index])) {
      result.push(this[index]);
    }
  }
  return result;
};

const even2 = numbers.myfilter((num) => num % 2 === 0);
console.log(Array.prototype.myfilter);
console.log(even2);
