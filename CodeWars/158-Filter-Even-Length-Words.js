function filterEvenLengthWords(words) {
  let array = [];

  words.map((element) => {
    if (element.length % 2 === 0) {
      array.push(element);
    }
  });
  return array;
}
