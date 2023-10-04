/* 

Q - Complete the solution so that it returns true if the first argument(string) 
    passed in ends with the 2nd argument (also a string). 

Example 1:

solution('abc', 'bc') // returns true

Example 2:

solution('abc', 'd') // returns false
*/

function solution(str1, str2) {
  let str1Start = str1.length - str2.length;
  let str2End = str2.length - 1;

  for (let i = str1.length - 1; i >= str1Start; i--) {
    if (str1[i] !== str2[str2End]) {
      return false;
    }

    str2End;
  }

  return true;
}
