const numbers = [2, 3, 4, 5, 4];
console.log(numbers);
// It just iterates on the elements / just a for loop
// Takes a callback and simply runs for each element
// Does not return anything

// numbers.forEach((element) => {
//   console.log(element + 2);
// });

Array.prototype.forEach = null;

Array.prototype.myForEach = function (callback) {
  for (let index = 0; index < this.length; index++) {
    callback(this[index]);
  }
};

numbers.myForEach((element) => {
  console.log(element + 2);
});
