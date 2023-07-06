function stantonMeasure(array) {
  let n = 0;
  let nCount = 0;

  array.map((element) => {
    if (element === 1) {
      n++;
    }
  });

  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      nCount++;
    }
  }
  return nCount;
}
