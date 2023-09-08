function reverseLetter(str) {
  str = str
    .replace(/[^a-z]/g, '')
    .split('')
    .reverse()
    .join('');

  return str;
}

/*
REFACTORED SOLUTION -

For a less time complex method, we can simply apply replace method 
to remove any characters that aren't letters, then just use a for 
loop to read the letters backward
*/
