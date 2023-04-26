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
