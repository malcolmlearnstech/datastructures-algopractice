function spinWords(string) {
  let array = [];
  string = string.split(' ');
  string.map((element, index) => {
    if (element.length >= 5) {
      array.push(string[index].split('').reverse().join(''));
    } else {
      array.push(element);
    }
  });
  return array.join(' ');
}

/*

REFACTORED SOLUTION:
Instead of creating a new array and pushing the words(reversed or untouched) 
into them, we can make use of the map method and return newly edited words 
as we iterate over them within the mapping.
*/
function spinWords(string) {
  return string
    .split(' ')
    .map((element) => {
      return element.length >= 5
        ? element.split('').reverse().join('')
        : element;
    })
    .join(' ');
}
