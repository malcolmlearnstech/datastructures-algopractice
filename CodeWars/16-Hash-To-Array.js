function convertHashToArray(hash) {
  let returnArray = [];

  for (const property in hash) {
    returnArray.push([property, hash[property]]);
  }

  return returnArray.sort();
}
