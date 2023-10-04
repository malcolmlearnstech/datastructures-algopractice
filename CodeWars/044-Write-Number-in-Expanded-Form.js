function expandedForm(num) {
  num = String(num).split('');
  let separated = '';
  let power = num.length - 1;

  for (let i = 0; i < num.length; i++) {
    num[i] = String(num[i] * Math.pow(10, power));
    power--;
  }

  num = num.filter((element) => element !== '0');

  while (num.length) {
    separated += num[0];
    num.shift();

    if (num.length === 0) {
      break;
    }
    separated += ' + ';
  }
  return separated;
}

/*  REFACTORED CODE:
 */
function expandedForm(num) {
  num = String(num).split('');
  let separated = '';
  let power = num.length - 1;

  for (let i = 0; i < num.length; i++) {
    num[i] = String(num[i] * Math.pow(10, power));
    power--;
  }

  num = num.filter((element) => element !== '0');

  while (num.length) {
    separated += num[0];
    num.shift();

    if (num.length !== 0) {
      separated += ' + ';
    }
  }
  return separated;
}

/*  REFACTORED CODE:
 */
function expandedForm(num) {
  num = String(num).split('');
  let power = num.length - 1;

  for (let i = 0; i < num.length; i++) {
    num[i] = String(num[i] * Math.pow(10, power));
    power--;
  }

  return num.filter((element) => element !== '0').join(' + ');
}
