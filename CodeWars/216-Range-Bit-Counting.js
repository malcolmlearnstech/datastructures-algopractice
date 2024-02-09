function rangeBitCount(a, b) {
  let fromAToB = [];
  let oneCounter = 0;

  for (let i = a; i <= b; i++) {
    fromAToB.push(i.toString(2));
  }

  fromAToB.map(
    (element) =>
      (oneCounter += element.split('').filter((e) => e === '1').length)
  );

  return oneCounter;
}
