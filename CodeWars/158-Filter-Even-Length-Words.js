function filterEvenLengthWords(words) {
  let array = [];

  words.map((element) => {
    if (element.length % 2 === 0) {
      array.push(element);
    }
  });
  return array;
}

/*
REFACTORED SOLUTION -

Instead of creating a new variable and slightly increasing 
space complexity, we can make use of the filter method in 
our return; while using the given condition from the problem 
as our filtering rule.
*/

function filterEvenLengthWords(words) {
  return words.filter((element) => element.length % 2 === 0);
}
