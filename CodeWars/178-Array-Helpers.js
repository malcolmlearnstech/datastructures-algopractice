Array.prototype.square = function () {
  return this.map((element) => Math.pow(element, 2));
};

Array.prototype.cube = function () {
  return this.map((element) => Math.pow(element, 3));
};
