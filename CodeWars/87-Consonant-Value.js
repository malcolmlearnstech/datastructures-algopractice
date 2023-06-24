function consonantSolve(s) {
  let alphabet = ' abcdefghijklmnopqrstuvwxyz';
  let max = 0;
  s = s.split(/[aeiou]/g);
  s = s.filter((element) => element !== '');

  s.map((element) => {
    let sum = 0;

    for (let i = 0; i < element.length; i++) {
      sum += alphabet.indexOf(element[i]);
    }
    max = Math.max(max, sum);
  });

  return max;
}
