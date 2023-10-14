function checkThreeAndTwo(array) {
  let count = {};

  for (let i = 0; i < array.length; i++) {
    if (!count[array[i]]) {
      count[array[i]] = 1;
    } else {
      count[array[i]]++;
    }
  }
  if (Object.values(count).length > 2) {
    return false;
  }

  if (
    JSON.stringify(Object.values(count)) === JSON.stringify([3, 2]) ||
    JSON.stringify(Object.values(count)) === JSON.stringify([2, 3])
  ) {
    return true;
  } else return false;
}
