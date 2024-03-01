const orderedCount = function (text) {
  let frequency = new Map();
  let chronological = [];

  for (let i = 0; i < text.length; i++) {
    if (!frequency.has(text[i])) {
      frequency.set(text[i], 1);
    } else frequency.set(text[i], frequency.get(text[i]) + 1);
  }

  frequency.forEach((value, key) => {
    chronological.push([key, value]);
  });

  return chronological;
};

/*
REFACTORED SOLUTION -

If you are unable to remember the syntax for use of Map() object, you can emply empty object and empty array. 
You first build out the object that will hold a key-value pairs related to character frequency. To ensure that 
the key-value pairs are output in the order the characters appear, we can perform another loop thru the input 
string. As we iterate thru the string, and push the key-values to our empty array, we then delete the object 
entry that we just added. This ensures that there are no repeats within our output array. 
*/
