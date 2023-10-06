function solve(a, b) {
  let matches = [];

  b.forEach((element) => {
    let match = 0;
    for (let i = 0; i < a.length; i++) {
      if (element === a[i]) {
        match++;
      }
    }
    matches.push(match);
  });
  return matches;
}
