function filterList(l) {
  let newList = [];

  l.forEach((element) => {
    if (typeof element === 'number') {
      newList.push(element);
    }
  });
  return newList;
}
