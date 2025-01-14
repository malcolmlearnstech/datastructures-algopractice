function correct(string) {
  string = string.split('');
  let correct = '';

  string.map((element) => {
    correct +=
      element === '5'
        ? 'S'
        : element === '0'
        ? 'O'
        : element === '1'
        ? 'I'
        : element;
  });
  return correct;
}

/*
REFACTORED SOLUTION -

After some reading and refamiliarizing, seeing that the string.replace() 
method can be applied. This require the need to create a new variable and 
add the characters to a new variable while mapping. Using replace() allows 
to return the string from the original input variable, going thru the 
string and changing the characters matching your criteria, while 
maintaining its original character order.

*/

function correct(string) {
  return string.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I');
}
