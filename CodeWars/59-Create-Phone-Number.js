function createPhoneNumber(numbers) {
  let area = `${numbers[0]}${numbers[1]}${numbers[2]}`;
  let three = `${numbers[3]}${numbers[4]}${numbers[5]}`;
  let four = `${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;

  return `(${area}) ${three}-${four}`;
}

/*
REFACTORED SOLUTION:

Instead of typing every index of each number in the string 
interpolation, we can use slice to pull out the chunks of 
number needed for each section. Then use join to turn each 
section into a string. Lastly, we still employ string interpolation 
in the return.
*/

function createPhoneNumber(numbers) {
  let area = numbers.slice(0, 3).join('');
  let three = numbers.slice(3, 6).join('');
  let four = numbers.slice(6).join('');

  return `(${area}) ${three}-${four}`;
}

/*
REFACTORED SOLUTION:

Instead of taking chunks, we can interate thru the 
giving number as a string and replace each part of 
an initialized string of symbols, then return.
*/

function createPhoneNumber(numbers) {
  let phoneNumber = '(###) ###-####';

  for (let i = 0; i < numbers.length; i++) {
    phoneNumber = phoneNumber.replace('#', numbers[i]);
  }

  return phoneNumber;
}
