function capitalize(s) {
  s = s.split('');
  let result = [];

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      s[i] = s[i].toUpperCase();
    }
  }

  s = s.join('');
  result.push(s);
  s = s.toLowerCase().split('');

  for (let i = 0; i < s.length; i++) {
    if (i % 2) {
      s[i] = s[i].toUpperCase();
    }
  }

  result.push(s.join(''));

  return result;
}
