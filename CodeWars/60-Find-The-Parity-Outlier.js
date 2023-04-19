function findOutlier(integers) {
  let evenCount = integers.filter((element) => element % 2 === 0);

  return evenCount.length > 1
    ? integers.filter((element) => element % 2 !== 0)[0]
    : evenCount[0];
}
