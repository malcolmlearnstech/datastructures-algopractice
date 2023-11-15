function solve(s) {
  let max = 0;
  let rackUp = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char.match(/[aeiou]/g)) {
      rackUp++;
    } else {
      max = Math.max(max, rackUp);
      rackUp = 0;
    }
  }

  return max;
}
