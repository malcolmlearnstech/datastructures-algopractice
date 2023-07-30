function capitalize(s) {
  s = s.split('');
  let result = [];

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      s[i] = s[i].toUpperCase();
    }
  }

  s = s.join('');
  result.push(s);
  s = s.toLowerCase().split('');

  for (let i = 0; i < s.length; i++) {
    if (i % 2) {
      s[i] = s[i].toUpperCase();
    }
  }

  result.push(s.join(''));

  return result;
}

/*
REFACTORED SOLUTION -

Instead of using a for loop, then having to reset the input string; we can map thru the input string in two seperate instances. In each instance, we account for the conditions needed for upper casing and lower casing, THEN using join to make the map a string and pushing both modified strings into the result array.
*/

function capitalize(s) {
  let result = [];
  s = s.split('');

  result.push(
    s
      .map((element, index) => {
        if (index % 2 === 0) {
          return element.toUpperCase();
        } else return element;
      })
      .join('')
  );

  result.push(
    s
      .map((element, index) => {
        if (index % 2) {
          return element.toUpperCase();
        } else return element;
      })
      .join('')
  );

  return result;
}
