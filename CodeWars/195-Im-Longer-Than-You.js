function longer(s) {
  return s
    .split(' ')
    .sort()
    .sort((a, b) => a.length - b.length)
    .join(' ');
}
