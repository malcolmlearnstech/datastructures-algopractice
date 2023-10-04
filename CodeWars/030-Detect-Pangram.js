function isPangram(string) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let cleanString = string.toLowerCase();

  for (letter of alphabet) {
    if (cleanString.includes(letter)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

// REFACTORED/SLIGHTLY OPTIMIZED VERSION OF ORIGINAL SOLUTION

function isPangram(string) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let cleanString = string.toLowerCase();

  for (letter of alphabet) {
    if (!cleanString.includes(letter)) {
      return false;
    }
  }
  return true;
}
