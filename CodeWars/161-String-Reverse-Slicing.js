function reverseSlice(str) {
  let array = [];
  str = str.split('').reverse();

  while (str.length > 0) {
    array.push(str.join(''));
    str.shift();
  }
  return array;
}
