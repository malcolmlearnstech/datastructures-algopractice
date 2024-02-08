function toNato(words) {
  let translatedString = '';

  words
    .split('')
    .filter((element) => element !== ' ')
    .map((element) => {
      if (NATO[element.toUpperCase()]) {
        translatedString += NATO[element.toUpperCase()];
      } else translatedString += element;

      if (element !== ' ') {
        translatedString += ' ';
      }
    });

  return translatedString.trimEnd();
}
