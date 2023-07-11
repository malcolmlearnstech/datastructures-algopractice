function smash(words) {
  let sentence = '';

  words.map((element, index) => {
    if (index !== words.length - 1) {
      sentence += element + ' ';
    } else {
      sentence += element;
    }
  });

  return sentence;
}

/*
REFACTORED SOLUTION
*/

function smash(words) {
  return words.join(' ');
}
