function spinAround(turns) {
  let start = 0;

  for (let i = 0; i < turns.length; i++) {
    turns[i] === 'right' ? (start += 90) : (start -= 90);
  }

  return start > 0 ? Math.floor(start / 360) : Math.abs(Math.ceil(start / 360));
}
