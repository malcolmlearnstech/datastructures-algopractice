var numberFormat = function (number) {
  let sign = '';
  let digitSet = [];
  let allSets = [];

  number = String(number).split('');

  if (number[0] === '-') {
    sign += number.shift();
  }

  for (let i = number.length - 1; i >= 0; i--) {
    digitSet.unshift(number[i]);

    if (digitSet.length === 3) {
      allSets.unshift(digitSet.join(''));
      digitSet = [];
    }
  }

  if (digitSet.length > 0) {
    allSets.unshift(digitSet.join(''));
  }

  return sign.length > 0 ? sign + allSets.join(',') : allSets.join(',');
};
