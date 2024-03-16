function squareAndFindEvens(numbers) {
  var squares = number.map(function (num) {
    return num ** 2;
  });
  var evens = squares.filter(function (square) {
    return square % 2 === 0;
  });
  return evens;
}
const squareAndFindEvens = (numbers) => numbers.map((val) => val ** 2).filter((square) => square % 2 === 0);
console.log;

const double = (arr) => arr.map((val) => val * 2);
console.log(double([2, 4]));
