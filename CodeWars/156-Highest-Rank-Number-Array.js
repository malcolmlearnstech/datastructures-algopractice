function highestRank(arr) {
  let frequency = {};
  let max;
  let highestCount = [];

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (!frequency[element]) {
      frequency[element] = 1;
    } else frequency[element]++;
  }

  max = Math.max(...Object.values(frequency));

  for (const key in frequency) {
    if (frequency[key] === max) {
      highestCount.push(Number(key));
    }
  }

  return highestCount.length <= 1 ? highestCount[0] : Math.max(...highestCount);
}
