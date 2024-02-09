function rangeBitCount(a, b) {
  let fromAToB = [];
  let oneCounter = 0;

  for (let i = a; i <= b; i++) {
    fromAToB.push(i.toString(2));
  }

  fromAToB.map(
    (element) =>
      (oneCounter += element.split('').filter((e) => e === '1').length)
  );

  return oneCounter;
}

/*
REFACTORED SOLUTION -

Instead of having to create an array and then mapping thru that array, we can create 
a singular new variable, using only "oneCounter". Still applying the "toString(2)" 
logic within the for-loop, we can emply the replace() method; removing all 0's as 
binary only uses 1s and 0s. Then we simply use ".length" to check the number of 1s 
and add that count to our "oneCounter" variable.
*/
