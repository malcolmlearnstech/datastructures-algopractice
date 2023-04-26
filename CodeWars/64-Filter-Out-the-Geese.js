function gooseFilter(birds) {
  var geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];
  let nonGeese = [];
  for (const element of birds) {
    if (!geese.includes(element)) {
      nonGeese.push(element);
    }
  }
  return nonGeese;
}

/*

REFACTORED SOLUTION: An alternative to doing a for-of loop, 
we can run the filter method on the input array and instruct 
filter to only spit back elements that do not exist in the 
geese array we've created*/

function gooseFilter(birds) {
  var geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];

  return birds.filter((element) => !geese.includes(element));
}
