/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

e
***********************************************************************/


function isSorted(arr) {
  // Your code here
  if(arr.length <= 1) return true; 
  if(arr[0] < arr[1]) {
    return isSorted(arr.slice(1));
  } else {
    return false;
  }
}

console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 2, 4, 3, 5])); // false
// isSorted([2, 4, 6, 7, 8]); // true
// isSorted([5, 4, 3, 2, 1]); // fals
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
