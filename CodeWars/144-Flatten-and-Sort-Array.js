function flattenAndSort(array) {
  let resultArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      array[i].map((element) => {
        resultArray.push(element);
      });
    }
  }

  return resultArray.sort((a, b) => a - b);
}
