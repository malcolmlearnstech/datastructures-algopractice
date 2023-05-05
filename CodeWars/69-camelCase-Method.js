String.prototype.camelCase = function () {
  let brokenUp = this.split(' ');

  if (this.length) {
    for (let i = 0; i < brokenUp.length; i++) {
      brokenUp[i] = brokenUp[i][0].toUpperCase() + brokenUp[i].slice(1);
    }
  } else {
    return '';
  }

  return brokenUp.join('');
};
