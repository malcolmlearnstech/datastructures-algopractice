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

/*
REFACTORED SOLUTION - 

To clean up part of and shorten our code, we can 
employ a ternary operator as an alternative the 
multi-line set up of the if/else conditional portion 
of our code.
*/

function mostFrequentItemCount(collection) {
  let object = {};

  if (collection.length == 0) {
    return 0;
  } else {
    collection.map((element) =>
      !object[element] ? (object[element] = 1) : object[element]++
    );
  }

  return Math.max(...Object.values(object));
}
