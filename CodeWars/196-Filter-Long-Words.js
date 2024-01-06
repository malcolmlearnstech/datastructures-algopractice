function filterLongWords(sentence, n) {
  sentence = sentence.split(' ');

  return sentence.filter((element) => element.length > n);
}

/*
REFACTORED SOLUTION -

For the sake of condensing or just making the solution into a one-liner, 
we can append the filter() logic to the split() applied to "sentence" 
itself and return everything as a whole.
*/

function filterLongWords(sentence, n) {
  return sentence.split(' ').filter((element) => element.length > n);
}
