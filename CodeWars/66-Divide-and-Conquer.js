function divCon(x) {
  let nonStrings = 0;
  let strings = 0;
  for (const element of x) {
    if (typeof element !== 'string') {
      nonStrings += element;
    } else {
      strings += parseInt(element);
    }
  }
  return nonStrings - strings;
}
