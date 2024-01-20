function bump(x) {
  let bumpCount = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'n') {
      bumpCount++;
    }
  }

  return bumpCount > 15 ? 'Car Dead' : 'Woohoo!';
}
