Array.prototype.square = function () {
  return this.map((element) => Math.pow(element, 2));
};
