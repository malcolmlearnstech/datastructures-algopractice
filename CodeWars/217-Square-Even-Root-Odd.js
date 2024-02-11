const sumSquareEvenRootOdd = (ns) => {
  let newList = ns.map((element) => {
    if (element % 2 === 0) {
      return Math.pow(element, 2);
    } else return Math.sqrt(element);
  });

  return Number(
    newList.reduce((acc, currentVal) => acc + currentVal).toFixed(2)
  );
};

/*
REFACTORED SOLUTION -

To shorten the logic laid out within our map(), we can employ the ternary operator, 
which will perform identically to the logic of the if-else setup. Additionally at 
our final return, we can employ the Unary Operator("+"), to convert the result our 
reduce() and appeneded toFixed() back into a number from a string.
*/

function sumSquareEvenRootOdd(ns) {
  let newList = ns.map((element) => {
    return element % 2 === 0 ? Math.pow(element, 2) : Math.sqrt(element);
  });

  return +newList.reduce((acc, currentVal) => acc + currentVal).toFixed(2);
}

/*
SECOND REFACTORED SOLUTION -

To avoid creating a new variable ("newList"), we can append the logic used for reduce() 
to the map() logic. This is because map() naturally returns array and we only need to 
use reduce() from there to figure out the full sum. We can still use the unary operator 
as well, it just gets moved to the very beginning of the return since everything is 
appended.
*/

function sumSquareEvenRootOdd(ns) {
  return +ns
    .map((num) => {
      return num % 2 === 0 ? Math.pow(num, 2) : Math.sqrt(num);
    })
    .reduce((acc, currentVal) => acc + currentVal)
    .toFixed(2);
}
