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

  if (keys && !values) {
    for (i = 0; i < keys.length; i++) {
      let property = keys[i];
      if (property.length > 1) {
        let inputData = property[1];
        property = property[0];
        resultingObject[property] = inputData;
      } else {
        property = property[0];
        resultingObject[property] = undefined;
      }
    }
  }
  return resultingObject;
}
