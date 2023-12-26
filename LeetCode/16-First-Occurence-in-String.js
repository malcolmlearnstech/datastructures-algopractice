var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    let haystackSubstr = haystack.substring(i, i + needle.length);
    if (haystackSubstr === needle) {
      return i;
    }
  }
  return -1;
};
