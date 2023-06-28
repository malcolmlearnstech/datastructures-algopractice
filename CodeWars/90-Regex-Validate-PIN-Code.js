function validatePIN(pin) {
  let numberSet = '0123456789';

  if (pin.length === 4 || pin.length === 6) {
    for (let i = 0; i < pin.length; i++) {
      if (!numberSet.includes(pin[i])) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}
