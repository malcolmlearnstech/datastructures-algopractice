function highestRank(arr) {
  let frequency = {};
  let max;
  let highestCount = [];

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (!frequency[element]) {
      frequency[element] = 1;
    } else frequency[element]++;
  }

  max = Math.max(...Object.values(frequency));

  for (const key in frequency) {
    if (frequency[key] === max) {
      highestCount.push(Number(key));
    }
  }

  return highestCount.length <= 1 ? highestCount[0] : Math.max(...highestCount);
}

/*

REFACTORED SOLUTION -

Alternative to using the for in loop of the "frequency" 
object, we can sort the entries in ascending order. 
Using sort method will naturally place the larger number 
at the end of the array, removing the need to check if 
more than one number has the same frequency count.
*/
