var isAnagram = function (s, t) {
  let sObject = {};

  for (let i = 0; i < s.length; i++) {
    let sChar = s[i];

    if (!sObject[sChar]) {
      sObject[sChar] = 1;
    } else {
      sObject[sChar]++;
    }
  }

  for (let i = 0; i < t.length; i++) {
    let tChar = t[i];

    if (sObject[tChar]) {
      sObject[tChar]--;
    } else {
      return false;
    }
  }

  for (let key in sObject) {
    if (sObject[key] !== 0) {
      return false;
    }
  }

  return true;
};
