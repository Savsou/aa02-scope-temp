/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the function to a variable using the const keyword and
arrow function syntax.

**Hint**: Use rest parameter syntax!

Examples:
arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
arrowRestSum(0); // => 0
***********************************************************************/

const arrowRestSum = (...nums) => {
  //console.log(nums) comes out to be [3, 5, 6]
  let sum = nums.reduce((acc, num) => {
    return acc + num
  }, 0)

  return sum;
}

//arrowRestSum(3,5,6);
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowRestSum;
} catch (e) {
  module.exports = null;
}
