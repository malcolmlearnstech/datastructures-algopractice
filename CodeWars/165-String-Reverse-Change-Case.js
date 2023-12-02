function reverseAndMirror(s1, s2) {
  s2 = s2
    .split('')
    .reverse()
    .map((element) =>
      element === element.toUpperCase()
        ? element.toLowerCase()
        : element.toUpperCase()
    )
    .join('');
  s1 = s1
    .split('')
    .reverse()
    .map((element) =>
      element === element.toUpperCase()
        ? element.toLowerCase()
        : element.toUpperCase()
    )
    .join('');
  s1 = `${s1}${s1.split('').reverse().join('')}`;

  return `${s2}@@@${s1}`;
}
