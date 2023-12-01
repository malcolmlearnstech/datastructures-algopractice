function mostFrequentItemCount(collection) {
  let object = {};

  if (collection.length == 0) {
    return 0;
  } else {
    collection.map((element) => {
      if (!object[element]) {
        object[element] = 1;
      } else object[element]++;
    });
  }

  return Math.max(...Object.values(object));
}
