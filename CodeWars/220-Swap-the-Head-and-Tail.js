function swapHeadAndTail(arr) {
  let swappedArray = [];
  let headSplice;
  let tailSplice;
  if (arr.length % 2 === 0) {
    let spliceAmount = arr.length / 2;
    headSplice = arr.splice(0, spliceAmount);
    tailSplice = arr.splice(0, spliceAmount);
  } else {
    let spliceAmount = Math.floor(arr.length / 2);
    headSplice = arr.splice(0, spliceAmount);
    tailSplice = arr.splice(-1 * spliceAmount);
  }

  tailSplice.map((e) => swappedArray.push(e));
  arr.map((e) => swappedArray.push(e));
  headSplice.map((e) => swappedArray.push(e));

  return swappedArray;
}
