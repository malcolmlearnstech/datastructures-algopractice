function pairOfShoes(shoes) {
  let shoeSizes = {};

  for (let element of shoes) {
    if (!shoeSizes[element[1]]) {
      shoeSizes[element[1]] = [element[0]];
    } else {
      shoeSizes[element[1]].push(element[0]);
    }
  }

  for (let key in shoeSizes) {
    let zeros = shoeSizes[key].filter((element) => element === 0);
    let ones = shoeSizes[key].filter((element) => element === 1);

    if (zeros.length !== ones.length) {
      return false;
    }
  }

  return true;
}
