String.prototype.toJadenCase = function () {
  let string = this.split(' ');

  for (let i = 0; i < string.length; i++) {
    let separated = string[i].split('');
    separated[0] = separated[0].toUpperCase();
    string[i] = separated.join('');
  }
  return string.join(' ');
};

/*
REFACTORED SOLUTION -

Alternative to the for loop, we can split the string and map 
through each word element. Rather than doing an additional split 
on the characters of each work to then capitalize the first 
letter and then joining, we simply refer to the first letter and 
capitalize then concatenate a slice of the rest of the word. We 
then rejoin the whole of the array of words.
*/
