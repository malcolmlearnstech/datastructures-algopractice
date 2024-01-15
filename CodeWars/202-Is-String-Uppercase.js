String.prototype.isUpperCase = function () {
  let string = this.match(/[a-zA-Z]/g);

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toLowerCase()) {
      return false;
    }
  }
  return true;
};
