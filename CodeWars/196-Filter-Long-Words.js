function filterLongWords(sentence, n) {
  sentence = sentence.split(' ');

  return sentence.filter((element) => element.length > n);
}
