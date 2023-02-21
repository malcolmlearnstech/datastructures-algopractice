function zipObject(keys, values) {
  let resultingObject = {};

  if (!keys && !values) {
    return resultingObject;
  }

  if (keys && values) {
    for (i = 0; i < keys.length; i++) {
      let property = keys[i];
      let inputData = values[i];
      resultingObject[property] = inputData;
    }
  }
}
