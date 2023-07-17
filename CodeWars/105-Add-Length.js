function addLength(str) {
  let result = [];
  str = str.split(' ');

  for (let i = 0; i < str.length; i++) {
    result.push(`${str[i]} ${str[i].length}`);
  }

  return result;
}

/*
REFACTORED SOLUTION -

Instead of initializing an empty and pushing the words and 
their lengths, we can map method to automatically return a 
new array with words and lengths within a template literal.
*/

function addLength(str) {
  str = str.split(' ');

  return str.map((element) => `${element} ${element.length}`);
}
