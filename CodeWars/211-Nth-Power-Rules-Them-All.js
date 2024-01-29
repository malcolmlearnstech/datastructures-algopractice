function modifiedSum(a, n) {
  let exponentSum = 0;
  let regularSum = 0;

  a.map((element) => {
    exponentSum += Math.pow(element, n);
    regularSum += element;
  });

  return exponentSum - regularSum;
}

/*
REFACTORED SOLUTION -

Instead of using the map() method to iterate through, within the "exponentSum" 
& "regularSum" variables, we can apply the reduce() method and lastly 
caluculate the difference.
*/

function modifiedSum(a, n) {
  let regularSum = a.reduce((acc, current) => acc + current, 0);
  let exponentSum = a.reduce((acc, current) => acc + Math.pow(current, n), 0);

  return exponentSum - regularSum;
}

/*
SECOND REFACTORED SOLUTION -

Alternative to implementing the reduce() method twice, and storing inside of variables, we can make use of the reduce() method once. We can apply the 
logic used in the "regularSum" variable, the main would be within the logic 
for "current". While adding the current element to the third power, we can simultaneously subtract the single value of the element. Setting up reduce() 
in that way allows for us do both required additions and subtractions in 
one method.
*/
