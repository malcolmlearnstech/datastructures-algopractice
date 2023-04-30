function validAnagram(str, target) {
  if (str.length !== target.length) {
    return false;
  }
  str = str.split('').sort();
  target = target.split('').sort();

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== target[i]) {
      return false;
    }
  }
  return true;
}

/*
ALTERNATIVE SOLUTION FROM CLASS:

The alternative makes use of objects to count frequency and then iterate 
thru both objects to compare the values of each key. This option allows 
to keep Time Complexity at O(N) and Space Complexity at O(1).
*/

function validAnagram(str, target) {
  if (str.length !== target.length) return false;

  let counts = {}; //Space: O(26)
  let loop = str.length;

  //Tally chars of str and target in counts object
  for (let i = 0; i < loop; i++) {
    //Time: O(N)
    let sChar = str[i];
    let tChar = target[i];

    //Tally str chars in counts object
    if (!counts[sChar]) {
      counts[sChar] = 0;
    } else {
      counts[sChar]++;
    }

    //Tally target chars in counts object
    if (!counts[tChar]) {
      counts[tChar] = 0;
    } else {
      counts[tChar]--;
    }
  }

  //Go through counts object to see if all values equal 0
  for (let char in counts) {
    //Time: O(26)
    if (counts[char] !== 0) {
      return false;
    }
  }

  return true;

  //Time Complexity: O(N) + O(26) = O(N + 26) => O(N)
  //Space Complexity: O(26) + O(26) = O(52) => O(1)
}
