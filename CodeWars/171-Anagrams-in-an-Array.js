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
