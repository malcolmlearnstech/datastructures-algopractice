function checkVowel(string, position) {
  if (position > string.length - 1 || position < 0) {
    return false;
  }
  return string[position].match(/[aeiou]/gi) ? true : false;
}

/*
REFACTOR SOLUTION -

Alternative to match method, we can type out all vowels 
(upper & lower case) in a string and use the includes 
method instead.
*/

function checkVowel(string, position) {
  return 'aeiouAEIOU'.includes(string[position]) ? true : false;
}
