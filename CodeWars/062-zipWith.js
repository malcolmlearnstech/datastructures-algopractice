function zipWith(fn, a0, a1) {
  let result = [];
  let iterate = Math.min(a0.length, a1.length);

  for (let i = 0; i < iterate; i++) {
    result.push(fn(a0[i], a1[i]));
  }
  return result;
}
