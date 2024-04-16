/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
  // Your code here 
  let result = [];
  if (arr.length === 0) return [];
  arr.forEach(ele => {
    if (Array.isArray(ele)) {
      result.push(...flatten(ele));
      // return flatten(ele);
    } else {
      result.push(ele);
    }
  })
  return result;
}

// flatten([]); // []
// flatten([1, 2]); // [1, 2]
debugger
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]

  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
  