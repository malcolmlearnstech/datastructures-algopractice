function sumNoDuplicates(numList) {
  let sum = 0;
  let freq = {};

  for (let i = 0; i < numList.length; i++) {
    if (!freq[numList[i]]) {
      freq[numList[i]] = 1;
    } else freq[numList[i]]++;
  }

  for (const key in freq) {
    if (freq[key] === 1) {
      sum += Number(key);
    }
  }
  return sum;
}
