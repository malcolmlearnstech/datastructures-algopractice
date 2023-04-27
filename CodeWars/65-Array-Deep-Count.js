function deepCount(array) {
  let elementCount = 0;
  let i = 0;

  while (i < array.length) {
    elementCount++;

    if (Array.isArray(array[i])) {
      elementCount += deepCount(a[i]);
    }
    i++;
  }
  return elementCount;
}
