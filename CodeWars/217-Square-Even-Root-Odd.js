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
