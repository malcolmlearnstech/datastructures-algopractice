function solve(s) {
  let lowers = 0;
  let uppers = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z]/g)) {
      lowers++;
    } else uppers++;
  }

  if (lowers > uppers) {
    return s.toLowerCase();
  } else if (uppers > lowers) {
    return s.toUpperCase();
  } else return s.toLowerCase();
}
