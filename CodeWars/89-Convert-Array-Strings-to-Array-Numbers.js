function toNumberArray(stringArray) {
  let newArray = [];

  for (let i = 0; i < stringArray.length; i++) {
    newArray.push(Number(stringArray[i]));
  }

  return newArray;
}

/*
REFACTORED SOLUTION -

We can use the map method as an alternative to using the for loop.
*/

function toNumberArray(stringArray) {
  stringArray = stringArray.map((element) => Number(element));

  return stringArray;
}
