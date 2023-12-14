Array.prototype.square = function () {
  return this.map((element) => Math.pow(element, 2));
};

Array.prototype.cube = function () {
  return this.map((element) => Math.pow(element, 3));
};

Array.prototype.sum = function () {
  let sum = 0;
  this.map((element) => (sum += element));
  return sum;
};
