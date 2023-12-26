function timeConvert(num) {
  if (num <= 0) {
    return '00:00';
  }

  let hours = String(Math.floor(num / 60));
  let mins = String(num % 60);

  hours = hours.length > 1 ? hours : '0' + hours;
  mins = mins.length > 1 ? mins : '0' + mins;

  return `${hours}:${mins}`;
}

/*
REFACTORED SOLUTION -

We can alternatively set up our solution as a ternary operator, placing 
the result of the conditional the first expression to execute with the 
rest of the initial solution as the second expression to execute. Within 
the second expression, we can make use of the padStart method to add any 
necessary zeros instead.
*/
