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

Array.prototype.average = function () {
  let sum = 0;
  this.map((element) => (sum += element));
  return sum / this.length;
};

Array.prototype.even = function () {
  return this.filter((element) => element % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter((element) => element % 2 !== 0);
};
