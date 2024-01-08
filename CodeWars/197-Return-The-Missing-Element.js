function getMissingElement(superImportantArray) {
  superImportantArray = superImportantArray.sort();

  for (const element of superImportantArray) {
    if (
      !superImportantArray.includes(element + 1) &&
      element + 1 >= 0 &&
      element + 1 <= 9
    ) {
      return element + 1;
    } else if (
      !superImportantArray.includes(element - 1) &&
      element - 1 >= 0 &&
      element - 1 <= 9
    ) {
      return element - 1;
    }
  }
}

/*
REFACTORED SOLUTION -

Instead all the conditionals, we can just count from 0 to 9, as the prompt 
indicates all numbers that will be included. All we have to do from there is 
check if the number we're currently iterating is included in the input array. 
Which ever number that returns false is the number we will return at the end 
of our function.
*/

function getMissingElement(superImportantArray) {
  for (let i = 0; i < 10; i++) {
    if (!superImportantArray.includes(i)) {
      return i;
    }
  }
}
