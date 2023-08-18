var checkIfExist = function (arr) {
  for (let left = 0; left < arr.length; left++) {
    let right = arr.length - 1;
    while (left < right) {
      if (arr[left] * 2 === arr[right] || arr[left] === arr[right] * 2) {
        return true;
      }
      right--;
    }
  }
  return false;
};
