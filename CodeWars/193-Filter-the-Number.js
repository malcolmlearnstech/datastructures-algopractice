var filterString = function (value) {
  let nums = '';

  value = value.split('').filter((element) => element.match(/[^a-zA-Z]/g));

  for (const element of value) {
    nums += element;
  }
  return parseInt(nums);
};

/*
REFACTORED SOLUTION -

Rather than creating a new string variable and adding the number elements to 
that, manipulate the original input to ensure the numbers return in their correct 
order as well. We still employ the split() and filter() methods, however since we 
are manipulating on the input, we employ the join() method to bring the number 
elements back together. We can then use either Number() or parseInt() to return 
our final value as a number.
*/

var filterString = function (value) {
  return Number(
    value
      .split('')
      .filter((element) => element.match(/[^a-zA-Z]/g))
      .join('')
  );
};
