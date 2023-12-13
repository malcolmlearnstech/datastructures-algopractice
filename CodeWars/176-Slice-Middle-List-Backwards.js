function reverseMiddle(array) {
  let frontRemoved = array.slice(array.length / 2 - 1);
  frontRemoved.splice(-1 * (array.length / 2 - 1));

  return frontRemoved.reverse();
}
