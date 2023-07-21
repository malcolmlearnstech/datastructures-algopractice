function mxdiflg(a1, a2) {
  let a1LargestA2Smallest;
  let a2LargestA1Smallest;

  if (
    (a1.length === 0 && a2.length === 0) ||
    a1.length === 0 ||
    a2.length === 0
  ) {
    return -1;
  } else {
    a1 = a1.map((element) => element.length);
    a2 = a2.map((element) => element.length);

    a1LargestA2Smallest = Math.abs(Math.max(...a1) - Math.min(...a2));
    a2LargestA1Smallest = Math.abs(Math.max(...a2) - Math.min(...a1));
  }

  return Math.max(a1LargestA2Smallest, a2LargestA1Smallest);
}
