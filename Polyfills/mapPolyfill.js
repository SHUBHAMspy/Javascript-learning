// It returns a new mapped/transformed array
// It has a callback function
//  A loop
//  it Applies a transformation

const numbers = [2, 3, 4, 5, 6];

// const squares = numbers.map((num) => num * 2);
// console.log(squares);

Array.prototype.map = null;

Array.prototype.myMap = function (callback) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    result.push(callback(this[index]));
  }
  return result;
};

const squares2 = numbers.myMap((num) => num * 2);
console.log(Array.prototype.myMap);
console.log(squares2);
