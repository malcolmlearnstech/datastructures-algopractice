function solution(string) {
  let capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  string = string.split('');

  for (let i = 0; i < string.length; i++) {
    if (capitals.includes(string[i])) {
      string.splice(i, 0, ' ');
      i += 2;
    }
  }
  return string.join('');
}
