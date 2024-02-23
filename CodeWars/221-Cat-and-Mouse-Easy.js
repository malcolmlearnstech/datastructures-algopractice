function catMouse(x) {
  x = x.split('').filter((element) => element === '.');

  return x.length > 3 ? 'Escaped!' : 'Caught!';
}
