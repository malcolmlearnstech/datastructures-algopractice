const findAll = (array, n) => {
  let matches = [];
  array.map((element, index) => {
    if (element === n) {
      matches.push(index);
    }
  });
  return matches;
};
