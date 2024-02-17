function solve(a, b) {
  let aliceScore = 0;
  let bobScore = 0;

  a.map((element, idx) => {
    if (a[idx] > b[idx]) {
      aliceScore++;
    } else if (a[idx] < b[idx]) {
      bobScore++;
    }
  });

  return aliceScore > bobScore
    ? `${aliceScore}, ${bobScore}: Alice made "Kurt" proud!`
    : aliceScore < bobScore
    ? `${aliceScore}, ${bobScore}: Bob made "Jeff" proud!`
    : `${aliceScore}, ${bobScore}: that looks like a "draw"! Rock on!`;
}
