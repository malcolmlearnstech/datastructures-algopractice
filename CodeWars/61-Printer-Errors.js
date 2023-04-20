function printerErrors(s) {
  let notColors = 'nopqrstuvwxyz';
  let count = 0;
  let allPrint = s.length;
  let output = '';
  for (let i = 0; i < s.length; i++) {
    if (notColors.includes(s[i])) {
      count++;
    }
  }
  return output + count + '/' + allPrint;
}
