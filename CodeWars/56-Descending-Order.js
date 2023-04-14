function descendingOrder(n) {
  let numConvert = String(n);

  numConvert = numConvert.split('').sort((a, b) => b - a);

  return Number(numConvert.join(''));
}
