var number = function (array) {
  let newListing = [];

  for (let i = 0; i < array.length; i++) {
    newListing.push(`${i + 1}: ${array[i]}`);
  }
  return newListing;
};

/*REFACTORED CODE:*/

var number = function (array) {
  let newList = [];
  let i = 0;

  while (i < array.length) {
    newList.push(`${i + 1}: ${array[i]}`);
    i++;
  }

  return newList;
};

/*REFACTORED CODE: */
var number = function (array) {
  return array.map((element, i) => `${i + 1}: ${element}`);
};
