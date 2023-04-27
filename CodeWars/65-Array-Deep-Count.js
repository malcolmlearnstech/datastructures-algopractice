function deepCount(array) {
  let elementCount = 0;
  let i = 0;

  while (i < a.length) {
    elementCount++;

    if (Array.isArray(a[i])) {
      elementCount += deepCount(a[i]);
    }
    i++;
  }
  return elementCount;
}
