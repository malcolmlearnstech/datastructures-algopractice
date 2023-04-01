var number = function (array) {
  let newListing = [];

  for (let i = 0; i < array.length; i++) {
    newListing.push(`${i + 1}: ${array[i]}`);
  }
  return newListing;
};
