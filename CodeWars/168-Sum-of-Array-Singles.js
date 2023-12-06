function repeats(arr) {
  let freq = {};
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!freq[arr[i]]) {
      freq[arr[i]] = 1;
    } else freq[arr[i]]++;
  }

  for (const element in freq) {
    if (freq[element] === 1) {
      num += Number(element);
    }
  }
  return num;
}

/*
REFACTORED SOLUTION - 

Instead of creating an object that will hold information 
and need to be mapped thru (increasing time complexity), 
we can keep the number that will be added to and map thru 
the input array. While mapping, we check for the position 
of current element and check to see if it is only in one 
position of the array.
*/

function repeats(arr) {
  let num = 0;

  arr.map((element) => {
    if (arr.indexOf(element) === arr.lastIndexOf(element)) {
      num += element;
    }
  });
  return num;
}

/*
SECOND REFACTORED SOLUTION - 

Using the condition from within the refactor's map, we 
can redefine the input array with a filter singling out 
only the elements that appear once. THEN we can map and 
add the two numbers to a zero initialized variable.
*/

function repeats(arr) {
  let num = 0;
  arr = arr.filter(
    (element) => arr.indexOf(element) === arr.lastIndexOf(element)
  );
  arr.map((element) => (num += element));
  return num;
}
