function stringMerge(string1, string2, letter) {
  let letterInString1 = string1.indexOf(letter) + 1;
  let letterInString2 = string2.indexOf(letter) + 1;

  return (
    string1.slice(0, letterInString1) +
    string2.slice(letterInString2, string2.length)
  );
}
