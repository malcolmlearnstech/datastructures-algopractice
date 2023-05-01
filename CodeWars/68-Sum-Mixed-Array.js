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

return x
  .map((element) => Number(element))
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

/**/
