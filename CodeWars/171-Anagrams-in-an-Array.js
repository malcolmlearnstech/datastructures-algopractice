function anagramCounter(wordsArray) {
  wordsArray = wordsArray.map((element) =>
    element.toLowerCase().split('').sort().join('')
  );
  let anagrams = 0;
  let left = 0;

  while (left < wordsArray.length - 1) {
    let right = left + 1;

    while (right < wordsArray.length) {
      let leftWord = wordsArray[left];
      let rightWord = wordsArray[right];

      if (leftWord === rightWord) {
        anagrams++;
      }
      right++;
    }
    left++;
  }
  return anagrams;
}

/*

REFACTORED SOLUTION -

Alternative to doing two while loops with a two pointer 
method, we can partly mimic this behavior by using the forEach 
method. We can use the for loop to move thru the rest of the 
elements of the array to compare to each element currently 
iterated on by the forEach.
*/

function anagramCounter(wordsArray) {
  let anagrams = 0;
  wordsArray = wordsArray.map((element) =>
    element.toLowerCase().split('').sort().join('')
  );

  wordsArray.forEach((word, index) => {
    for (let i = index + 1; i < wordsArray.length; i++) {
      if (word === wordsArray[i]) {
        anagrams++;
      }
    }
  });

  return anagrams;
}
