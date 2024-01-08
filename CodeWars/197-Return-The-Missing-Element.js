function getMissingElement(superImportantArray) {
  superImportantArray = superImportantArray.sort();

  for (const element of superImportantArray) {
    if (
      !superImportantArray.includes(element + 1) &&
      element + 1 >= 0 &&
      element + 1 <= 9
    ) {
      return element + 1;
    } else if (
      !superImportantArray.includes(element - 1) &&
      element - 1 >= 0 &&
      element - 1 <= 9
    ) {
      return element - 1;
    }
  }
}
