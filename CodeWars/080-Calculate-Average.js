function findAverage(array) {
  return array.length < 1
    ? 0
    : array.reduce((current, next) => current + next, 0) / array.length;
}
