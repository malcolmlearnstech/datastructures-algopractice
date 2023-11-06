function incrementString(strng) {
  let endNumber = [];

  if (strng[strng.length - 1].match(/[a-zA-z]/g)) {
    return strng + '1';
  }

  for (let i = strng.length - 1; i >= 0; i--) {
    if (strng[i].match(/[0-9]/g)) {
      endNumber.unshift(strng[i]);
    } else {
      strng = strng.slice(0, i + 1);
      break;
    }
  }
  let endNumberLength = endNumber.length;

  return endNumberLength === strng.length
    ? String(Number(endNumber.join('')) + 1).padStart(endNumberLength, '0')
    : strng +
        String(Number(endNumber.join('')) + 1).padStart(endNumberLength, '0');
}
