function mergeArrays(arr1, arr2) {
  let merge = [];
  arr1.map((element) => merge.push(element));
  arr2.map((element) => {
    if (!merge.includes(element)) {
      merge.push(element);
    }
  });

  return merge.sort((a, b) => a - b);
}

/*
REFACTORED SOLUTION -

To account for duplicate numbers in both arrays, we can also make use of the filter method. 
And apparently, there is a "Concat" method for bringing arrays together. We can use that 
to eliminate the use of map in the first solution. After that, all we have to do is 
append the sort method for a one-liner.
*/

function mergeArrays(arr1, arr2) {
  return arr1
    .filter((element) => !arr2.includes(element))
    .concat(arr2)
    .sort((a, b) => a - b);
}
