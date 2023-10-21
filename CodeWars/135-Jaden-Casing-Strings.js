String.prototype.toJadenCase = function () {
  let string = this.split(' ');

  for (let i = 0; i < string.length; i++) {
    let separated = string[i].split('');
    separated[0] = separated[0].toUpperCase();
    string[i] = separated.join('');
  }
  return string.join(' ');
};
