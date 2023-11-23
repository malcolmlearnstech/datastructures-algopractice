var isAnagram = function (test, original) {
  let testCount = {};
  let originalCount = {};
  test = test.toLowerCase();
  original = original.toLowerCase();

  if (test.length === original.length) {
    for (let i = 0; i < test.length; i++) {
      if (!testCount[test[i]]) {
        testCount[test[i]] = 1;
      } else testCount[test[i]]++;
    }

    for (let i = 0; i < original.length; i++) {
      if (!originalCount[original[i]]) {
        originalCount[original[i]] = 1;
      } else originalCount[original[i]]++;
    }
  } else return false;

  for (const key in testCount) {
    if (originalCount[key] !== testCount[key]) {
      return false;
    }
  }
  return true;
};
