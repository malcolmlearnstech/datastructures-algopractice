function stringTransformer(str) {
  str = str.split(' ').reverse();

  return str
    .map((element) =>
      element
        .split('')
        .map((item) => {
          return item === item.toUpperCase()
            ? item.toLowerCase()
            : item.toUpperCase();
        })
        .join('')
    )
    .join(' ');
}

/*
REFACTORED SOLUTION - 

Rather than employing the map method twice, we can 
switch the order of the words, split the characters 
up and then use map once to go over the characters. 
Then finally employ the join method once at the end.
*/

function stringTransformer(str) {
  str = str.split(' ').reverse().join(' ').split('');

  return str
    .map((element) =>
      element === element.toUpperCase()
        ? element.toLowerCase()
        : element.toUpperCase()
    )
    .join('');
}
