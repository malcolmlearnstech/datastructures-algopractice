function toNumberArray(stringArray) {
  let newArray = [];

  for (let i = 0; i < stringArray.length; i++) {
    newArray.push(Number(stringArray[i]));
  }

  return newArray;
}
