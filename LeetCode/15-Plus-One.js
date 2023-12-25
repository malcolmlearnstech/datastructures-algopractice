var plusOne = function (digits) {
  digits[digits.length - 1] = digits[digits.length - 1] + 1;

  if (digits.length === 1 && digits[0] > 9) {
    digits[0] = 0;
    digits.unshift(1);
  }

  if (digits[digits.length - 1] > 9) {
    digits[digits.length - 1] = 0;

    for (let i = digits.length - 2; i >= 0; i--) {
      digits[i]++;
      if (digits[i] <= 9) {
        break;
      } else {
        digits[i] = 0;
      }
    }
  }

  if (digits[0] === 0) {
    digits.unshift(1);
  }

  return digits;
};
