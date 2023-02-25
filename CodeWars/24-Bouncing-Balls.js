function bouncingBall(h, bounce, window) {
  let windowPass = 0;

  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  while (h > window) {
    windowPass++;
    h = h * bounce;
    if (h <= window) {
      break;
    }
    windowPass++;
  }
  return windowPass;
}
