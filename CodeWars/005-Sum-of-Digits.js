/* 

Q - 

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, 
continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
*/

function digitalRoot(n) {
  let numString = String(n);
  let strSplit = numString.split('');
  console.log(strSplit);
  let number = 0;

  if (strSplit.length === 1) {
    return Number(strSplit[0]);
  }

  while (strSplit.length > 1) {
    for (const num of strSplit) {
      number += Number(num);
    }
    let testNum = String(number);
    number = 0;
    strSplit = testNum.split('');
  }

  return Number(strSplit[0]);
}
