function squareDigits(num) {
  num = String(num).split('');
  let squared = [];

  num.map((element) => squared.push(Math.pow(Number(element), 2)));

  return Number(squared.join(''));
}
