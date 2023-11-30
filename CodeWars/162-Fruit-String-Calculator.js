function calculate(string) {
  string = string.split(' ');
  let nums = string
    .filter((element) => element.match(/[\d]/g))
    .map((element) => (element = Number(element)));

  if (string.includes('gains')) {
    return nums[0] + nums[1];
  } else if (string.includes('loses')) {
    return nums[0] - nums[1];
  }
}

/*
REFACTORED SOLUTION - 

After being exposed to the "eval" function, we see 
that we can alternatively keep the numbers as strings 
rather than updating them into numbers (like our map 
dictates). We can then declare a "math" variable then 
place all elements of our mathematic string in a template 
literally with the "eval" function wrapped around it.
*/
