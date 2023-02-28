function XO(str) {
  let array = str.toLowerCase().split('');
  let xCheck = array.filter((letter) => letter === 'x');
  let oCheck = array.filter((letter) => letter === 'o');

  if (xCheck.length === oCheck.length) {
    return true;
  } else return false;
}
