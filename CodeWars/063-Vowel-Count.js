function getCount(str) {
  let vowels = 'aeiou';
  let count = 0;
  str = str.split('');
  for (element of str) {
    if (vowels.includes(element)) {
      count++;
    }
  }
  return count;
}

/*
REAFACTORED SOLUTION:
Instead of using a count variable, we can turn the string into an 
array and filter just the existing vowels in our string, then return 
the length of that array.
*/

function getCount(str) {
  let vowels = 'aeiou';
  return str.split('').filter((element) => vowels.includes(element)).length;
}
