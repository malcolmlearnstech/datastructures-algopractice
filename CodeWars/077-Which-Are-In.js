function inArray(array1, array2) {
  let inBothStrings = [];

  for (const element of array1) {
    for (let i = 0; i < array2.length; i++) {
      if (array2[i].includes(element) && !inBothStrings.includes(element)) {
        inBothStrings.push(element);
      }
    }
  }

  return inBothStrings.sort();
}
