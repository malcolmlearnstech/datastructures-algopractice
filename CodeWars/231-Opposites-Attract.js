function lovefunc(flower1, flower2) {
  if (flower1 % 2 === 1) {
    if (flower2 % 2 === 0) {
      return true;
    }
    return false;
  } else {
    if (flower2 % 2 === 1) {
      return true;
    }
    return false;
  }
}
