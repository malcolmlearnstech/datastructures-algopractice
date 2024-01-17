var splitInParts = function (s, partLength) {
  let array = [];
  s = s.split('');

  while (s.length > 0) {
    let chunk = s.slice(0, partLength).join('');
    array.push(chunk);
    s.splice(0, partLength);
  }

  return array.join(' ');
};

/*
REFACTORED SOLUTION -

Instead of making a variable holding the slice, we can employ the splice 
method within the array push and then use join method. This would take a 
chunk of the string while also manipulating the original array and save 
us two steps.
*/

var splitInParts = function (s, partLength) {
  let array = [];
  s = s.split('');

  while (s.length > 0) {
    let chunk = s.slice(0, partLength).join('');
    array.push(chunk);
    s.splice(0, partLength);
  }

  return array.join(' ');
};
