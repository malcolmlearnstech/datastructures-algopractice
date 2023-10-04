function deleteNth(arr, n) {
  let nCount = {};
  let returnArray = [];

  arr.forEach((element) => {
    if (!nCount[String(element)]) {
      nCount[String(element)] = 1;
      returnArray.push(element);
    } else if (nCount[String(element)] && nCount[String(element)] < n) {
      nCount[String(element)] += 1;
      returnArray.push(element);
    }
  });
  console.log(nCount);
  return returnArray;
}
