function alphabetWar(fight) {
  let values = {
    w: -4,
    p: -3,
    b: -2,
    s: -1,
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  };
  let count = 0;

  for (let i = 0; i < fight.length; i++) {
    if (values[fight[i]]) {
      count += values[fight[i]];
    }
  }

  return count > 0
    ? 'Right side wins!'
    : count < 0
    ? 'Left side wins!'
    : "Let's fight again!";
}
