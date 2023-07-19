var reverse = function (x) {
  let result = [];

  if (Math.sign(x) === -1) {
    x = x * -1;
    x = String(x).split('');

    for (let i = x.length - 1; i >= 0; i--) {
      result.push(x[i]);
    }

    if (result[0] === '0') {
      result.shift();
    }

    result = Number(result.join('')) * -1;

    if (result > Math.pow(-2, 31)) {
      return result;
    } else {
      return 0;
    }
  } else {
    x = String(x).split('');

    for (let i = x.length - 1; i >= 0; i--) {
      result.push(x[i]);
    }

    if (result[0] === '0') {
      result.shift();
    }

    result = Number(result.join(''));

    if (result < Math.pow(2, 31)) {
      return result;
    } else {
      return 0;
    }
  }
};
