function findShort(s) {
  let counts = [];
  s = s.split(' ').map((element) => counts.push(element.length));

  return Math.min(...counts);
}
