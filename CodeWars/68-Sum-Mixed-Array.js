function sumMix(x) {
  let sum = 0;

  x.forEach((element) => {
    sum += parseInt(element);
  });
  return sum;
}

/*
REFACTORED SOLUTION:

Instead of forEach method, we can use map to iterate over each element 
and use Number method to convert every element. Once all numbers are 
converted, we then use reduce method to iterate over each number and add 
them up, starting with a initial value of 0.*/

function sumMix(x) {
  return x
    .map((element) => Number(element))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

/*
REFACTORED SOLUTION:

As an alternative to Number method and parseInt method, we can also use 
the unary plus on each element while mapping. Additionally, not indicating 
a initial value in our reduce method will automatically set the initial 
value to 0. 
*/

function sumMix(x) {
  return x
    .map((element) => +element)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
}
