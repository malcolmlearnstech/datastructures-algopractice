function flattenAndSort(array) {
  let resultArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      array[i].map((element) => {
        resultArray.push(element);
      });
    }
  }

  return resultArray.sort((a, b) => a - b);
}

/*
REFACTORED SOLUTION -

To decrease time complexity, we can remove the use of map 
method. Using our knowledge that this input will only be a 
two-dimensional array, we can elect to push a shallow copy 
of the current array element into our resultArray to later 
have the integers sorted.
*/

function flattenAndSort(array) {
  let resultArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      resultArray.push(...array[i]);
    }
  }

  return resultArray.sort((a, b) => a - b);
}
