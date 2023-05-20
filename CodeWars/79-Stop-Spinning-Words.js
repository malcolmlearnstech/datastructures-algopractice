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
