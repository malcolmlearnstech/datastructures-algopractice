function accum(s) {
  let j = 0;
  s = s.toUpperCase().split('');
  for (let i = 0; i < s.length; i++) {
    s[i] = `${s[i]}${s[i].toLowerCase().repeat(j)}`;
    j++;
  }
  return s.join('-');
}
