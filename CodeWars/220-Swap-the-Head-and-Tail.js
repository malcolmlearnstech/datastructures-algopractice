function swapHeadAndTail(arr) {
  let swappedArray = [];
  let headSplice;
  let tailSplice;
  if (arr.length % 2 === 0) {
    let spliceAmount = arr.length / 2;
    headSplice = arr.splice(0, spliceAmount);
    tailSplice = arr.splice(0, spliceAmount);
  } else {
    let spliceAmount = Math.floor(arr.length / 2);
    headSplice = arr.splice(0, spliceAmount);
    tailSplice = arr.splice(-1 * spliceAmount);
  }

  tailSplice.map((e) => swappedArray.push(e));
  arr.map((e) => swappedArray.push(e));
  headSplice.map((e) => swappedArray.push(e));

  return swappedArray;
}

/*
REFACTORED SOLUTION -

By making use of the spread operator, we can eliminate the need for the 
"swappedArray" variable. This also allows us to remove all three 
instances of mapping before our final return (tailSplice, arr, & 
headSplice). With spread operator, we can electively return a spread of 
"tailSplice", "arr", & "headSplice" depending on whether or not the input 
"arr" is split evenly. We can also make use of a ternary operator 
depending on that result of arr's length after the split. In either case, 
our end result will be an array with a spread of each variable's elements 
enclosed.
*/

function swapHeadAndTail(arr) {
  let headSplice;
  let tailSplice;

  if (arr.length % 2 === 0) {
    let spliceAmount = arr.length / 2;
    headSplice = arr.splice(0, spliceAmount);
    tailSplice = arr.splice(0, spliceAmount);
  } else {
    let spliceAmount = Math.floor(arr.length / 2);
    headSplice = arr.splice(0, spliceAmount);
    tailSplice = arr.splice(-1 * spliceAmount);
  }

  return arr.length > 0
    ? [...tailSplice, ...arr, ...headSplice]
    : [...tailSplice, ...headSplice];
}
