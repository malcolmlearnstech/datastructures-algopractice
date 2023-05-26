var divisorSubstrings = function (num, k) {
  num = String(num);
  let left = 0;
  let right = k - 1;
  let kBeauty = 0;

  while (right < num.length) {
    let substring = Number(num.slice(left, right + 1));
    if (Number(num) % substring === 0) {
      kBeauty++;
    }
    left++;
    right++;
  }
  return kBeauty;
};
