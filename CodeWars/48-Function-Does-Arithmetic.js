function arithmetic(a, b, operator) {
  if (operator === 'add') {
    return a + b;
  } else if (operator === 'subtract') {
    return a - b;
  } else if (operator === 'multiply') {
    return a * b;
  } else if (operator === 'divide') {
    return a / b;
  }
}

/*REFACTORED SOLUTION:

As we are using a series of conditionals, an alternative available would be to 
employ a switch statement and evaluate each potential operator case.
*/

function arithmetic(a, b, operator) {
  switch (operator) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
  }
}

/*REFACTORED SOLUTION:

We can also store the math associated with each word operator as values to the related keys. 
The operator options will be stored as the related keys. All we do in the return is output 
the end result of performing the action on our "a" and "b" parameters.
*/
function arithmetic(a, b, operator) {
  let operations = {
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b,
  };
  return operations[operator];
}
