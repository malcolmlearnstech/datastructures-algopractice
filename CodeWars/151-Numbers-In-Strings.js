function solve(s) {
  let letters = /[a-z]/g;
  let max = 0;

  s.split(letters).map((element) => {
    if (element !== null && Number(element) > max) {
      max = Number(element);
    }
  });

  return max;
}
