/*
Q - Given a string of words, you need to find the highest scoring word.
    Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
    For example, the score of abad is 8 (1 + 2 + 1 + 4).
    You need to return the highest scoring word as a string.
    If two words score the same, return the word that appears earliest in the original string.
    All letters will be lowercase and all inputs will be valid.

 */

function high(x) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let separateWords = x.split(' ');
  let wordCounts = [];
  let count = 0;
  //console.log(separateWords)

  //separateWords.map(element => for (l))

  for (let i = 0; i < separateWords.length; i++) {
    for (let j = 0; j < separateWords[i].length; j++) {
      let character = separateWords[i][j];

      count += alphabet.indexOf(character) + 1;
    }
    wordCounts.push(count);
    count = 0;
  }

  return separateWords[wordCounts.indexOf(Math.max(...wordCounts))];
}
