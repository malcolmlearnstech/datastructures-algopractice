function repeats(arr) {
  let freq = {};
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!freq[arr[i]]) {
      freq[arr[i]] = 1;
    } else freq[arr[i]]++;
  }

  for (const element in freq) {
    if (freq[element] === 1) {
      num += Number(element);
    }
  }
  return num;
}
