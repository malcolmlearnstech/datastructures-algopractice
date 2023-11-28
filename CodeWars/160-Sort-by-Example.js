function exampleSort(arr, exampleArr) {
  let result = [];

  for (let i = 0; i < exampleArr.length; i++) {
    let current = exampleArr[i];
    arr
      .filter((element) => element === current)
      .map((element) => result.push(element));
  }
  return result;
}
