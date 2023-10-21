function capitalsFirst(str) {
  let string = [];
  let alphabet = /[a-zA-z]/g;
  str = str.split(' ');

  str.map((element) => {
    if (element[0].match(alphabet) && element[0] === element[0].toUpperCase()) {
      string.push(element);
    }
  });

  str.map((element) => {
    if (element[0].match(alphabet) && element[0] === element[0].toLowerCase()) {
      string.push(element);
    }
  });

  return string.join(' ');
}
